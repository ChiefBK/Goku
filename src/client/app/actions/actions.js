// Opening a order
// Filling a order
// Deleting an order
// Editing an order

export const OPEN_ORDER = 'OPEN_ORDER';
export const FILL_ORDER = 'FILL_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const EDIT_ORDER = 'EDIT_ORDER';

// {
//     Type: “Open”, “Fill”, “Delete”, or “Edit”
// 	User: <user-id>
//         Order: <order-id>
//         Field: (for Edit) <string> the field of the order that is being changed
//         Change: (for Edit) <string or int or float> the value that the Field should be changed to
//             Ticket: (for Fill or Open) <ticket-id> required to fill a buy order or open a sell order
//                 Payment: (for Fill or Open) <payment-id> required to open a buy order or fill a sell order
//                     }


export function openOrder(user_id, ticket_id, payment_id, price) {
    return {
        type: OPEN_ORDER,
        payload: {
            user_id,
            ticket_id,
            payment_id,
            price

        }
    }
}

export function fillOrder(user_id, order_id) {
    return {
        type: FILL_ORDER,
        payload: {
            user_id,
            order_id,
        }
    }
}

export function deleteOrder(order) {
    return {
        type: DELETE_ORDER,
        payload: {
            order
        }
    }
}

export function editOrder(order, field, newValue) {
    return {
        type: EDIT_ORDER,
        payload: {
            order,
            field,
            newValue
        }
    }
}