import CSSUtil from './../../../utils/css';

import store from './../../../store';
const { deleteNotification } = store.actions;

export default {
    data () {
        return {
            element: 'close'
        }
    },
    props: {
        /**
         * The id
         */
        id: {
            type: String,
            required: true
        },

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-icon' (resolve) {
            require(['./../../Icon/Icon.vue'], resolve)
        }
    },

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output the
         * corrected class names for the close
         *
         * @returns {Array} The corrected class name
         */
        closeClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    },

    methods: {
        /**
         * Method used to close the notification
         */
        dismissNotification () {
            deleteNotification(this.id);
        }
    }
}