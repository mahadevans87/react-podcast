import axios from 'axios';

export const FETCH_PODCASTS_TOP = 'fetch_podcasts_top';
export const FETCH_PODCAST_INFO = 'fetch_podcast_info';

const ROOT_URL = "https://gpodder.net/";

export function fetchTopTags() {
    const topTags = 'toplist/100.json?scaled_logo=100';
    const url = `${ROOT_URL}${topTags}`;

    return {
        type: FETCH_PODCASTS_TOP,
        payload: axios.get(url) 
    };     
}

export function fetchPodcastInfo(tag) {
    if (!tag) {
        throw('tag should be present');
    }
    return {
        type: FETCH_PODCAST_INFO,
        payload: tag
    };
}
