import store from './../../store';
import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Notification'
        }
    },
    props: {
        variants : {
            type : Array,
            required : false
        }
    },

    components : {
        'v-notification-item' (resolve) {
            require(['./Item/Item.vue'], resolve)
        }
    },

    computed: {
        items () {
            return store.state.notifications;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        notificationClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    },

    methods: {
        deleteNotification(notification) {
            deleteNotification(notification);
        }
    }
}