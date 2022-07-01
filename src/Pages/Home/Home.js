import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import CategoryHeader from "./CategoryHeader";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryHeader />
      <Category />
    </div>
  );
};

export default Home;
