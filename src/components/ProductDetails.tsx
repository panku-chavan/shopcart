import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import SuccessBtn from "./UI/Buttons/SuccessButton";
import { nanoid } from "@reduxjs/toolkit";

interface propType {
  id: number;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: number;
}

const ProductDetails: React.FC<propType> = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {

    const generateRating = (rating: number) => {
        const filledStars = Array(rating)
          .fill(null)
          .map((_, index) => <AiFillStar key={`filled-${index}`} />);
        const emptyStars = Array(5 - rating)
          .fill(null)
          .map((_, index) => <AiOutlineStar key={`empty-${index}`} />);
          
        return (
          <div className="flex gap-1 text-[30px] text-[#ff9529]">
            {filledStars}
            {emptyStars}
          </div>
        );
      };
      



  return (
    <div
      className=" container flex gap-10 items-center justify-center flex-wrap pt-10 pb-10"
      
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          className="w-[250px] h-[350px] object-contain"
          src={image || '/user.jpg'} // Fallback to placeholder image if not provided
          width={250}
          height={350}
          alt={title}
        />
      </div>

      {/* Product Details Section */}
      <div className="flex-1">
        <h2 className="text-accent font-medium uppercase text-2xl  pb-5">
          {title}
        </h2>
        <p className="text-gray-500  pb-2  text-lg">{description}</p>
        <p className="text-gray-400 text-md max-w-[250px] pb-2 capitalize">
          {category}
        </p>
        <div className="mt-2 pb-2">{generateRating(rating)}</div>
        <div className="font-bold flex gap-4 mt-2 pb-2 text-2xl">
          <span>&#8377;{Number(price)+100}</span> {/* Ensure price is displayed as a number */}
          <del className="text-gray-500 font-normal pb-2">
            &#8377;{parseInt(price.toString()) + 150}.00
          </del>
        </div>
        <div className="mt-2 pb-2">
            <SuccessBtn onClick={()=>{}} title={"Add to Cart"}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
