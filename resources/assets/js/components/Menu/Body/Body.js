import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'body'
        }
    },

    props: {
        /**
         * The items
         */
        items: {
            type: Array,
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

    components: {
        'v-menu-item' (resolve) {
            require(['./../Item/Item.vue'], resolve)
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
         * corrected class names for the body
         *
         * @returns {Array} The corrected class name
         */
        bodyClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};