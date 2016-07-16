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
      name: customer.name,
      buildingNumber: customer.building_number,
      postcode: customer.postcode,
      city: customer.city,
      country: customer.country,
      email: customer.email,
      telephone: customer.telephone,
    };
  },

  /**
   * Method used to transform an incoming collection
   * of customers
   *
   * @param {Array} customers The incoming collection
   *
   * @returns {Array} The transformed collection of customers
   */
  receiveCollection(customers) {
    const newCollection = [];

    customers.forEach((customer) => {
      newCollection.push(this.receive(customer));
    });

    return newCollection;
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
      name: customer.name,
      building_number: customer.buildingNumber,
      postcode: customer.postcode,
      city: customer.city,
      country: customer.country,
      email: customer.email,
      telephone: customer.telephone,
    };
  },

  /**
   * Method used to transform an outgoing customer
   *
   * @param {Array} customers The outgoing collection
   *
   * @returns {Array} The transformed collection of customers
   */
  sendCollection(customers) {
    const newCollection = [];

    customers.forEach((customer) => {
      newCollection.push(this.send(customer));
    });

    return newCollection;
  },
};
