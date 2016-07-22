import Vue from 'vue';
import * as types from './mutation-types';
import { createNotification } from './../notifications/actions';

export const fetchCustomers = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`customers?page=${page}&limit=${limit}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_CUSTOMERS, data.data, data.pagination);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const fetchCustomer = ({ dispatch }, customer) => {
  Vue.http.get(`customers/${customer}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_CUSTOMER, data);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const storeCustomer = ({ dispatch }, invoice) => {
  Vue.http.post('customers', invoice)
    .then(
      () => {
        dispatch(types.STORE_CUSTOMER, invoice);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const updateCustomer = ({ dispatch }, id, invoice) => {
  Vue.http.put(`customers/${id}`, invoice)
    .then(
      () => {
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const destroyCustomer = ({ dispatch }, id) => {
  Vue.http.delete(`customers/${id}`)
    .then(
      () => {
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const updateCustomerLimit = ({ dispatch }, limit) => {
  dispatch(types.UPDATE_CUSTOMER_LIMIT, limit);
};

export const clearCustomer = ({ dispatch }) => {
  dispatch(types.CLEAR_CUSTOMER);
};
