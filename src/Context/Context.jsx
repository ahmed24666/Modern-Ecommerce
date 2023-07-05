import React, { useContext, useEffect, useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import products from "./../Data/Products";
const Cart = createContext()

const Context = ({ children }) => {

    // range
    const min = products.reduce(function (prev, curr) {
        return prev.price < curr.price ? prev : curr;
    });
    const max = products.reduce(function (prev, curr) {
        return prev.price > curr.price ? prev : curr;
    });
    const [value, setValue] = useState(max.price)
    const priceRangeProducts = products.filter((item) => item.sale === 0 ? item.price <= value : (item.price - (item.price * (item.sale / 100))).toFixed(2) <= value)

    // range 
    // filtercat
    const [category, setCategory] = useState('All')
    const [filteredCat, setFilteredCat] = useState(priceRangeProducts)
    // filtercat
    // owner
    const [owner, setOwner] = useState('All')
    const [filteredOwner, setFilteredOwner] = useState(filteredCat)
    // owner
    // search 
    const [search, setSearch] = useState('')
    const [filteredSearch, setFilteredSearch] = useState(filteredOwner)
    // search 
    const filtered = priceRangeProducts.filter((item) => item.category === category)
    const Ownerfiltered = filteredCat.filter((item) => item.owner === owner)
    const Searchfiltered = filteredOwner.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        if (category === 'All') {
            setFilteredCat(priceRangeProducts)
            return;
        }
        setFilteredCat(filtered)
    }, [category, priceRangeProducts, filtered])
    useEffect(() => {
        if (owner === 'All') {
            setFilteredOwner(filteredCat)
            return;
        }
        setFilteredOwner(Ownerfiltered)

    }, [Ownerfiltered, owner, filteredCat, filteredOwner])
    // darkMode
    let localModeData = JSON.parse(localStorage.getItem('mode'))
    const [darkMode, setDarkMode] = useState(localModeData)
    useEffect(() => {
        localStorage.setItem('mode', darkMode)
    }, [darkMode])
    // darkMode 
    useEffect(() => {
        if (search === '') {
            setFilteredSearch(filteredOwner)
            return;
        }
        setFilteredSearch(Searchfiltered)
    }, [Ownerfiltered, owner, filteredCat, search, Searchfiltered, filteredOwner, filteredSearch])
    // redusers
    const cartReducer = (cartstate, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                const existingItem = cartstate.cart.find((item) => item.id === action.payload.id);
                if (existingItem) {
                    // If the product already exists in the cart, increase its quantity by 1
                    return {
                        ...cartstate,
                        cart: cartstate.cart.map((item) =>
                            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                        ),
                    };
                } else {
                    // If the product doesn't exist in the cart, add it with a quantity of 1
                    return { ...cartstate, cart: [...cartstate.cart, { ...action.payload, qty: 1 }] };
                }
            case "DECREASE_QUANTITY":
                const itemIndex = cartstate.cart.findIndex((item) => item.id === action.payload.id);

                if (cartstate.cart[itemIndex].qty === 1) {
                    // If the quantity is already 1, remove the product from the cart
                    const updatedCart = cartstate.cart.filter((item) => item.id !== action.payload.id);
                    return { ...cartstate, cart: updatedCart };
                } else {
                    // Decrease the quantity of the product by 1
                    const updatedCartItem = { ...cartstate.cart[itemIndex], qty: cartstate.cart[itemIndex].qty - 1 };
                    const updatedCart = [...cartstate.cart];
                    updatedCart[itemIndex] = updatedCartItem;
                    return { ...cartstate, cart: updatedCart };
                }
            case "REMOVE_FROM_CART":
                return {
                    ...cartstate,
                    cart: cartstate.cart.filter((item) => item.id !== action.payload.id),
                };
            default:
                return cartstate;
        }
    };


    const FaveReducer = (state, action) => {
        switch (action.type) {
            case 'ADDTOFAVE':
                return { ...state, fave: [...state.fave, { ...action.payload }] }
            case 'REMOVEFROMFAVE':
                return { ...state, fave: state.fave.filter((c) => c.id !== action.payload.id) }
            default:
                return state;
        }
    }
    // redusers
    let localFavaData = JSON.parse(localStorage.getItem('fave'))
    let localCartData = JSON.parse(localStorage.getItem('cart'))

    const [cartstate, cartdispatch] = useReducer(cartReducer, {
        cart: localCartData === null ? [] : localCartData
    })
    const [state, dispatch] = useReducer(FaveReducer, {
        products: products,
        fave: localFavaData === null ? [] : localFavaData
    })
    useEffect(() => {
        localStorage.setItem('fave', JSON.stringify(state.fave))
        localStorage.setItem('cart', JSON.stringify(cartstate.cart))
    }, [state.fave, cartstate.cart])
    return (
        <Cart.Provider value={{ state, dispatch, value, setValue, min, max, filteredCat, setCategory, filteredOwner, setOwner, cartstate, cartdispatch, search, setSearch, filteredSearch, darkMode, setDarkMode }}>
            {children}
        </Cart.Provider>
    )
}

export default Context
export const CartState = () => {
    return useContext(Cart)
}
