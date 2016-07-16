export default {
  /**
   * Method used to transform an incoming customer
   *
   * @param {object} customer The incoming customer
   *
   * @returns {object} The transformed customer
   */
  receive(customer) {
    return {
      totalCount: customer.total_count,
      totalPages: customer.total_pages,
      currentPage: customer.current_page,
      limit: customer.limit,
    };
  },

  /**
   * Method used to transform an outgoing customer
   *
   * @param {object} customer The outgoing customer
   *
   * @returns {object} The transformed customer
   */
  send(customer) {
    return {
      total_count: customer.totalCount,
      total_pages: customer.totalPages,
      current_page: customer.currentPage,
      limit: customer.limit,
    };
  },
};
