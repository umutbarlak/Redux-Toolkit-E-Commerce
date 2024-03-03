import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../utils/status";

import categorySlice from "./categorySlice";
const initialState = {
  products: [],
  productsStatus: Status.IDLE,
  productDetail: {},
  productDetailStatus: Status.IDLE,
};
export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = Status.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = Status.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = Status.FAIL;
      })
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = Status.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = Status.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = Status.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = Status.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = Status.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = Status.FAIL;
      });
  },
});

export default ProductSlice.reducer;
