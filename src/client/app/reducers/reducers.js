import {OPEN_ORDER, FILL_ORDER, DELETE_ORDER, EDIT_ORDER} from '../actions/actions';
import {combineReducers} from 'redux';

// TODO - validate actions
// TODO - create order model
// TODO - generate UUIDs for orders

function orders(state = [], action) {
    switch (action.type) {
        case OPEN_ORDER:
            let newOrder = {};
            newOrder['user'] = action.user;

            if (action.ticket) {
                newOrder['ticket'] = action.ticket;
            }
            else if (action.payment) {
                newOrder['payment'] = action.payment;
            }

            return [
                ...state,
                newOrder
            ];

        case FILL_ORDER:
            return state.map(function (order, index) {
                if (order.id != action.order) {
                    return Object.assign({}, order)
                }
            });

        case DELETE_ORDER:
            return state.map(function (order, index) {
                if (order.id != action.order) {
                    return Object.assign({}, order);
                }
            });

        case EDIT_ORDER:
            return state.map(function (order, index) {
                if (order.id == action.order) {
                    let change = {};
                    change[action.field] = action.change;
                    return Object.assign({}, order, change);
                }
            });
        default:
            return state;
    }
}

const exchange = combineReducers({
    orders
});

export default exchange;