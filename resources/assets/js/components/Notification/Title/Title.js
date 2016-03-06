import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'title'
        }
    },
    props: {
        /**
         * The text
         */
        text: {
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
         * corrected class names for the title
         *
         * @returns {Array} The corrected class name
         */
        titleClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}