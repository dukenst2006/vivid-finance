import {RECEIVE_CUSTOMERS, ADD_CUSTOMER} from './../mutation';

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
    [RECEIVE_CUSTOMERS] (state, data) {
        state.customers.data = data.data;
        state.customers.pagination = data.pagination;
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
    }
};