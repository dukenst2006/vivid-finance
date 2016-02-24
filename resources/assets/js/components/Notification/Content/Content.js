import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'content'
        }
    },
    props: {
        /**
         * The title
         */
        text: {
            type: String,
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
        contentClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}