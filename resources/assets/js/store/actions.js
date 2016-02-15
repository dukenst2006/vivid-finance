import http from './../services/http';
import * as types from './mutation-types';

export const getAllCustomers = ({dispatch}, page = 1) => {
    dispatch(types.RECEIVE_CUSTOMERS, page);
};

export const setCustomerLimit = ({dispatch}, limit) => {
    dispatch(types.SET_CUSTOMER_LIMIT, limit);
};

export const addCustomer = ({dispatch}, customer) => {
    dispatch(types.ADD_CUSTOMER, customer);
};

export const getAllInvoices = ({dispatch}, page = 1, limit = 5) => {
    http.get('invoice?page=' + page + '&limit=' + limit, {}, res => {
        dispatch(types.RECEIVE_INVOICES, res.data);
    });
};