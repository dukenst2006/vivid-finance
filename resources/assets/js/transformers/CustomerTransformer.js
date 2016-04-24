export default {

    /**
     * Method used to transform the received customer to a usable one
     *
     * @param customer The given customer
     * @returns {{name: string, buildingNumber: *, postcode: string, city: string, country: string, email: string, telephone: string}}
     */
    receive (customer) {
        return {
            name: customer.name,
            buildingNumber: customer.building_number,
            postcode: customer.postcode,
            city: customer.city,
            country: customer.country,
            email: customer.email,
            telephone: customer.telephone
        };
    },

    /**
     * Method used to transform a collection of customer to a usable collection
     *
     * @param customers The array of customers
     * @returns {Array}
     */
    receiveCollection (customers) {
        var newCollection = [];

        customers.forEach((customer) => {
            newCollection.push(this.receive(customer));
        });

        return newCollection;
    },

    /**
     * Method used to transform the customer to send to the API
     *
     * @param customer The given customer
     * @returns {{name: string, building_number: string, postcode: string, city: string, country: string, email: string, telephone: string}}
     */
    send (customer) {
        return {
            name: customer.name,
            building_number: customer.buildingNumber,
            postcode: customer.postcode,
            city: customer.city,
            country: customer.country,
            email: customer.email,
            telephone: customer.telephone
        };
    },

    /**
     * Method used to transform a collection of customers to send to the API
     *
     * @param customers The array of customers
     * @returns {Array}
     */
    sendCollection (customers) {
        var newCollection = [];


        customers.forEach((customer) => {
            newCollection.push(this.send(customer));
        });

        return newCollection;
    }
};