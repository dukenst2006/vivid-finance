import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'group'
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
         * The header
         */
        header: {
            type: Object,
            required: true
        },

        /**
         * The title
         */
        title: {
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
        'v-menu-header' (resolve) {
            require(['./../Header/Header.vue'], resolve)
        },
        'v-menu-body' (resolve) {
            require(['./../Body/Body.vue'], resolve)
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
         * corrected class names for the group
         *
         * @returns {Array} The corrected class name
         */
        groupClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};