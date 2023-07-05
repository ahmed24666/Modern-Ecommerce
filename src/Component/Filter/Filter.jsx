import './filter.scss'
import React from 'react'
import { CartState } from '../../Context/Context';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
    const {state,value, setValue,min,max,setCategory,setOwner, setSearch,filteredSearch}=CartState()
    const brands=[]
    state.products.forEach(element => {
        if (!brands.includes(element.owner)) {
            brands.push(element.owner)
        }
        return brands;
    });
    return (
        <div className='Filter'>
            <h4 >products displayed : {filteredSearch.length}</h4>
            <h1>Search</h1>
            <div className="search">
                <input type="text" placeholder='Live Search' onChange={(e)=>setSearch(e.target.value)}/>
                <div className="iconS"><BsSearch/></div>
            </div>
            <h1>Price</h1>
            <input type="range" min={min.price} max={max.price} onChange={(e)=>setValue(e.target.value)}/>
            <div className="range">Price : LE {min.price} -- LE {value}</div>
            <h1>Collections</h1>
            <div className="category">
                <h4 onClick={()=>setCategory('All')}>All</h4>
                <div className="num">{state.products.length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Earrings')}>Earrings</h4>
                <div className="num">{state.products.filter((item)=>item.category==='Earrings').length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Bracelets')}>Bracelets</h4>
                <div className="num">{state.products.filter((item)=>item.category==='Bracelets').length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Charms')}>Charms</h4>
                <div className="num">{state.products.filter((item)=>item.category==='Charms').length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Necklaces')}>Necklaces</h4>
                <div className="num">{state.products.filter((item)=>item.category==='Necklaces').length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Shop Earrings')}>Shop Earrings</h4>
                <div className="num">{state.products.filter((item)=>item.category==='Shop Earrings').length}</div>
            </div>
            <div className="category">
                <h4 onClick={()=>setCategory('Wedding & Bridal')}>Wedding & Bridal</h4>
                <div className="num">{state.products.filter((item)=>item.category ==='Wedding & Bridal').length}</div>
            </div>
            <h1>brands</h1>
            <div className="category">
                <h4 onClick={()=>setOwner('All')}>All</h4>
                <div className="num">{state.products.length}</div>
            </div>
            {brands.map((item)=>{
                return(        
                    <div className="category">
                        <h4 onClick={()=>setOwner(item)}>{item}</h4>
                        <div className="num">{state.products.filter((i)=>i.owner ===item).length}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Filter
