import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'item'
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
         * The timer
         */
        timer: {
            type: Object,
            required: false
        },

        /**
         * The header
         */
        header: {
            type: Object,
            required: false
        },

        /**
         * The title
         */
        title: {
            type: Object,
            required: false
        },

        /**
         * The body
         */
        body: {
            type: Object,
            required: false
        },

        /**
         * The close action
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
        'v-notification-timer' (resolve) {
            require(['./../Timer/Timer.vue'], resolve)
        },
        'v-notification-header' (resolve) {
            require(['./../Header/Header.vue'], resolve)
        },
        'v-notification-body' (resolve) {
            require(['./../Body/Body.vue'], resolve)
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
         * corrected class names for the item
         *
         * @returns {Array} The corrected class name
         */
        itemClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}