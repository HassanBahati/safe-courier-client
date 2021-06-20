import { ADD_ORDER, DELETE_ORDER, GET_ORDER, ORDER_LOADING } from "../actions/types";
const initialState = {
  orders: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
      case ORDER_LOADING:
          return{
              ...state,
              loading: true
          }
    default:
      return state;
  }
}
