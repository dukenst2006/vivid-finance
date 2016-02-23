import http from './../../services/http'

import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './../mutation-types';

export const notificationsInitialState = [];

export const notificationsMutations = {
    [ADD_NOTIFICATION] (state, notification) {
        var newestNotification = state.notifications[state.notifications.length - 1];

        notification.id = newestNotification ? newestNotification.id + 1 : 1;

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