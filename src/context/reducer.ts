import storage from "../Util/storage";
import { cartData } from "../data/data";

import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  ADD_WISHLISH,
  REMOVE_WISHLISH,
  DECREASE__QUANTITY,
  INCREASE__QUANTITY,
} from "./constants";
let initState: any = {
  cartList: storage.get(),
  wishlish: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_CART:
      let cartListLocal = storage.get();

      let currentItem = cartListLocal.find(
        (item: any) =>
          item.id === action.payload.id &&
          item.currColor.toLowerCase() ===
            action.payload.currColor.toLowerCase()
      );

      if (!currentItem) {
        cartListLocal.push(action.payload);
      } else {
        currentItem.currQuantity += action.payload.currQuantity;
      }

      storage.set(cartListLocal);

      return {
        ...state,
        cartList: cartListLocal,
      };
    case DELETE_CART:
      let newArr = [...state.cartList];

      storage.set(newArr);
      newArr.splice(action.payload, 1);
      storage.set(newArr);
      return {
        ...state,
        cartList: newArr,
      };
    case UPDATE_CART:
      let newArrUpdate = [...state.cartList];

      newArrUpdate.map((arr) => {
        if (arr.name === action.payload.name) {
          arr.currQuantity = action.payload.currQuantity;
        }
      });
      storage.set(newArrUpdate);
      return {
        ...state,
        cartList: newArrUpdate,
      };

    case ADD_WISHLISH:
      let currWishListIn = state.wishlish;

      currWishListIn++;

      return {
        ...state,
        wishlish: currWishListIn,
      };

    case REMOVE_WISHLISH:
      let currWishListDe = state.wishlish;

      currWishListDe--;

      return {
        ...state,
        wishlish: currWishListDe,
      };
    case DECREASE__QUANTITY:
      let cartListLocal2 = storage.get();

      let currentItem2 = cartListLocal2.find(
        (item: any) =>
          item.id === action.payload.id &&
          item.currColor.toLowerCase() ===
            action.payload.currColor.toLowerCase()
      );

      if (currentItem2) {
        if (currentItem2.currQuantity > 1) {
          currentItem2.currQuantity--;
        }
      }

      storage.set(cartListLocal2);

      return {
        ...state,
        cartList: cartListLocal2,
      };

    case INCREASE__QUANTITY:
      let cartListLocal3 = storage.get();

      let currentItem3 = cartListLocal3.find(
        (item: any) =>
          item.id === action.payload.id &&
          item.currColor.toLowerCase() ===
            action.payload.currColor.toLowerCase()
      );

      if (currentItem3) {
        currentItem3.currQuantity++;
      }

      storage.set(cartListLocal3);

      return {
        ...state,
        cartList: cartListLocal3,
      };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { initState };
export default reducer;
