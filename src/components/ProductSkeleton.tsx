import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="container pt-16 ">
      <div className=" grid grid-cols-1 place-i sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl-gap-y-10">
        {[...Array(4)].map((_, index) => (
          <div key={index} className=" border border-gray-200 rounded-xl max-w-[400px] animate-pulse">
            {/* Image Placeholder */}
            <div className="w-[200px] h-[300px] bg-gray-300 rounded-md mx-auto"></div>

            {/* Content Placeholder */}
            <div className="space-y-2 pt-2 ">
              {/* Title */}
              <div className="h-5 bg-gray-300 rounded-md  mx-auto"></div>

              {/* Description */}
              <div className="h-4 bg-gray-300 rounded-md  mx-auto"></div>

              {/* Category */}
              <div className="h-4 bg-gray-300 rounded-md  mx-auto"></div>

              {/* Rating */}
              <div className="flex gap-1  mt-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="h-5 w-5 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="h-4 bg-gray-300 rounded-md  mx-auto"></div>


              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
