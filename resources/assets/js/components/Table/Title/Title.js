import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'title'
        }
    },

    props : {

        variants : {
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
        headClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};