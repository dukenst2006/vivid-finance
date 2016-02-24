import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'icon'
        };
    },

    props: {
        /**
         * The icon
         */
        icon: {
            type: Object,
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
        'v-icon' (resolve) {
            require(['./../../Icon/Icon.vue'], resolve)
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
         * corrected class names for the icon
         *
         * @returns {Array} The corrected class name
         */
        iconClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};
