import Image from "next/image";
import React from "react";
interface propsType {
  title: string;
  mainTitle: string;
  img: string;
  price: string;
}
const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blakish text-[26px] md-text-[30px] lg-text-[40px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-500">
          starting at{" "}
          <b className="text-[20px] md:text-[24px] lg-text-[30px]">{price}&#8377;</b>
        </h3>
        <div className="bg-accent text-white text-[14px] md-text-[16px] p-2 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>
      <Image
      className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
      src={img}
      alt="banner"
      width={2000}
      height={2000}
      />
    </div>
  );
};

export default Slide;
