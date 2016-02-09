import store from '../../../store'

export default {
    computed: {
        customers () {
            return store.state.customers.data
        },
        pagination () {
            return store.state.customers.pagination
        }
    }
};
