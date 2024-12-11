import React from 'react'

const ProductDetailSkeleton = () => {
  return (
    <div className="container flex gap-10 items-center justify-center flex-wrap pt-10 pb-10">
      {/* Image Section Skeleton */}
      <div className="flex-shrink-0">
        <div className="w-[250px] h-[350px] bg-gray-300 animate-pulse rounded-md"></div>
      </div>

      {/* Product Details Section Skeleton */}
      <div className="flex-1">
        <div className="w-1/2 bg-gray-300 h-[30px] mb-4 animate-pulse rounded-md"></div>
        <div className="w-3/4 bg-gray-300 h-[20px] mb-4 animate-pulse rounded-md"></div>
        <div className="w-1/2 bg-gray-300 h-[15px] mb-4 animate-pulse rounded-md"></div>
        <div className="w-1/3 bg-gray-300 h-[20px] mb-4 animate-pulse rounded-md"></div>
        <div className="w-1/4 bg-gray-300 h-[40px] mt-4 animate-pulse rounded-md"></div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton