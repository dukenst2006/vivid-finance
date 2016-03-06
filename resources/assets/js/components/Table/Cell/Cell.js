import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'cell'
        }
    },

    props: {

        isHead: {
            type: Boolean,
            required: false
        },

        isBody: {
            type: Boolean,
            required: false
        },

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        },

        colspan : {
            type: Number,
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