import { COLOR_CHANGED, STATUS_CHANGE } from './actonTypes';

export const statusChange = (status) => ({
    type: STATUS_CHANGE,
    payload: status
});

export const colorChange = (color, changeType) => ({
    type: COLOR_CHANGED,
    payload: {
        color,
        changeType
    }
});
