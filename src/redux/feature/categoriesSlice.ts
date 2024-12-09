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

interface categoriesState {
  categories: string[];
  categoryProduct: Product[];
}

const initialState: categoriesState = {
  categories: [],
  categoryProduct: [],
};
interface categoriesProp {
  categories: string[];
}
interface productProp {
  product: Product[];
}
const categoriesSlice = createSlice({
  name: "new categories",
  initialState,
  reducers: {
    setAllcategoriess: (state, action: PayloadAction<categoriesProp>) => {
      return {
        ...state,
        categories: action.payload.categories,
      };
    },
    setCategoryProduct: (state, action: PayloadAction<productProp>) => {
      return {
        ...state,
        categoryProduct: action.payload.product,
      };
    },
  },
});

export const getAllcategories = createAsyncThunk(
  "get all new categoriess",
  async (payload, { dispatch }) => {
    try {
      const response = await fetch(endpoints.categoriesApi, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(response);
      if (response.status) {
        const data = await response.json();
        dispatch(
          setAllcategoriess({
            categories: data,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const getCategoryProduct = createAsyncThunk(
  "get all new categoriess",
  async (payload: string, { dispatch }) => {
    try {
      dispatch(
        setSkeletonState({
          isSkeleton: true,
        })
      );
      const response = await fetch(
        `${endpoints.categoriesProductApi}/${payload}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        dispatch(
          setCategoryProduct({
            product: data,
          })
        );
        dispatch(setSkeletonState({
          isSkeleton:false
        }))
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const { setAllcategoriess, setCategoryProduct } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
