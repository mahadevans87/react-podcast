import axios from 'axios';
import { fetchTopTags, FETCH_PODCASTS_TOP,
         fetchPodcastInfo, FETCH_PODCAST_INFO } from './index';

describe('Top Podcasts web service', () => {
    jest.mock('axios');
    it('Should be called with the following URL', function () {
        axios.get = jest.fn();
        fetchTopTags();
        expect(axios.get).toBeCalledWith('https://gpodder.net/toplist/100.json?scaled_logo=100');
        axios.get.mockReset();
    });

    it('Should return an object with type and payload of  Axios Promise', () => {
        axios.get = jest.fn();
        axios.get.mockReturnValue(expect.any(Promise));
        var topTags = fetchTopTags();
        expect(topTags.type).toBe(FETCH_PODCASTS_TOP);
        expect(topTags.payload).toEqual(expect.any(Promise));
        axios.get.mockReset();
    });
});

describe ('Action:FetchPodcastInfo', () => {
    it('should accept a podcast with a single tag', () => {
        expect(fetchPodcastInfo).toThrow('tag should be present');
    });

    it('should return an object with type: FETCH_PODCAST_INFO and payload: tag', () => {
        let tag = 'sometag';
        let action = {
            type: FETCH_PODCAST_INFO,
            payload: tag
        };
        expect(fetchPodcastInfo(tag)).toEqual(action);
    });
});
