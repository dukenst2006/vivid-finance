import CSSUtil from './../../../utils/css';
import store from './../../../vuex/store';
import { deleteNotification } from './../../../vuex/actions'

export default {
    data () {
        return {
            element: 'timer'
        }
    },
    props: {
        /**
         * The identifier
         */
        identifier: {
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
         * corrected class names for the timer
         *
         * @returns {Array} The corrected class name
         */
        timerClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    },

    methods: {
        /**
         * Method used to dismiss the alert
         */
        dismissNotification() {
            deleteNotification(this.identifier);
        },

        /**
         * Method used to fire the countdown
         */
        startTimer() {
            setTimeout(this.dismissNotification, 5000);
        }
    },

    ready () {
        this.startTimer();
    }
}