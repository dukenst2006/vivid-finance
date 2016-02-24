import http from './../../services/http'

import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './../mutation-types';

export const notificationsInitialState = [];

export const notificationsMutations = {
    [ADD_NOTIFICATION] (state, notification) {
        notification.id = Math.random().toString(36).substring(7);

        state.notifications.push(notification);
    },
    [DELETE_NOTIFICATION] (state, id) {
        state.notifications = state.notifications.filter((notification) => {
            if (notification.id !== id) {
                return notification;
            }
        });
    }
};