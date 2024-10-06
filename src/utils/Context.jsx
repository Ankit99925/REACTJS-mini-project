import React, { createContext, useEffect } from 'react';
import axios from './axios';
import { useState } from 'react';

export const ProductContext= createContext();
function Context(props) {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) ||null);
    // const getproducts=async() =>{
    //     try {
    //         const {data}=await axios("/products");
    //         setproducts(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(()=>{getproducts();},[]);

    return (
    <ProductContext.Provider value={[products, setproducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context