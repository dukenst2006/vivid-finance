import http from './../services/http';
import * as types from './mutation';

export const getAllCustomers = ({dispatch}) => {
    http.get('customer', {}, res => {
        dispatch(types.RECEIVE_CUSTOMERS, res.data);
    });
};

export const getAllInvoices = ({dispatch}) => {
    http.get('invoice', {}, res => {
        dispatch(types.RECEIVE_INVOICES, res.data);
    });
};