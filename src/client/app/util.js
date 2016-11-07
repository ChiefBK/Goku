import {isValidOrder} from './validators';

export function getOrderType(order){
    console.log("GET ORDER TYPE");
    console.log(order);
    if (!isValidOrder(order)){
        return "";
    }

    if (order.payment_id.length > 0 && order.ticket_id.length == 0){
        return "BUY";
    }
    else if (order.ticket_id.length > 0 && order.payment_id.length == 0){
        return "SELL";
    }

}