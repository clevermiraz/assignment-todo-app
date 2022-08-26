import { COLOR_CHANGED, STATUS_CHANGE } from './actonTypes';
import initialState from './initialState';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGE:
            return {
                ...state,
                status: action.payload
            };

        case COLOR_CHANGED:
            const { color, changeType } = action.payload;

            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    };

                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter((exitingColor) => exitingColor !== color)
                    };

                default:
                    return state;
            }

        default:
            return state;
    }
};

export default filterReducer;
