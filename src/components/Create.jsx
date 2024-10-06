import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
   const navigate= useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      description.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5
    ) {
      alert(
        "All fields are required and title must have at least 5 characters"
      );
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      price,
      category,
      description,
    };
    setproducts([...products,product]);
    localStorage.setItem("products",JSON.stringify([...products,product]))
    toast.success("Product Added successfully")
    navigate("/");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-100 rounded  p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="description"
        type="text"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <button className="px-3 py-5 border rounded border-violet-500 text-green-600">
        {" "}
        ADD PRODUCT
      </button>
    </form>
  );
}

export default Create;
