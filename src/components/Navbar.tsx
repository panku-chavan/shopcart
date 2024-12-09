"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaHome, FaBars } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <>
      {/* Top Navbar for Large Screens */}
      <div className="hidden lg:block">
        <div className="container">
          <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link className="navbar_link relative" href="/">
              HOME
            </Link>
            <Link className="navbar_link relative" href="/mens-clothing">
              MEN&apos;S COLLECTION
            </Link>
            <Link className="navbar_link relative" href="/womens-clothing">
              WOMEN&apos;S COLLECTION
            </Link>
            <Link className="navbar_link relative" href="/jewelery">
              JEWELRY
            </Link>
            <Link className="navbar_link relative" href="/electronics">
              ELECTRONICS
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <nav className="py-2 px-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            
              <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
                <FaHome className="text-xl" />
              </Link>
              <BiUser className="text-lg text-gray-600 hover:text-blue-500 cursor-pointer" />
              <FiHeart className="text-lg text-gray-600 hover:text-blue-500 cursor-pointer" />
              <HiOutlineShoppingBag className="text-lg text-gray-600 hover:text-blue-500 cursor-pointer" />
              <button onClick={toggleCategories} className="text-gray-600 hover:text-blue-500">
                <FaBars className="text-xl" />
              </button>
          </div>
        </nav>

        {/* Dropdown menu when toggle button is clicked */}
        {showCategories && (
          <ul className="bg-gray-50 py-2 px-4 border-t border-gray-200">
            <li className="py-1 hover:bg-gray-100">
              <Link href="/mens-clothing" className="text-gray-700 hover:text-blue-500">Men&apos;s Collection</Link>
            </li>
            <li className="py-1 hover:bg-gray-100">
              <Link href="/womens-clothing" className="text-gray-700 hover:text-blue-500">Women&apos;s Collection</Link>
            </li>
            <li className="py-1 hover:bg-gray-100">
              <Link href="/jewelery" className="text-gray-700 hover:text-blue-500">Jewelry</Link>
            </li>
            <li className="py-1 hover:bg-gray-100">
              <Link href="/electronics" className="text-gray-700 hover:text-blue-500">Electronics</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
