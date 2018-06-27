import { combineReducers } from 'redux';
import  podcastsReducer  from './podcasts_reducer';

const rootReducer = combineReducers({
    podcasts : podcastsReducer 
});

export default rootReducer;
