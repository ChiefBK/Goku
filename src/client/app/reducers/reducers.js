import {OPEN_ORDER, FILL_ORDER, DELETE_ORDER, EDIT_ORDER} from '../actions/actions';
import {isValidOrder} from '../validators'
import {combineReducers} from 'redux';

// TODO - validate actions
// TODO - create order model
// TODO - generate UUIDs for orders

function orders(state = [], action) {
    let payload = action.payload;
    switch (action.type) {
        case OPEN_ORDER:
            let newOrder = {};
            newOrder['user_id'] = payload.user_id;
            newOrder['price'] = payload.price;
            newOrder['payment_id'] = payload.payment_id;
            newOrder['ticket_id'] = payload.ticket_id;

            if (isValidOrder(newOrder)){
                return [
                    ...state,
                    newOrder
                ];
            }
            else{
                return state;
            }


        case FILL_ORDER:
            return state.map(function (order, index) {
                if (order.id != payload.order) {
                    return Object.assign({}, order)
                }
            });

        case DELETE_ORDER:
            return state.map(function (order, index) {
                if (order.id != payload.order) {
                    return Object.assign({}, order);
                }
            });

        case EDIT_ORDER:
            return state.map(function (order, index) {
                if (order.id == payload.order) {
                    let change = {};
                    change[payload.field] = payload.change;
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