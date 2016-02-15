import http from './../../services/http'

import {RECEIVE_CUSTOMERS, ADD_CUSTOMER, SET_CUSTOMER_LIMIT} from './../mutation-types';

export const customersInitialState = {
    data: [],
    pagination: {
        total_count: 0,
        total_pages: 0,
        current_page: 1,
        limit: 5
    }
};

export const customersMutations = {
    [RECEIVE_CUSTOMERS] (state, page) {
        http.get('customer?page=' + page + '&limit=' + state.customers.pagination.limit, {}, res => {
            state.customers.data = res.data.data;
            state.customers.pagination = res.data.pagination;
        });
    },

    [ADD_CUSTOMER] (state, data) {
        state.customers.pagination.total_count += 1;

        // Check to add another page if a new customer is added
        if (state.customers.pagination.total_count % state.customers.pagination.limit === 1) {
            state.customers.pagination.total_pages += 1;
        }

        // Check if the user is on the same page as the added customer
        if (state.customers.pagination.current_page === state.customers.pagination.total_pages) {
            state.customers.data.push(data.customer);
        }
    },

    [SET_CUSTOMER_LIMIT] (state, limit) {
        state.customers.pagination.limit = limit;
    }
};