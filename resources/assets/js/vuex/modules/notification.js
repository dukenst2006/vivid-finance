import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './../mutation-types';

const state = {
    data : []
};

const mutations = {
    [ADD_NOTIFICATION] (state, notification) {
        notification.identifier = Math.random().toString(36).substring(7);

        state.data.push(notification);
    },
    [DELETE_NOTIFICATION] (state, identifier) {
        state.data = state.data.filter((notification) => {
            if (notification.identifier !== identifier) {
                return notification;
            }
        });
    }
};

export default {
    state,
    mutations
}