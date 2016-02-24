import CSSUtil from './../../utils/css';

import store from './../../store';

export default {
    data () {
        return {
            block: 'Notification'
        }
    },
    props: {
        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-notification-item' (resolve) {
            require(['./Item/Item.vue'], resolve)
        }
    },

    computed: {
        /**
         * The items from the shared store
         * @returns {*}
         */
        items () {
            return store.state.notifications;
        },

        /**
         * Computed property which will output the
         * corrected class names for the notification
         *
         * @returns {Array} The corrected class name
         */
        notificationClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
}