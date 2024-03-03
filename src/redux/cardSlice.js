import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let carts = localStorage.getItem("cart");
  if (carts) {
    return JSON.parse(carts);
  } else {
    return [];
  }
};

const storageLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storageLocalStorage(tempCart);
        state.itemCount = state.carts.length;
      } else {
        state.carts.push(action.payload);
        storageLocalStorage(state.carts);
        state.itemCount = state.carts.length;
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storageLocalStorage(state.carts);
      state.itemCount = state.carts.length;
    },
    clearCart: (state) => {
      state.carts = [];

      storageLocalStorage(state.carts);
      state.itemCount = state.carts.length;
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export default CartSlice.reducer;

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  CartSlice.actions;
