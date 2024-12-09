"use client";

import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/reduxHook";
import { RootState } from "@/redux/store/store";
import { getCategoryProduct } from "@/redux/feature/categoriesSlice";
import Hero from "@/containers/Hero";
import Testimonial from "@/containers/Testimonial";
import ProductSkeleton from "@/components/ProductSkeleton";

// Define the Rating and Product interfaces
interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: Rating;
}

const Electronics = () => {
  // Define the state with the Product array type
  const dispatch = useAppDispatch();
  // const [products, setProducts] = useState<Product[]>([]);
  const products: Product[] = useAppSelector(
    (state: RootState) => state.categories.categoryProduct
  );
  // Function to fetch products
  const { isSkeleton } = useAppSelector((state: RootState) => state.loader);

  // useEffect hook to trigger the product fetching on component mount
  useEffect(() => {
    // getProducts();
    dispatch(getCategoryProduct("electronics"));
  }, [dispatch]);

  return (
    <div>
      <Hero />
      {isSkeleton ? (
        <ProductSkeleton />
      ) : (
        <div className="container pt-16">
          <h2 className="font-medium text-2xl pb-4">Electronic&apos;s</h2>
          <div className="grid grid-cols-1 place-i sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl-gap-y-10">
            {/* Loop through the products and pass data to ProductCard */}
            {products.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                image={item.image}
                rating={Math.floor(item.rating.rate)}
                description={item.description}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}
      <Testimonial />
    </div>
  );
};

export default Electronics;
