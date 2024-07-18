import React, { useState, useContext } from "react";
import { NewsContext } from "./context/NewsContext";
import SideBar from "./SideBar";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const { searchNews } = useContext(NewsContext);
  const [searchInput, setSearchInput] = useState("");
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleLogoClick = () => {
    setShowSidebar(true);
  };

  const handleCloseClick = () => {
    setShowSidebar(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchNews(searchInput);
  };

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r bg-slate-900 md:px-4 lg:px-6 p-4 m-0 mt-0 fixed top-0 w-full z-10 rounded py-3 sm:px-2 sm:py-2 xl:px-8 xl:py-4">
      <div className="flex justify-start lg:w-1/4 sm:w-full xl:w-1/5">
        <span className="hover:text-blue-800 text-white">
          <FaSun
            className="w-7 h-7 m-2 lg:w-16 xl:w-20 cursor-pointer"
            onClick={handleLogoClick}
          />
        </span>
        {/* <img
          src="./src/assets/logo.jpeg"
          className="w-10 h-12 lg:w-32 xl:w-40 ml-15"
          alt="NewsApp Logo"
        /> */}
        {showSidebar && <SideBar onClose={handleCloseClick} />}
      </div>
      <div className="flex justify-center  sm:w-full xl:w-3/5 ">
        <input
          type="search"
          value={searchInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchNews(searchInput);
            }
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          className="xl:w-1/3 sm:w-1/2 md:w-2/5 bg-blue-100 focus:ring-gray-900 focus:border-gray-500 block pl-10 p-2 text-sm text-gray-700 rounded-lg "
          placeholder="Search News"
        />
        <button
          className="bg-black hover:bg-blue-400 text-white font-bold py-1 px-2 rounded lg:mx-2 xl:mx-4 text-sm xl:text-base sm:ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex justify-end lg:w-1/4 sm:w-full xl:w-1/5">
        <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded lg:mx-2 xl:mx-4 text-sm xl:text-base sm:w-1/2">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded lg:mx-2 xl:mx-4 text-sm xl:text-base sm:w-1/2 ml-2 xl:ml-4">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
