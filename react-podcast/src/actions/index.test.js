import axios from 'axios';
import {fetchTopTags, FETCH_PODCASTS_TOP} from './index';

describe('Unauthenticated API calls for fetching tags, podcast info', () => {
    describe('Fetch Top Tags API ', () => {
        jest.mock('axios');
        it('Should be called with the following URL', function() {
            axios.get = jest.fn();
            fetchTopTags();
            expect(axios.get).toBeCalledWith('https://gpodder.net/toplist/100.json');  
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
});
