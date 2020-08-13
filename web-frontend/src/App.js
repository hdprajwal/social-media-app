import React from "react";
import "./assets/main.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="flex bg-gray-900 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="flex items-center -mx-6">
            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div className="flex items-center">
                <Logo className="w-10" />
                {/* <img className="h-10 w-10" src={require("./assets/logo.svg")} alt="logo"/> */}
                <span className="px-4 text-white hidden">User Name</span>
              </div>
            </div>
            <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
              <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
                <div className="relative pr-4">
                  <input
                    className="text-gray-600 py-2 text-left px-10 w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none select-none truncate focus:bg-gray-900 focus:border-gray-300 bg-gray-800"
                    placeholder="Search"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
                <div className="flex justify-around items-center text-gray-500">
                  <button className="flex items-center hover:bg-gray-800 mr-4">
                    <img
                      className="h-10 w-10"
                      src={require("./assets/logo.svg")}
                      alt="Logo"
                    />
                  </button>
                  <button className="flex items-center hover:text-gray-700 mr-4">
                    <img
                      className="h-10 w-10"
                      src={require("./assets/logo.svg")}
                      alt="Logo"
                    />
                  </button>
                  <button className="flex items-center hover:text-gray-700 mr-4">
                    <img
                      className="h-10 w-10"
                      src={require("./assets/logo.svg")}
                      alt="Logo"
                    />
                  </button>
                  <button className="h-10 w-10 flex items-center hover:text-gray-700 mr-4">
                    <img
                      className="h-full w-full"
                      src={require("./assets/logo.svg")}
                      alt="Logo"
                    />
                  </button>
                  <button className="flex items-center hover:text-gray-700 mr-4">
                    <img
                      className="h-10 w-10"
                      src={require("./assets/logo.svg")}
                      alt="Logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 w-full text-white">Hello World</div>
    </div>
  );
};

export default App;
