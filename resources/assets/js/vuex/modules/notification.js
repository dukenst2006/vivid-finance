import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './../mutation-types';

const state = [];

const mutations = {
    [ADD_NOTIFICATION] (state, notification) {
        notification.identifier = Math.random().toString(36).substring(7);

        state.push(notification);
    },
    [DELETE_NOTIFICATION] (state, id) {
        state = state.filter((notification) => {
            if (notification.id !== id) {
                return notification;
            }
        });
    }
};

export default {
    state,
    mutations
}