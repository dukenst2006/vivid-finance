import invoiceTransformer from './../../../transformers/invoice';
import paginationTransformer from './../../../transformers/pagination';
import {
  RECEIVE_INVOICE,
  RECEIVE_INVOICES,
  UPDATE_INVOICE_LIMIT,
} from './mutation-types';

export const mutations = {
  [RECEIVE_INVOICES](state, invoices, pagination) {
    state.all = invoiceTransformer.receiveCollection(invoices);
    state.pagination = paginationTransformer.receive(pagination);
  },

  [RECEIVE_INVOICE](state, invoice) {
    state.pagination.total_count += 1;

    // Check to add another page if a new invoice is added
    if (state.pagination.total_count % state.pagination.limit === 1) {
      state.pagination.total_pages += 1;
    }

    // Check if the user is on the same page as the added invoice
    if (state.pagination.current_page === state.pagination.total_pages) {
      state.data.push(invoice);
    }
  },

  [UPDATE_INVOICE_LIMIT](state, limit) {
    state.pagination.limit = limit;
  },
};
