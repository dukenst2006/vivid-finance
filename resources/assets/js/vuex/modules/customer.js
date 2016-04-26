import http from './../../services/http'
import transformer from './../../transformers/CustomerTransformer';

import { RECEIVE_CUSTOMERS, STORE_CUSTOMER, ADD_CUSTOMER, SET_CUSTOMER_LIMIT } from './../mutation-types'

const state = {
    data: [],
    pagination: {
        total_count: 0,
        total_pages: 0,
        current_page: 1,
        limit: 5
    }
};

const mutations = {
    [RECEIVE_CUSTOMERS] (state, data) {
        state.data = data.data;
        state.pagination = data.pagination;
    },

    [ADD_CUSTOMER] (state, data) {
        state.pagination.total_count += 1;

        // Check to add another page if a new customer is added
        if (state.pagination.total_count % state.pagination.limit === 1) {
            state.pagination.total_pages += 1;
        }

        // Check if the user is on the same page as the added customer
        if (state.pagination.current_page === state.pagination.total_pages) {
            state.data.push(data.customer);
        }
    },

    [STORE_CUSTOMER] (state, customer, fn, errorFn) {
        http.post('customers', transformer.send(customer), () => {
            fn();
        }, (res) => {
            errorFn(res.data);
        });
    },

    [SET_CUSTOMER_LIMIT] (state, limit) {
        state.pagination.limit = limit;
    }
};

export default {
    state, 
    mutations
}