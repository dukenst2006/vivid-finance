import {RECEIVE_INVOICES} from './../mutation-types';

export const invoicesInitialState = {
    data: [],
    pagination: {
        total_count: 0,
        total_pages: 0,
        current_page: 1,
        limit: 5
    }
};

export const invoicesMutations = {
    [RECEIVE_INVOICES] (state, data) {
        state.invoices.data = data.data;
        state.invoices.pagination = data.pagination;
    }
};