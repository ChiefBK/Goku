import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import CreateOrderComponent from './CreateOrderComponent';
import OpenOrdersComponent from './OpenOrdersComponent';

import Reducers from '../reducers/reducers';

let store = createStore(Reducers, {orders: []}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class ExchangeComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="exchange-container">
                Exchange container
                <CreateOrderComponent store={store}/>
                <OpenOrdersComponent store={store}/>
            </div>
        )
    }
}


export default ExchangeComponent;