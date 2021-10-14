import { UPDATE_ENV, RESET_ENV } from '../../actions/env';

export default function envReducer(state = {}, action) {
    switch (action.type) {
    case UPDATE_ENV:
        return action.payload || false;
    case RESET_ENV:
    default:
        return state;
    }
}