import customerTransformer from './../../../transformers/customer';
import paginationTransformer from './../../../transformers/pagination';
import {
  FETCH_CUSTOMER,
  FETCH_CUSTOMERS,
  UPDATE_CUSTOMER_LIMIT,
  CLEAR_CUSTOMER,
} from './mutation-types';

export const mutations = {
  [FETCH_CUSTOMERS](state, customers, pagination) {
    state.all = customerTransformer.receiveCollection(customers);
    state.pagination = paginationTransformer.receive(pagination);
  },

  [FETCH_CUSTOMER](state, customer) {
    state.pagination.total_count += 1;

    // Check to add another page if a new customer is added
    if (state.pagination.total_count % state.pagination.limit === 1) {
      state.pagination.total_pages += 1;
    }

    // Check if the user is on the same page as the added customer
    if (state.pagination.current_page === state.pagination.total_pages) {
      state.data.push(customer);
    }
  },

  [UPDATE_CUSTOMER_LIMIT](state, limit) {
    state.pagination.limit = limit;
  },

  [CLEAR_CUSTOMER](state) {
    state.all = [];
    state.pagination = {
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      limit: 5,
    };
  },
};
