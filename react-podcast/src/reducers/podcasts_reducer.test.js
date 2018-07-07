import podcastReducer from './podcasts_reducer';
import { FETCH_PODCASTS_TOP, FETCH_PODCAST_INFO, fetchPodcastInfo } from '../actions';

describe('Reducers for Podcast fetching involves', () => {
    it('should fetch a list of top tags', () => {
        const state = null;
        let action = {
            type: FETCH_PODCASTS_TOP,
            payload: {
                data: [
                    {
                        title: "BUSINESS",
                        url: "business",
                        usage: 154
                    }
                ]
            }

        }

        let newState = podcastReducer(state, action);
        const expectedState = {
            business: {
                title: "BUSINESS",
                url: "business",
                usage: 154
            }
        };
        expect(newState).toEqual(expectedState);
    });

    it('should fetch preserve old state if action.payload.data is null', () => {
        let state = [{
            title: "BUSINESS",
            url: "business",
            usage: 154
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
        let state = {
            business: {
                title: "BUSINESS",
                url: "business",
                usage: 154
            }
        };

        ;
        let action = {
            type: FETCH_PODCASTS_TOP,
            payload: {
                data: [
                    {
                        title: "Entertainment.", url: "entertainment", usage: 3
                    }
                ]
            }
        }
        const expected = {
            entertainment: {
                title: "Entertainment.", url: "entertainment", usage: 3
            }
        };

        let newState = podcastReducer(state, action);
        expect(newState).toEqual(expected);
    });

    it('should return an empty state if no podcast with the tag is found', () => {
            let state = undefined;
            let action = {
                type: FETCH_PODCAST_INFO,
                payload: {
                }
            }
            expect(podcastReducer(state, action)).toEqual({});
        });
    
        it('should overwrite existing entry when a single podcast is fetch if found', () => {
            let state = {
                business: {
                    title: "BUSIN4ESS",
                    url: "business",
                    usage: 154
                }
            };
    
            ;
            let action = {
                type: FETCH_PODCAST_INFO,
                payload: {
                    data: 
                        {
                            title: "BUSINESS.", url: "business", usage: 3
                        }
                    
                }
            }
            const expected = {
                business: {
                    title: "BUSINESS.", url: "business", usage: 3
                }
            };
    
            let newState = podcastReducer(state, action);
            expect(newState).toEqual(expected);
        });

        it('should add a new entry to podcasts when a new podcast is fetch', () => {
            let state = {
                business: {
                    title: "BUSINESS",
                    url: "business",
                    usage: 154
                }
            };
    
            ;
            let action = {
                type: FETCH_PODCAST_INFO,
                payload: {
                    data: 
                        {
                            title: "ARTS", url: "arts", usage: 3
                        }
                    
                }
            }
            const expected = {
                business: {
                    title: "BUSINESS", url: "business", usage: 154
                },
                arts: {
                    title: "ARTS", url: "arts", usage: 3
                }
            };
    
            let newState = podcastReducer(state, action);
            expect(newState).toEqual(expected);
        });
});