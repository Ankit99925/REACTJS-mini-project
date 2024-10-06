import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import axios from "../utils/axios";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";
function Details() {
    const navigate= useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
//   const getsingleproduct = async () => {
//     try {
//       const { data } = await axios.get(`/products/${id}`);
//       setproduct(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  useEffect(() => {
    if(!product){
        setproduct(products.filter((p)=> p.id==id)[0]);

    }
    // getsingleproduct();
  }, []);

  const ProductDeleteHandler=(id)=>{
    const FilteredProducts = products.filter((p) => p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    toast.success("Product Deleted successfully")
    navigate("/");
  }
  return product ? (
    <div className="w-[70%] flex h-[80%] justify-between items-center m-auto p-[10%] border-2 border-black">
      <img
        className="object-contain h-full w-[45%]"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[50%]  ">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 my-3">{product.price}</h2>
        <p className="mb-[6%]">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="mr-[2%] px-3 py-2 border rounded border-blue-500 text-blue">
          Edit
        </Link>
        <button onClick={()=>ProductDeleteHandler(product.id)} className="px-3 py-2 border rounded border-red-500 text-red">
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
