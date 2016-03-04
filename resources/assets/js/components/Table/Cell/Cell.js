import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'cell'
        }
    },

    props: {

        content : {
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
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        cellClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};