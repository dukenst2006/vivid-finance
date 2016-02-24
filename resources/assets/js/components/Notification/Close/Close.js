import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'close'
        }
    },
    props: {
        variants: {
            type: Array,
            required: false
        }
    },

    components : {
        'v-icon' (resolve) {
            require(['./../../Icon/Icon.vue'], resolve)
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
        closeClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}