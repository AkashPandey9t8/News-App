import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 py-12 min-w-[730px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="list-none mb-0">
              <li>
                <a
                  href="www.linkedin.com/in/akash-pandey-0a5920230"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/liger9t8/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AkashPandey9t8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="list-none mb-0">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaEnvelope size={24} />
                  pande0865@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaPhone size={24} />
                  +91 9310149123
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul className="list-none mb-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-lg font-bold mb-0">
            Copyright © 2024 Akash Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
