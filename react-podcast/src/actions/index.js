import axios from 'axios';

export const FETCH_PODCASTS_TOP = 'fetch_podcasts_top';

const ROOT_URL = "https://gpodder.net/";

export function fetchTopTags() {
    const topTags = 'toplist/100.json';
    const url = `${ROOT_URL}${topTags}`;

    return {
        type: FETCH_PODCASTS_TOP,
        payload: axios.get(url) 
    }; 
    
    
}
