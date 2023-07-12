import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/index";
import { useSelector, useDispatch } from "react-redux";
import carticon from "../../assets/icons/carticon.png";
import ShopCartModal from "../ShopCart/index";
import { getShoes } from "../../redux/shoes/shoesSlice";

function NavAndMenu(props) {
  const { itemInCart } = useSelector((state) => state.cart);
  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [showMenuToggle, setShowMenuToggle] = useState(true);
  const [isListVisible, setListVisible] = useState(false);
  const [isListVisibleTwo, setListVisibleTwo] = useState(false);
  const shoes = useSelector((state) => state.shoes.shoes);
  const filterShoesList =
    shoes &&
    shoes.filter((shoe) =>
      shoe.title.toLowerCase().includes(searchText.toLowerCase())
    );
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(getShoes());
  }, [dispatch]);

  const handleClick = () => {
    setListVisible(true);
    setShowMenuToggle(false);
  };

  const MenuTimes = () => {
    setListVisibleTwo(false);
    setTimeout(() => {
      setShowMenuToggle(true);
      setListVisible(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setListVisibleTwo(false);
        setTimeout(() => {
          setShowMenuToggle(true);
          setListVisible(false);
        }, 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="shadow">
        <div
          ref={inputRef}
          className="flex justify-between items-center py-6 px-10 container mx-auto"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-tr from-slate-400 to-slate-900 bg-clip-text text-transparent hover:cursor-pointer">
              <Link to="/">Chic Boutique</Link>
            </h1>
          </div>
          <ul className="sm:flex hidden gap-x-3 mr-5">
            <div ref={inputRef} className="relative">
              <input
                type="search"
                placeholder="Поиск"
                className="bg-gray-100 mt-2 rounded-md outline-none pl-2.5 ring-green-700 w-72 pt-1 pb-2 transition-all duration-500"
                style={{
                  maxWidth: isListVisible ? "320px" : "0",
                  opacity: isListVisible ? 1 : 0,
                }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onClick={() => setListVisibleTwo(true)}
              />
              <div
                className="absolute mt-1 h-96 overflow-auto transition-all duration-500 bg-white"
                style={{
                  maxHeight: isListVisibleTwo ? "290px" : "0",
                  opacity: isListVisibleTwo ? 1 : 0,
                  zIndex: 9999,
                }}
              >
                <ul>
                  {filterShoesList &&
                    filterShoesList.map((shoe) => (
                      <Link
                        to={`/${shoe.id}`}
                        onClick={MenuTimes}
                        className="text-slate-600 hover:text-slate-400"
                      >
                        <li
                          key={shoe.id}
                          className="p-2 border-b cursor-pointer"
                        >
                          {shoe.title}
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
            {showMenuToggle ? (
              <li onClick={handleClick} className="mt-2 text-3xl cursor-pointer">
                  <ion-icon name="search-outline"></ion-icon>
              </li>
            ) : (
              <button className="text-3xl" onClick={MenuTimes}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            )}
            <li>
              <div
                style={{
                  width: "20px",
                  color: "#fff",
                  borderRadius: "50%",
                  backgroundColor: "#fff000",
                  fontSize: "14px",
                  height: " 18px",
                  top: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  zIndex: 999,
                }}
              >
                {itemInCart.length}
              </div>
              <button
                onClick={() => setCart(true)}
                className="py-2 px-3 text-3xl"
              >
                <ion-icon name="cart-outline"></ion-icon>
              </button>
            </li>
            <li>
              <p
                onClick={() => setModal(true)}
                className="text-3xl mt-2 cursor-pointer"
              >
                <ion-icon name="add-outline"></ion-icon>
              </p>
            </li>
            {modal && <Modal setModal={setModal} />}
            {cart && <ShopCartModal cart={cart} setCart={setCart} />}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavAndMenu;
