import http from './../services/http';
import * as types from './mutation-types';

export const getAllCustomers = ({dispatch}, page = 1) => {
    http.get('customer?page=' + page, {}, res => {
        dispatch(types.RECEIVE_CUSTOMERS, res.data);
    });
};

export const addCustomer = ({dispatch}, customer) => {
    dispatch(types.ADD_CUSTOMER, customer);
};

export const getAllInvoices = ({dispatch}) => {
    http.get('invoice', {}, res => {
        dispatch(types.RECEIVE_INVOICES, res.data);
    });
};