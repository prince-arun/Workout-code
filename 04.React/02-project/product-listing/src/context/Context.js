import React, { useReducer } from "react";
import { faker } from "@faker-js/faker";
import { useContext, createContext } from "react";
import { cartReducer, productReducer } from "./reducer";

// Api --------------------
faker.seed(99);
console.log("hai");

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map((product) => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
      image: faker.image.urlLoremFlickr({ category: "abstract" }),
      quantity: faker.helpers.arrayElement([10, 20, 30, 40, 50]),
      freeDelivery: faker.datatype.boolean(),
      rating: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    };
  });

  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byQuickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};
export const CartState = () => {
  return useContext(Cart);
};

export default Context;
