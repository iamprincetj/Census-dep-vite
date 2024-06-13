import { useReducer } from 'react';

import { createContext } from 'react';

const notificationContext = createContext();

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTE':
            return action.payload;
        case 'CLEAR_NOTE':
            return '';
        default:
            return state;
    }
};

export const useNotificationValue = () => {
    const notification = useReducer(notificationReducer, '');

    return notification[0];
};

export const useNotificationDispatch = () => {
    const notification = useReducer(notificationReducer, '');

    return notification[1];
};

const Notification = ({ children }) => {
    const [notification, dispatch] = useReducer(notificationReducer, '');

    return (
        <notificationContext.Provider value={[notification, dispatch]}>
            {children}
        </notificationContext.Provider>,
    );
};

export default Notification;
