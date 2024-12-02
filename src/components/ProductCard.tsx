import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface propType {
  title: string;
  price: any;
  description: string;
  category: string;
  image: string;
  rating: any;
  count: number;
}
const ProductCard: React.FC<propType> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  count
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      {/* <img src={image} alt={title} className='w-full h-auto' width={200} height={300}/> */}
      <div>
        <Image
          className="w-[200px] h-[300px] object-contain"
          src={image}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-500 max-w-[150px] line-clamp-1">
          {description}
        </p>
        <p className="text-gray-400 max-w-[150px] line-clamp-1 capitalize">
          {category}
        </p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">&#8377;{price}<del className="text-gray-500 font-normal">&#8377;{parseInt(price)+50}.00</del></div>
      </div>
    </div>
  );
};

export default ProductCard;
