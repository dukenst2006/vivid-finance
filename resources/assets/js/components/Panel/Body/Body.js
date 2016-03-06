import CSSUtil from './../../../utils/css';

export default {
    data() {
        return {
            element: 'body'
        }
    },

    props: {

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

        bodyClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};
