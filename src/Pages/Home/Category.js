import React from "react";
import Loading from "../../component/Loading";
import useOrders from "../../customeHook/useOrders";

import useProducts from "../../customeHook/useProducts";
import Product from "./Product";

const Category = () => {
  // const [allday] = useProducts("allday");
  const [allday, refetch] = useOrders("allday");
  const [sandwich] = useProducts("sandwich");
  const [burgers] = useProducts("burgers");
  const [fresh] = useProducts("fresh");
  const [newarrival] = useProducts("newarrival");
  const [rice] = useProducts("rice");
  const [noodle] = useProducts("noodle");
  const [biryani] = useProducts("biryani");
  const [accompaniments] = useProducts("accompaniments");
  const [sides] = useProducts("sides");

  return (
    <div className="grid grid-cols-5 p-5 gap-5 " id="nav">
      <div className=" ">
        <ul className="space-y-5 sticky top-24">
          {/* <!-- Sidebar content here --> */}
          <li className="my-category">
            <a href={"#allday"}>All day breakfast</a>
          </li>
          <li className="my-category">
            <a href={"#sandwich"}>Sandwiches</a>
          </li>
          <li className="my-category">
            <a href={"#burgers"}>Burgers & Wraps</a>
          </li>
          <li className="my-category">
            <a href={"#fresh"}>Fresh Desserts</a>
          </li>
          <li className="my-category">
            <a href={"#newarrival"}>New Arrivals</a>
          </li>
          <li className="my-category">
            <a href={"#rice"}>Rice Bowls</a>
          </li>
          <li className="my-category">
            <a href={"#noodle"}>Noodle Bowls</a>
          </li>
          <li className="my-category ">
            <a href={"#biryani"}>Biryanis & Thalis</a>
          </li>
          <li className="my-category">
            <a href={"#sides"}>Sides & Beverages</a>
          </li>
          <li className="my-category">
            <a href={"#accompaniments"}>Accompaniments</a>
          </li>
        </ul>
      </div>
      {/* <!-- Page content here --> */}
      <div className="col-span-4">
        <section id="allday" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            All day breakfast
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {allday?.map((product) => (
              <Product
                refetch={refetch}
                product={product}
                value={allday}
                key={product._id}
              />
            ))}
          </div>
        </section>
        <section id="sandwich" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Sandwiches
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {sandwich?.map((product) => (
              <Product product={product} value={sandwich} key={product._id} />
            ))}
          </div>
        </section>
        <section id="burgers" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Burgers & Wraps
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {burgers?.map((product) => (
              <Product product={product} value={burgers} key={product._id} />
            ))}
          </div>
        </section>
        <section id="fresh" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Fresh Desserts
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {fresh?.map((product) => (
              <Product product={product} value={fresh} key={product._id} />
            ))}
          </div>
        </section>
        <section id="newarrival" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            New Arrivals
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {newarrival?.map((product) => (
              <Product product={product} value={newarrival} key={product._id} />
            ))}
          </div>
        </section>
        <section id="rice" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Rice Bowls
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {rice?.map((product) => (
              <Product product={product} value={rice} key={product._id} />
            ))}
          </div>
        </section>
        <section id="noodle" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Noodle Bowls
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {noodle?.map((product) => (
              <Product product={product} value={noodle} key={product._id} />
            ))}
          </div>
        </section>
        <section id="biryani" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Biryanis & Thalis
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {biryani?.map((product) => (
              <Product product={product} value={biryani} key={product._id} />
            ))}
          </div>
        </section>
        <section id="sides" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            Sides & Beverages
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {sides?.map((product) => (
              <Product product={product} value={sides} key={product._id} />
            ))}
          </div>
        </section>
        <section id="accompaniments" className="mb-10">
          <h2 className="lg:text-4xl md:text-4xl text-xl font-semibold mb-3">
            {" "}
            Accompaniments
          </h2>
          <div className="grid lg:gird-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {accompaniments?.map((product) => (
              <Product
                product={product}
                value={accompaniments}
                key={product._id}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Category;
