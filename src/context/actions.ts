import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  ADD_WISHLISH,
  REMOVE_WISHLISH,
  DECREASE__QUANTITY,
  INCREASE__QUANTITY,
} from "./constants";

export const addCart = (payload: any) => ({
  type: ADD_CART,
  payload,
});

export const deleteCart = (payload: any) => ({
  type: DELETE_CART,
  payload,
});

export const updateCart = (payload: any) => ({
  type: UPDATE_CART,
  payload,
});

export const addWishLish = () => ({
  type: ADD_WISHLISH,
});

export const removeWishLish = () => ({
  type: REMOVE_WISHLISH,
});

export const decreaseQuantity = (payload: any) => ({
  type: DECREASE__QUANTITY,
  payload,
});

export const increaseQuantity = (payload: any) => ({
  type: INCREASE__QUANTITY,
  payload,
});
