import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import ProductItem from "../pages/ProductItem";
import Shoes from "../components/Shoes";
import NavAndMenu from "../components/NavAndMenu"
import Policy from "../pages/Policy";
const routes = () => {
  return <div>
    <NavAndMenu/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<Shoes/>}/>
        <Route path='/:id' element={<ProductItem/>}/>
        <Route path='/policy' element={<Policy/>}/>
    </Routes>
    <Footer/>
  </div>;
};

export default routes;
