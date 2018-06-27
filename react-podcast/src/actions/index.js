import axios from 'axios';

export const FETCH_PODCASTS_TOP = 'fetch_podcasts_top';

const ROOT_URL = "https://gpodder.net/api/2/";

export function fetchTopTags() {
    return axios.get('https://www.google.com')
}
