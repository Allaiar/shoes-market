import React from "react";
import Header from "../../components/Header/index";
import Shoes from "../../components/Shoes";
import ProductItem from "../ProductItem";
function HomePage(props) {
  return (
    <div>
      <Header/>
      <Shoes/>
      <ProductItem/>
    </div>
  );
}

export default HomePage;
