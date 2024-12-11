import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as endpoints from "../../utility/NetworkUtility";
import { setSkeletonState } from "./loaderSlice";
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
  
interface productState {
  product:Product[];
  singleProduct: Partial<Product>;
}

const initialState: productState = {
  product: [],
  singleProduct:{}
};
interface productProp {
  product: Product[];
}
interface singleProductProp {
  singleProduct: Product ;
}
const newProductSlice = createSlice({
  name: "new product",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<productProp>) => {
      return {
        ...state,
        product: action.payload.product,
      };
    },
    setSingleProducts: (state, action: PayloadAction<singleProductProp>) => {
      return {
        ...state,
        singleProduct: action.payload.singleProduct,
      };
    },
  },
});

export const getAllNewProducts = createAsyncThunk(
  "get all new products",
  async (payload, { dispatch }) => {
    try {
      const response = await fetch(endpoints.neProductApi, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    //   console.log(response)
      if(response.status){
        const data = await response.json();
      dispatch(
        setAllProducts({
          product: data,
        })
      );
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "get single product detail",
  async (payload:number, { dispatch }) => {
    try {
      dispatch(setSkeletonState({
        isSkeleton:true
      }))
      const response = await fetch(`${endpoints.productDetailApi}${payload}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    //   console.log(response)
      if(response.status===200){
        const data = await response.json();
      dispatch(
        setSingleProducts({
          singleProduct: data,
        })
      );
      }
      dispatch(setSkeletonState({
        isSkeleton:false
      }))
    } catch (error) {
      console.log(error);
    }
  }
);
export const { setAllProducts,setSingleProducts } = newProductSlice.actions;

export default newProductSlice.reducer;
