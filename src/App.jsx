import './app.scss'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import WishList from "./Pages/WishList/WishList";
import Context from './Context/Context';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Loader from './Component/Loader/Loader';
function App() {
  const Layout=()=>{
    const [scroll, setscroll] = useState(false)
    const show=()=>{
      if(window.scrollY >= 150){
          setscroll(true)
      }else{
          setscroll(false)
      }
    }
    window.addEventListener('scroll',show)
    const [isLoader, setIsLoader] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoader(false)
      }, 3000);
    }, [])
    return(
      <Context>
        <div className="app">
        {isLoader?(<Loader/>):(
          <>
          <Navbar/>
          <Outlet/>
          <Footer/>
          <div className={scroll ? 'scrollToTop no' : "scrollToTop"}>
            <a href={`#nav`}>
              <RxDoubleArrowUp/>
            </a>
          </div>
          </>
        )}
        </div>
      </Context>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/singleproduct/:Id",
          element: <SingleProduct/>,
        },
        {
          path: "/wishlist",
          element: <WishList/>,
        },
      ]
    },
  ]);
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;