import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const SideBar = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-64 h-screen text-white bg-black border-r shadow-lg z-10 p-4 transition duration-300 ease-in-out max-sm:min-w-[400px] max-sm:min-h-full"
      data-aos="fade-right"
    >
      <div className="flex justify-end mb-4">
        <button
          className="bg-purple-300 hover:bg-blue-400 text-gray-600 font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <h1 className="text-2xl font-thin mb-4 text-gray-">Explore latest</h1>
      <ul className="list-none m-0 p-6 pl-1  max-sm:min-w-[1/2]">
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <a
            href="https://www.hindustantimes.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            Hindustan Times
          </a>
        </li>
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="https://www.americanexpress.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            American Express
          </a>
        </li>
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://www.dainikjagran.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            Dainik Jagran
          </a>
        </li>
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://www.nytimes.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            New York Times
          </a>
        </li>
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="https://www.ft.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            Financial Times
          </a>
        </li>
        <li
          className="px-4 py-2 text-lg rounded-lg bg-purple-300 hover:bg-blue-300 mb-2 transition duration-200 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://www.theguardian.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out"
          >
            The Guardian
          </a>
        </li>
      </ul>
      <div className="w-full md:w-1/3 p-4 flex flex-col mt-28">
        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
        <ul className="list-none flex mb-0 mt-5 ">
          <li>
            <a
              href="www.linkedin.com/in/akash-pandey-0a5920230"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/liger9t8/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AkashPandey9t8"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
