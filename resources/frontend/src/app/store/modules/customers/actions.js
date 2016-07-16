import Vue from 'vue';
import * as types from './mutation-types';

export const receiveCustomers = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`customers?page=${page}&limit=${limit}`)
    .then(({ data }) => {
      dispatch(types.RECEIVE_CUSTOMERS, data.data, data.pagination);
    });
};

export const receiveCustomer = ({ dispatch }, customer) => {
  dispatch(types.RECEIVE_CUSTOMER, customer);
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
