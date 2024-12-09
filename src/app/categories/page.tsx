"use client"
import { useAppDispatch, useAppSelector } from '@/custom-hooks/reduxHook'
import { getAllcategories } from '@/redux/feature/categoriesSlice';
import { RootState } from '@/redux/store/store';
import React, { useEffect } from 'react'

const Categories = () => {
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector((state:RootState)=>state.categories);

  useEffect(()=>{
    dispatch(getAllcategories())
  },[dispatch])

  console.log(categories)
  return (
    <div className='container pt-5 pb-10'>
        <h2 className='font-medium text-2xl pb-4'>Categories</h2>
      
      <div className="flex items-center justify-center flex-wrap gap-10 pt-5">
        {
          categories.map((category,i)=>(
            <div className='capitalize text-gray-600 hover:text-gray-900 font-semibold block  text-lg border border-slate-500 rounded-md p-5 text-center' key={i}>{category}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories