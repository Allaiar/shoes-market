import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createShoes, getShoes } from "../../redux/shoes/shoesSlice";

const Modal = ({ setModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [url, setUrl] = useState(null);

  const create = useCallback(() => {
    const shoesData = {
      title: title,
      price: price,
      img: url,
    };
    dispatch(createShoes(shoesData)).then(() => {
      dispatch(getShoes());
      setModal(false);
    });
  }, [title, price, url, dispatch]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        backdropFilter: "blur(10px)",
        top: "0",
        left: "0",
        zIndex: 9999
      }}
    >
      <div
        style={{
          width: "400px",
          margin: "20px auto",
          border: "solid 1px black",
          padding: "30px",
          borderRadius: "10px",
          background: "white",
          position: "fixed",
          top: "50px",
          right: "35%",
        }}
      >
        <button onClick={() => setModal(false)}>Закрыть</button>
        <h4
          class="text-xl font-bold text-black mb-3"
          style={{ width: "57%", margin: "15px auto" }}
        >
          Добавить одежду
        </h4>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Название одежды
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Название"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="phone"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Цена
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="phone"
            name="phone"
            id="phone"
            placeholder="Цена обуви"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Ссылка на фотографию
          </label>
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Ссылка"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={create}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
