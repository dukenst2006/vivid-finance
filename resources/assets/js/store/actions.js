import http from './../services/http';
import * as types from './mutation';

export const getAllCustomers = ({dispatch}) => {
    http.get('customer', {}, res => {
        dispatch(types.RECEIVE_CUSTOMERS, res.data);
    });
};