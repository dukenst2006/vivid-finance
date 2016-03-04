export default {

    /**
     * Method used to transform the received customer to a usable one
     *
     * @param customer
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
     * Method used to transform the customer to send to the API
     *
     * @param customer
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
    }
};