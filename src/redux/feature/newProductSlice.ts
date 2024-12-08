import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as endpoints from "../../utility/NetworkUtility";
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
}

const initialState: productState = {
  product: [],
};
interface productProp {
  product: Product[];
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

export const { setAllProducts } = newProductSlice.actions;

export default newProductSlice.reducer;
