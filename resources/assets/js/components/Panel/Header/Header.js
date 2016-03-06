import CSSUtil from './../../../utils/css';
import * as PanelTitle from './../Title/Title.vue';

export default {
    data() {
        return {
            element: 'header'
        }
    },

    props: {
        title: {
            type: Object,
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

        headerClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    },
    components: {
        'v-panel-title': PanelTitle
    }
};
