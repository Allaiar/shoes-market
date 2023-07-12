import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemInCart } from "../../redux/cart/cartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(deleteItemInCart(item));
  };
  return (
    <>
      <div
        style={{ width: "620px", height: "85px", alignItems: "center" }}
        class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
      >
        <img
          style={{ width: "55px", height: "48px", borderRadius: "50%" }}
          src={item.img}
          alt="product-image"
          className="cover"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{item.title}</h2>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center space-x-4">
              <p class="text-sm">{item.price} USD</p>
              <button onClick={() => deleteItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
