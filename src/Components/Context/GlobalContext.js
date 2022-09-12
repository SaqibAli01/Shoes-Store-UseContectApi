import React, { useReducer } from 'react'
import { createContext } from 'react'
import Reducer from './Reducer'

const initialState = {
  products: [],
  cart: [],
};

//create Globel context
export const GlobalContext = createContext(initialState);

//create a Provider for Global Context
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  function receivedProduct(product) {
    dispatch ({
      type: 'RECIEVE_PRODUCTS',
      payload: product
    })
  }

  function addCart(product){
    dispatch({
      type: "ADD_CART",
      payload: {
        ...product,
        item: 1
      }
    })
  }

  function cancelCartItem(product) {
    dispatch({
        type: "CANCEL_CART",
        payload: product,
    });
}

  return (
    < GlobalContext.Provider value={{
      products: state.products,
      cart: state.cart,
      receivedProduct,
      addCart,
      cancelCartItem,
    }
    }>
      {children}

    </GlobalContext.Provider >
  )

}
