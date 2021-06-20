import axios from "axios";
import { GET_ORDER, ADD_ORDER, DELETE_ORDER, ORDER_LOADING } from "./types";

export const getOrders = () => (dispatch) => {
  dispatch(setOrdersLoading());
  axios.get("/api/orders").then((res) =>
    dispatch({
      type: GET_ORDER,
      payload: res.data,
    })
  );
};

export const deleteOrder = (id) => dispatch => {
axios.delete(`/api/orders/${id}`.then(res => 
  dispatch({
    type: DELETE_ORDER,
    payload: id
  })))
};

export const addOrder = (order) => dispatch => {
  axios.post('/api/orders', order).then(res =>
    dispatch({
      type:ADD_ORDER,
      payload:res.data
    }))
  
};

export const setOrdersLoading = () => {
  return {
    type: ORDER_LOADING,
  };
};
