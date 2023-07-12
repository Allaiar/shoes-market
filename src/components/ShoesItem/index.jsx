import React from 'react';
import { Link } from 'react-router-dom';
import { setItemInCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ShoesItem = ({ shoes}) => {
  const dispatch = useDispatch();

  const addinCart = () => {
    dispatch(setItemInCart(shoes));
  };
  return (
    <div className="mb-16">
      <Link to={`/${shoes.id}`}>
        <a href="#">
          <img class="w-96 object-cover max-h-96" src={shoes.img} alt="" />
        </a>
      </Link>
      <div class="">
        <p className="text-slate-500 text-xs mt-5">IGURE</p>
        <a href="#">
          <h5 class="mb-2 mt-2 font-bold text-black ">
          {shoes.title}
          </h5>
        </a>
        <div className="flex gap-x-5 flex-wrap">
          <p className="line-through font-thin">${shoes.noprice}</p>
          <p class="mb-3 font-medium text-red-500">
            ${shoes.price}
          </p>
        </div>
        <button
          onClick={() => addinCart()}
          className="mt-3 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ShoesItem;
