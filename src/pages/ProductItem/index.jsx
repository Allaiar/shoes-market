import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { setItemInCart } from '../../redux/cart/cartSlice';

const ProductItem = () => {
  const { id } = useParams();
  const { shoes } = useSelector((state) => state.shoes);
  console.log(shoes);
  const shoesItem = shoes && shoes[id];

  const dispatch = useDispatch();

  const addinCart = () => {
    dispatch(setItemInCart(shoes));
  };

  if (!shoesItem) {
    return <div></div>;
  }

  return (
    <div class="flex items-center lg:p-20 overflow-hidden relative" style={{zIndex: 0}}>
      <div class="w-full max-w-6xl rounded bg-white shadow-xl lg:p-14 mx-auto text-gray-800 relative md:text-left">
        <Link to="/" className="font-bold">
          ←Назад
        </Link>
        <div class="md:flex items-center -mx-10">
          <div class="px-10 mb-10 md:mb-0">
            <div class="relative">
              <img src={shoesItem.img} class="h-96 relative z-10" alt="" />
              <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-10">
            <div class="mb-10">
              <h1 class="font-bold uppercase text-2xl mb-5">
                Mens's Ragged <br></br>Waterproof Jacket
              </h1>
              <p class="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos,
                voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas
                id quo porro dolorum facilis...{" "}
                <a
                  href="#"
                  class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                >
                  MORE <i class="mdi mdi-arrow-right"></i>
                </a>
              </p>
            </div>
            <div>
              <div class="inline-block items-start mr-5">
                <p class="text-sm line-through">${shoesItem.noprice}</p>
                <span class="font-bold text-5xl ml-3">
                  ${shoesItem.price}
                </span>
              </div>
              <div class="inline-block align-bottom">
                <button onClick={() => addinCart()} class="bg-yellow-400 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
