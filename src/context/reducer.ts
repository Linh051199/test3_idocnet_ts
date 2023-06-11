import storage from "../Util/storage";
import { cartData } from "../data/data";

import { ADD_CART, DELETE_CART, UPDATE_CART } from "./constants";
let initState: any = {
  cartList: storage.get(),
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

      const newArrAdd = storage.get();

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
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { initState };
export default reducer;
