'use client'

import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

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

const NewProduct = () => {
  // Define the state with the Product array type
  const [products, setProducts] = useState<Product[]>([]);

  // Function to fetch products
  const getProducts = () => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook to trigger the product fetching on component mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="container pt-16">
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
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
    </div>
  );
}

export default NewProduct;
