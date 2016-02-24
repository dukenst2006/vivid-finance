import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'body'
        }
    },
    props: {
        text: {
            type: String,
            required: true
        },
        close : {
            type: Object,
            required: true
        },
        variants: {
            type: Array,
            required: false
        }
    },

    components : {
        'v-notification-content' (resolve) {
            require(['./../Content/Content.vue'], resolve)
        },
        'v-notification-close' (resolve) {
            require(['./../Close/Close.vue'], resolve)
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
        bodyClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}