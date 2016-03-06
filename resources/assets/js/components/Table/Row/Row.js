import CSSUtil from './../../../utils/css';
import * as TableCell from './../Cell/Cell.vue';
import * as TableSort from './../Sort/Sort.vue';
import * as TableTitle from './../Title/Title.vue';

export default {
    data () {
        return {
            element: 'row'
        }
    },

    props: {

        columns: {
            type: Array,
            required: true
        },

        cell: {
            type: Object,
            required: true
        },

        isHead: {
            type: Boolean,
            required: false
        },

        isBody: {
            type: Boolean,
            required: false
        },

        hasActions: {
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

        item: {
            type: Object,
            required: false
        }
    },

    components: {
        'v-table-cell': TableCell,
        'v-table-sort': TableSort,
        'v-table-title': TableTitle
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
        rowClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};