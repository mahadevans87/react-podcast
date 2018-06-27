import axios from 'axios';
import {fetchTopTags} from './index';

describe('Unauthenticated API calls for fetching tags, podcast info', () => {
    describe('Top Tags should return a list of x top categories', () => {
        jest.mock('axios');

        test('Should fetch a list of x top tags', function() {
            axios.get = jest.fn();
            fetchTopTags();
            expect(axios.get).toBeCalledWith('https://www.google.com');  
        });
    });
});
