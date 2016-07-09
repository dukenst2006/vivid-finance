import http from "./../services/http";
import * as types from "./mutation-types";

// Customer
export const getAllCustomers = ({dispatch}, page = 1, limit = 5) => {
    http.get('customers?page=' + page + '&limit=' + limit, {}, res => {
        dispatch(types.RECEIVE_CUSTOMERS, res.data);
    });
};

export const setCustomerLimit = ({dispatch}, limit) => {
    dispatch(types.SET_CUSTOMER_LIMIT, limit);
};

export const storeCustomer = ({dispatch}, customer, fn, errorFn) => {
    dispatch(types.STORE_CUSTOMER, customer, fn, errorFn);
};

export const editCustomer = ({dispatch}, customer, fn, errorFn) => {

};

export const addCustomer = ({dispatch}, customer) => {
    dispatch(types.ADD_CUSTOMER, customer);
};

// Invoices
export const getAllInvoices = ({dispatch}, page = 1, limit = 5) => {
    http.get('invoices?page=' + page + '&limit=' + limit, {}, res => {
        dispatch(types.RECEIVE_INVOICES, res.data);
    });
};

// Notifications
export const addNotification = ({dispatch}, notification) => {
    dispatch(types.ADD_NOTIFICATION, notification);
};

export const deleteNotification = ({dispatch}, id) => {
    dispatch(types.DELETE_NOTIFICATION, id);
};