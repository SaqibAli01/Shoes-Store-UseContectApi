export default (state, action) => {
    switch (action.type) {
        case "RECIEVE_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        // If product is already in the cart, then increase it's items.
        case "ADD_CART":
            let cart = [];

            if (state.cart.some((p) => p.id === action.payload.id)) {
                cart = state.cart.map((p) => {
                    if (p.id === action.payload.id) {
                        p.items++;
                    }
                    return p;
                });
            } else {
                cart = [...state.cart, action.payload];

            }

            const products = state.products.map((p) => {
                if (p.id === action.payload.id) {
                    if (p.items_left > 0) {

                        p.items_left = p.items_left - 1;
                    }
                }
                // console.log("action.payload.id ", action.payload.id);
                // console.log("p.id ", p.id);
                return p;
            });

            // console.log("State ", state);
            // console.log("Product ", products);
            // console.log("Cart ", cart);
            return {
                ...state,
                products,
                cart,
            };



            case "CANCEL_CART":
                const prods = state.products.map((p) => {
                  if (p.id === action.payload.id) {
                    p.items_left += action.payload.items;
                  }
                  return p;
                });
          
                return {
                  ...state,
                  products: prods,
                  cart: state.cart.filter((product) => product.id !== action.payload.id),
          
                }; 

        default:
            return state;
    }
}