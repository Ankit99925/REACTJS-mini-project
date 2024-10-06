import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products]=useContext(ProductContext);
  let distinct_category= products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinct_category=[...new Set(distinct_category)];
  
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="px-3 py-5 border rounded border-violet-500 text-green-600"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((c,i)=>(<Link key={i} to={`/?category=${c}`} className="flex items-center mb-2">
          <span className="rounded-full w-[15px] h-[15px] bg-blue-400 mr-2 my-1"></span>{""}{c}
        </Link>))}
        
        
      </div>
    </nav>
  );
}

export default Nav;
