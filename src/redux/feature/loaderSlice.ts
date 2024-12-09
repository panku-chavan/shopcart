import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

  
interface loaderState {
  isSkeleton:boolean;
}

const initialState: loaderState = {
  isSkeleton:false,
};
interface skeletonProp {
  isSkeleton:boolean;
}
const newloaderSlice = createSlice({
  name: "new loader",
  initialState,
  reducers: {
    setSkeletonState: (state, action: PayloadAction<skeletonProp>) => {
      return {
        ...state,
        isSkeleton: action.payload.isSkeleton,
      };
    },
    reseteLoaderState: (state) => {
        return {
          ...state,
          isSkeleton: false,
        };
      },
  },
});


export const { setSkeletonState } = newloaderSlice.actions;

export default newloaderSlice.reducer;
