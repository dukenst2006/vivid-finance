export default {
  /**
   * Method used to transform an incoming invoice
   *
   * @param {object} invoice The incoming invoice
   *
   * @returns {object} The transformed invoice
   */
  receive(invoice) {
    return {
      title: invoice.title,
      state: invoice.state,
      file: invoice.file,
      isRecurrent: invoice.is_recurrent,
      recurrence: invoice.recurrence,
      expirationDate: invoice.expiration_date,
    };
  },

  /**
   * Method used to transform an incoming collection
   * of invoices
   *
   * @param {Array} invoices The incoming collection
   *
   * @returns {Array} The transformed collection of invoices
   */
  receiveCollection(invoices) {
    const newCollection = [];

    invoices.forEach((invoice) => {
      newCollection.push(this.receive(invoice));
    });

    return newCollection;
  },

  /**
   * Method used to transform an outgoing invoice
   *
   * @param {object} invoice The outgoing invoice
   *
   * @returns {object} The transformed invoice
   */
  send(invoice) {
    return {
      title: invoice.title,
      state: invoice.state,
      file: invoice.file,
      is_recurrent: invoice.isRecurrent,
      recurrence: invoice.recurrence,
      expiration_date: invoice.expirationDate,
    };
  },

  /**
   * Method used to transform an outgoing invoice
   *
   * @param {Array} invoices The outgoing collection
   *
   * @returns {Array} The transformed collection of invoices
   */
  sendCollection(invoices) {
    const newCollection = [];

    invoices.forEach((invoice) => {
      newCollection.push(this.send(invoice));
    });

    return newCollection;
  },
};
