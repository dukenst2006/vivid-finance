export default {
    props: [
        'pagination',
        'fn'
    ],

    components: {
        'v-icon' (resolve) {
            require(['./../Icon/Icon.vue'], resolve)
        }
    },

    methods: {
        /**
         * Method used to go to the first page
         */
        firstPage () {
            var firstPage = 1;

            if (this.pagination.current_page !== firstPage) {
                this.toPage(firstPage);
            }
        },

        /**
         * method used to go to the previous page
         */
        previousPage () {
            var previousPage = this.pagination.current_page - 1;

            if (this.pagination.current_page !== 1) {
                this.toPage(previousPage);
            }
        },

        /**
         * Method used to toggle a page
         *
         * @param {int} page The page
         */
        toPage(page) {
            this.fn(page, this.pagination.limit);
        },

        /**
         * Method used to go to the next page
         */
        nextPage () {
            var nextPage = this.pagination.current_page + 1;

            if (nextPage <= this.pagination.total_pages) {
                this.toPage(nextPage);
            }
        },

        /**
         * Method used to go to the last page
         */
        lastPage () {
            var lastPage = this.pagination.total_pages;

            if (this.pagination.current_page !== lastPage) {
                this.toPage(lastPage);
            }
        }
    }
};
