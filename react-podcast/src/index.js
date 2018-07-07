import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import PodcastDetail from './components/podcast_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/podcast/:url" component={PodcastDetail} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
