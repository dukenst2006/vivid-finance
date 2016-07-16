import Vue from 'vue';
import * as types from './mutation-types';

export const fetchCustomers = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`customers?page=${page}&limit=${limit}`)
    .then(({ data }) => {
      dispatch(types.FETCH_CUSTOMERS, data.data, data.pagination);
    });
};

export const fetchCustomer = ({ dispatch }, customer) => {
  dispatch(types.FETCH_CUSTOMER, customer);
};

export const storeCustomer = ({ dispatch }, customer) => {
  Vue.http.post('customers', customer)
    .then(() => {
      dispatch(types.STORE_CUSTOMER, customer);
    });
};

export const updateCustomerLimit = ({ dispatch }, limit) => {
  dispatch(types.UPDATE_CUSTOMER_LIMIT, limit);
};

export const clearCustomer = ({ dispatch }) => {
  dispatch(types.CLEAR_CUSTOMER);
};
