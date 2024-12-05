import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let&apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex items-center">
                <a href="#" target="_blank"  className=" border border-gray-100 bg-slate-100 shadow-lg rounded-full p-3 mr-3 hover:scale-110 transition-transform duration-300 hover:border-black cursor-pointer">
                <FaTwitter className="text-blue-400 hover:text-blue-500"/>
                </a>
                <a href="#" target="_blank"  className=" border border-gray-100 bg-slate-100 shadow-lg rounded-full p-3 mr-3 hover:scale-110 transition-transform duration-300 hover:border-black cursor-pointer">
                <FaFacebook className="text-blue-500 hover:text-blue-600"/>
                </a>
                <a href="#" target="_blank"  className=" border border-gray-100 bg-slate-100 shadow-lg rounded-full p-3 mr-3 hover:scale-110 transition-transform duration-300 hover:border-black cursor-pointer">
                <FaInstagram className="text-pink-500 hover:text-pink-600"/>
                </a>
                <a href="#" target="_blank"  className=" border border-gray-100 bg-slate-100 shadow-lg rounded-full p-3 mr-3 hover:scale-110 transition-transform duration-300 hover:border-black cursor-pointer">
                <FaLinkedin className="text-blue-500 hover:text-blackish"/>
                </a>
                <a href="https://github.com/panku-chavan/shopcart" target="_blank" className=" border border-gray-100 bg-slate-100 shadow-lg rounded-full p-3 mr-3 hover:scale-110 transition-transform duration-300 hover:border-black cursor-pointer">
                <FaGithub className="text-black hover:text-blackish"/>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-black text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-black text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-black font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                {" "}
                 ShopCart
                 by <a href="https://pankaj-chavan.vercel.app/" target="_blank"><u>Pankaj Chavan</u></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
