import React, { useEffect } from "react";
import Spinner from "../Spinner";
import { getShoes } from "../../redux/shoes/shoesSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoesItem from "../ShoesItem/index";
const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes, isLoading } = useSelector((state) => state.shoes);
  useEffect(() => {
    dispatch(getShoes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-y-3 mt-20">
        <h1 className="font-extrabold text-2xl">WOMEN’S FASHION</h1>
        <p className="text-slate-600 font-light">Shop our new arrivals from established brands</p>
      </div>
      <div className="grid grid-cols-4 gap-5 px-10 container mx-auto max-w-7xl mt-20">
        {shoes && shoes.map((el) => <ShoesItem key={el.id} shoes={el} />)}
      </div>
    </div>
  );
};

export default Shoes;
