import Vue from 'vue';
import * as types from './mutation-types';
import { createNotification } from './../notifications/actions';

export const fetchInvoices = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`invoices?page=${page}&limit=${limit}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_INVOICES, data.data, data.pagination);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const fetchInvoice = ({ dispatch }, id) => {
  Vue.http.get(`invoice/${id}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_INVOICE, data.data);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const storeInvoice = ({ dispatch }, invoice) => {
  Vue.http.post('invoices', invoice)
    .then(
      () => {
        dispatch(types.STORE_INVOICE, invoice);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const updateInvoice = ({ dispatch }, id, invoice) => {
  Vue.http.put(`invoices/${id}`, invoice)
    .then(
      () => {
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const destroyInvoice = ({ dispatch }, id) => {
  Vue.http.delete(`invoices/${id}`)
    .then(
      () => {
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const updateInvoiceLimit = ({ dispatch }, limit) => {
  dispatch(types.UPDATE_INVOICE_LIMIT, limit);
};

export const clearInvoice = ({ dispatch }) => {
  dispatch(types.CLEAR_INVOICE);
};
