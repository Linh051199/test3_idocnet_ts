import storage from "../Util/storage";
import { cartData } from "../data/data";

import { ADD_CART, DELETE_CART, UPDATE_CART } from "./constants";
let initState: any = {
  cartList: cartData,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
  }
};

export { initState };
export default reducer;
