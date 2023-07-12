import React from "react";
import img from "../../assets/images/header-img.png";
import { Link } from "react-router-dom";
function index(props) {
  return (
    <>
      <main>
        <section>
          <div
            style={{ background: `url(${img})`, backgroundSize: "cover" }}
            class="bg-gray-100 px-4 py-20 h-full"
          >
            <div class="h-96 flex justify-end items-center">
              <div class="mr-12 flex flex-col items-center">
                <h2 class="text-4xl text-center">Chic Boutique</h2>
                <p class="mt-4 font-medium text-center max-w-lg">
                  Очаровательные новинки и непревзойденный стиль ждут вас в
                  нашем интернет-магазине одежды. Мы рады приветствовать вас
                  среди наших ценителей моды и стиля, где каждая деталь имеет
                  значение. Здесь вы найдете коллекции, которые подчеркнут вашу
                  индивидуальность, создадут неповторимый образ и подарят
                  уверенность в себе.
                </p>
                <button class="uppercase flex mt-8 text-sm justify-center bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">
                  <Link to="/collection">Посмотреть коллекцию</Link>
                </button>
              </div>
            </div> 
          </div>
        </section>
      </main>
    </>
  );
}

export default index;
