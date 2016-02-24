import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'item'
        }
    },
    props: {
        timer: {
            type: Object,
            required: false
        },

        header: {
            type: Object,
            required: false
        },

        title: {
            type: Object,
            required: false
        },

        body: {
            type: Object,
            required: false
        },

        close: {
            type: Object,
            required: true
        },

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

        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        itemClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}