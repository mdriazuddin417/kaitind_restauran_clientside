import React from "react";
import { NavLink } from "react-router-dom";
import useProducts from "../../customeHook/useProducts";
import Product from "./Product";

const Category = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="grid grid-cols-5 p-5 gap-5">
      <div className="">
        <ul className="space-y-3">
          {/* <!-- Sidebar content here --> */}
          <li className="my-category">
            <NavLink to={"#"}>MEALS FOR STEAL</NavLink>
          </li>
          <li className="my-category">
            <NavLink to={"#"}>MEALS FOR STEAL</NavLink>
          </li>
          <li className="my-category">
            <NavLink to={"#"}>MEALS FOR STEAL</NavLink>
          </li>
          <li className="my-category">
            <NavLink to={"#"}>MEALS FOR STEAL</NavLink>
          </li>
        </ul>
      </div>
      {/* <!-- Page content here --> */}
      <div className="col-span-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

/* 
1. category click => All Meal meal 
*/
