import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'content'
        };
    },

    props: {
        /**
         * The text to be displayed
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
         * corrected class names for the content
         *
         * @returns {Array} The corrected class names
         */
        contentClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};