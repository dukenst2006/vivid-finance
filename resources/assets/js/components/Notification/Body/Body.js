import CSSUtil from './../../../utils/css';
import * as NotificationClose from './../Close/Close.vue';
import * as NotificationContent from './../Content/Content.vue';

export default {
    data () {
        return {
            element: 'body'
        }
    },
    props: {
        /**
         * The id of the notification
         */
        id: {
            type: String,
            required: true
        },

        /**
         * The displayed text
         */
        text: {
            type: String,
            required: true
        },

        /**
         * The close button
         */
        close: {
            type: Object,
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
        'v-notification-close': NotificationClose,
        'v-notification-content': NotificationContent
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
         * corrected class names for the body
         *
         * @returns {Array} The corrected class name
         */
        bodyClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}