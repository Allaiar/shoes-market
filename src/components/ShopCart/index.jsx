import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import backicon from "../../assets/icons/backicon.png";
import Cartitem from "../cartItems";

const ShopCartModal = ({ setCart }) => {
  const { itemInCart } = useSelector((state) => state.cart);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            width: "1100px",
            border: "solid 1px black",
            padding: "30px",
            borderRadius: "10px",
            background: "white",
          }}
        >
          <div className="bg-gray-100">
            <li>
              <button
                onClick={() => setCart(false)}
                className="w-15 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
              >
                <img className="w-5" src={backicon} alt="Back Icon" />
              </button>
            </li>
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {itemInCart &&
                  itemInCart.map((el) => <Cartitem key={el.id} item={el} />)}
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">$129.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$4.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div>
                    <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCartModal;
