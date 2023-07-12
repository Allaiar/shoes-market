import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../assets/icons/footer-icon.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get(`http://localhost:8000/users?name=${id}`)
        .then((response) => {
          if (response.data.id === id) {
            toast.warning("Имя пользователя уже зарегистрировано");
          } else {
            axios
              .post("http://localhost:8000/users", {
                id: id,
              })
              .then((res) => {
                toast.success("Регистрация успешно выполнена");
                const userListItem = res.data;
                setUsers([userListItem, ...users]);
                setId("");
              })
              .catch(() => {
                toast.warning("Ошибка такой Email адрес уже зарегистрирован");
                setId("");
              });
          }
        })
        .catch(() => {
          toast.error("Ошибка сервера");
        });
    }
  };

  const validate = () => {
    if (id === "" || id === null) {
      toast.error("Заполните email");
      return false;
    }
    return true;
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <footer className="footer border border-t-2">
        <div className="flex justify-between mt-10 px-16 flex-wrap gap-y-20">
          <div className="flex flex-col gap-y-7">
            <h4 className="text-2xl font-bold bg-gradient-to-tr from-slate-200 to-slate-900 bg-clip-text text-transparent hover:cursor-pointer">
              Chic Boutique
            </h4>
            <p className="max-w-md text-xl">
              We earned a reputation of being good at what we do. Let us take
              your online shop to new dimension in success!
            </p>
            <div className="flex gap-x-3 items-center">
              <img className="w-5" src={icon} alt="icon" />
              <p className="footer-text-2">Nargiza, Kyrgyzstan 3500</p>
            </div>
            <div>
              <a
                href="mailto:kawsarahmed0210@gmail.com"
                className="underline text-xl"
              >
                kawsarahmed0210@gmail.com
              </a>
              <p className="mt-2">01647470457</p>
              <div className="flex gap-x-4 mt-4">
                <a
                  href="https://ru-ru.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-6 cursor-pointer"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/07l20l7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-6 cursor-pointer"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://t.me/Naku6ka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-6 cursor-pointer"
                    src={telegram}
                    alt="telegram"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-6 cursor-pointer"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <h5 className="font-bold text-xl">RECIVE EMAIL UPDATES</h5>
            <div className="email-container">
              <div className="flex items-center">
                <input
                  className="w-96 mr-2 bg-slate-100 pl-2.5 py-2 rounded-md"
                  type="email"
                  placeholder="Your Email Address"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="ml-80 absolute bg-slate-100 font-bold text-slate-700 pl-3"
                >
                  JOIN
                </button>
              </div>
            </div>
            <div className="flex gap-x-14 mt-10">
              <div className="flex flex-col gap-y-5">
                <h6 className="text-xl font-bold text-slate-700">SHOP</h6>
                <p
                  className="text-slate-500 cursor-pointer"
                >
                  Shop
                </p>
                <Link to="/collection">
                  <p className="text-slate-500">Collection</p>
                </Link>
                <p className="text-slate-500">Lookbook</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <h6 className="text-xl font-bold text-slate-700">HELP</h6>
                <Link to="/policy">
                  <p className="text-slate-500">Privacy Policy</p>
                </Link>
                <p className="text-slate-500">Terms and Conditions</p>
                <p className="text-slate-500">Return and Exchanges</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <h6 className="text-xl font-bold text-slate-700">ABOUT</h6>
                <p className="text-slate-500">Journal</p>
                <a
                  href="tel:996990200225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-slate-500">Contact</p>
                </a>
                <p className="text-slate-500">Store Location</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-20 h-16 bg-slate-300 flex justify-center items-center text-gray-600">
          Copyright © 2023 . Chic Boutique All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
