import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actions';

const initialState = {
  cart: {
    items: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Code pour ajouter au panier
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, { ...action.payload, quantity: 1 }],
        },
      };
    
    case REMOVE_FROM_CART:
      // Code pour retirer du panier
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.id !== action.payload),
        },
      };

    case INCREASE_QUANTITY:
      // Code pour augmenter la quantité
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        },
      };

    case DECREASE_QUANTITY:
      // Code pour diminuer la quantité
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          ),
        },
      };

    default:
      return state;
  }
};

export default reducer;
