import CSSUtil from './../../utils/css';
import * as PanelBody from './Body/Body.vue';
import * as PanelHeader from './Header/Header.vue';

export default {
    props: {
        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        },

        header: {
            type: Object,
            required: false
        },

        body: {
            type: Object,
            required: true
        },

        title: {
            type: Object,
            required: false
        }
    },

    data() {
        return {
            block: 'Panel'
        }
    },

    components: {
        'v-panel-body': PanelBody,
        'v-panel-header': PanelHeader
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the notification
         *
         * @returns {Array} The corrected class name
         */
        panelClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        },

        hasHeader() {
            return !! (this.header || this.title);
        }
    }
};
