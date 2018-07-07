import {FETCH_PODCASTS_TOP, FETCH_PODCAST_INFO} from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PODCASTS_TOP:
            if (action.payload && action.payload.data) {
                return Object.assign({}, _.mapKeys(action.payload.data, 'url'));
            } else {
                return state;
            }
        case FETCH_PODCAST_INFO:
            if (action.payload && action.payload.data ) {
                //return Object.assign({}, state, {[action.payload.data.tag] : action.payload.data})
                return {...state, [action.payload.data.url] : action.payload.data};
            } else {
                return state;
            }
        default:
            return state;
    }
}