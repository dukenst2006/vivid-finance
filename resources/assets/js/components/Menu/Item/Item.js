import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'item'
        }
    },

    props: {
        /**
         * The to for the link
         */
        to: {
            type: String,
            required: true
        },

        /**
         * The icon group
         */
        iconGroup: {
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
        'v-icon-group' (resolve) {
            require(['./../../IconGroup/IconGroup.vue'], resolve)
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
         * corrected class names for the item
         *
         * @returns {Array} The corrected class name
         */
        itemClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        },

        /**
         * Computed property which will output the
         * active class name for the item
         *
         * @returns {string}
         */
        itemActiveClass () {
            return CSSUtil.variant(CSSUtil.has(this.block, this.element), 'active');
        }
    }
};