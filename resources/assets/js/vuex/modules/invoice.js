import {RECEIVE_INVOICES} from './../mutation-types';

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
    [RECEIVE_INVOICES] (state, data) {
        state.data = data.data;
        state.pagination = data.pagination;
    }
};

export default {
    state,
    mutations
};