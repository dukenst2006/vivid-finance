import CSSUtil from './../../../utils/css';

export default {
    data() {
        return {
            element: 'title'
        }
    },

    props: {
        content: {
            type: String,
            required: true
        },

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
        titleClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};
