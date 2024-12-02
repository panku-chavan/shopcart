"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const NewProduct = () => {
    const [products, setProducts]=useState<any[]>();
    const getProducts = ()=>{
        try {
             fetch('https://fakestoreapi.com/products')
            .then((res)=> res.json())
            .then((data)=>setProducts(data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getProducts();
    },[products?.length===0])
    console.log(products)
  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className="grid grid-cols-1 place-i sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl-gap-y-10">
                {products?.map((item)=>(
                    <ProductCard 
                    key={item?.id}
                    title={item?.title}
                    image={item?.image}
                    rating={Math.floor(item?.rating.rate)}
                    count={Math.floor(item?.rating.count)}
                    description={item?.description}
                    category={item?.category}
                    price={item?.price}
                    
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProduct