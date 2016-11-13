import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

import AllEventsComponent from './components/AllEventsComponent';
import EventComponent from './components/EventComponent';
import ExchangeComponent from './components/ExchangeComponent';
import NotFoundComponent from './components/NotFoundComponent';
import HomeComponent from './components/HomeComponent';

const app = document.getElementById('app');

render(
    <Router history={browserHistory}>
        <Route path="/" component={HomeComponent}></Route>
        <Route path="/exchange" component={ExchangeComponent}></Route>
        <Route path="/event/:id" component={EventComponent}></Route>
        <Route path="/events" components={AllEventsComponent}/>
        <Route path="*" component={NotFoundComponent} />
    </Router>,
    app
);