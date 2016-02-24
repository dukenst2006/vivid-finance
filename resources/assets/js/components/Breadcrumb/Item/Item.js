import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'item'
        }
    },

    props: {
        /**
         * The title of the breadcrumb
         */
        content: {
            type: Object,
            required: true
        },

        /**
         * The URL the page should go
         */
        link: {
            type: Object,
            required: false
        },

        /**
         * The variants for the BEM styling
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-breadcrumb-content' (resolve) {
            require(['./../Content/Content.vue'], resolve)
        },
        'v-breadcrumb-link' (resolve) {
            require(['./../Link/Link.vue'], resolve)
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
         * Computed property which will output
         * whether there is a link or not
         *
         * @returns {boolean}
         */
        hasLink () {
            return !!this.link;
        },

        /**
         * Computed property which will output the
         * corrected class names for the item
         *
         * @returns {Array} The corrected class names
         */
        itemClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};