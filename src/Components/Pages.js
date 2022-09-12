
import React, { useContext, useEffect } from "react";
import NavBar from './NavBar'
import Home from './Home'
import Product from './Product'
import {ProductItems} from './ProductItems'
import { GlobalContext } from './Context/GlobalContext'
import {Data} from './Context/Data'
import Cart from "./Cart";


import { BrowserRouter, Routes , Route } from 'react-router-dom'



export default function Pages() {

const {receivedProduct} = useContext(GlobalContext);

useEffect(()=>{
  receivedProduct(Data);
  console.log("Data", Data);
},[])



  return (<>
  <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/men" element={<Product category ='men'/>} />
    <Route path='/women' element={<Product category ='women'/>} />
    <Route path='/kids'  element={<Product category ='kids'/>}/>
    <Route path='/ProductItems/:id'  element={<ProductItems/>}/>
    <Route path="/cart" element={<Cart />} />
   


    </Routes>
  </BrowserRouter>


    <div className='pages'>
    {/* <NavBar/> */}

    {/* <Home/> */}


    </div>
    </>)
}
