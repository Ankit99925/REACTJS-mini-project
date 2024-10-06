import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../utils/Context";
import { toast } from "react-toastify";

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({...product,[e.target.name]:e.target.value })
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  },[id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.description.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.category.trim().length < 5
    ) {
      alert(
        "All fields are required and title must have at least 5 characters"
      );
      return;
    }
    const pi =products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = {...products[pi],...product };
    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product Edited successfully")
    navigate(-1);
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={ChangeHandler}
        name="image"
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={ChangeHandler}
        name="title"
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-100 rounded  p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          name="category"
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          name="price"
          value={product && product.price}
        />
      </div>
      <textarea
        value={product && product.description}
        onChange={ChangeHandler}
        name="description"
        placeholder="description"
        type="text"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <button className="px-3 py-5 border rounded border-violet-500 text-green-600">
        {" "}
        EDIT PRODUCT
      </button>
    </form>
  );
};

export default Edit;
