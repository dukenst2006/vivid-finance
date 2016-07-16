import customerTransformer from './../../../transformers/customer';
import paginationTransformer from './../../../transformers/pagination';
import {
  RECEIVE_CUSTOMER,
  RECEIVE_CUSTOMERS,
  UPDATE_CUSTOMER_LIMIT,
} from './mutation-types';

export const mutations = {
  [RECEIVE_CUSTOMERS](state, customers, pagination) {
    state.all = customerTransformer.receiveCollection(customers);
    state.pagination = paginationTransformer.receive(pagination);
  },

  [RECEIVE_CUSTOMER](state, customer) {
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
};
