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


export function openOrder(user, ticket, payment) {
    return {
        type: OPEN_ORDER,
        user,
        ticket,
        payment
    }
}

export function fillOrder(user, order, ticket, payment) {
    return {
        type: FILL_ORDER,
        user,
        order,
        ticket,
        payment
    }
}

export function deleteOrder(user, order) {
    return {
        type: DELETE_ORDER,
        user,
        order
    }
}

export function editOrder(user, order, field, change) {
    return {
        type: EDIT_ORDER,
        user,
        order,
        field,
        change
    }
}