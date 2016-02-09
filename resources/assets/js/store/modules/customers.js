import {RECEIVE_CUSTOMERS} from './../mutation';

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
    }
};