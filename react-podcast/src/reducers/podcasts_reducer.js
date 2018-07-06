import {FETCH_PODCASTS_TOP} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PODCASTS_TOP:
            if (action.payload && action.payload.data && action.payload.data.length > 0) {
                return Object.assign([], action.payload.data);
            } else {
                return state;
            }
        default:
            return state;
    }
}