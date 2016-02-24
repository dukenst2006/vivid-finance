import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'header'
        }
    },
    props: {
        /**
         * The title
         */
        title: {
            type: Object,
            required: true
        },
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-notification-title' (resolve) {
            require(['./../Title/Title.vue'], resolve)
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
        headerClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}