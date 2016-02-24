import CSSUtil from './../../../utils/css';


export default {
    data () {
        return {
            element: 'timer'
        }
    },
    props: {
        variants: {
            type: Array,
            required: false
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
        timerClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    },

    methods: {
    }
}