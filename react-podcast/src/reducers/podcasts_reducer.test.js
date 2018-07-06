import podcastReducer from './podcasts_reducer';
import { FETCH_PODCASTS_TOP } from '../actions';

describe('Reducers for Podcast fetching involves', () => {
    it('should fetch a list of top tags', () => {
        const state = null;
        let action = {
            type: FETCH_PODCASTS_TOP,
            payload: {
                data: [
                    {
                    title:	"BUSINESS",
                    tag:	"business",
                    usage:  154
                    }
                ]
            }

        }
        
        let newState = podcastReducer(state, action);
        expect(newState).toEqual(action.payload.data);
    });

    it('should fetch preserve old state if action.payload.data is null', () => {
        let state = [{
            title:	"BUSINESS",
            tag:	"business",
            usage:  154
         }
        ];
        let action = {
            type: FETCH_PODCASTS_TOP,
            payload: {
            }
        }
        
        let newState = podcastReducer(state, action);
        expect(newState).toEqual(state);
    });

    it('should overwrite existing podcasts to new entries if found', () => {
        let state = [{
                title:	"BUSINESS",
                tag:	"business",
                usage:  154
        }
        ];
        let action = {
            type: FETCH_PODCASTS_TOP,
            payload: {
                data: [
               {
                    title: "Entertainment.", tag: "entertainment", usage: 3
                }
            ]}
        }
        const expected = [
                {
                    title: "Entertainment.", tag: "entertainment", usage: 3
                }
            ];

        let newState = podcastReducer(state, action);
        expect(newState).toEqual(expected);
    });


});