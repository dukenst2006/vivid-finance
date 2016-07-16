import Vue from 'vue';
import * as types from './mutation-types';

export const receiveInvoices = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`invoices?page=${page}&limit=${limit}`)
    .then(({ data }) => {
      dispatch(types.RECEIVE_INVOICES, data.data, data.pagination);
    });
};

export const receiveInvoice = ({ dispatch }, invoice) => {
  dispatch(types.RECEIVE_INVOICE, invoice);
};

export const storeInvoice = ({ dispatch }, invoice) => {
  Vue.http.post('invoices', invoice)
    .then(() => {
      dispatch(types.STORE_INVOICE, invoice);
    });
};

export const updateInvoiceLimit = ({ dispatch }, limit) => {
  dispatch(types.UPDATE_INVOICE_LIMIT, limit);
};

export const clearInvoice = ({ dispatch }) => {
  dispatch(types.CLEAR_INVOICE);
};
