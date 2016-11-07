export function isValidOrder(order) {
    // if (!("type" in order && "price" in order && "user" in order && ("payment" in order || "ticket" in order))){
    //     return false;
    // }
    //
    // if (("payment" in order && "ticket" in order) || (!("payment" in order) && !("ticket" in order))){ //If buy order and sell order or neither
    //     return false;
    // }
    //
    // if(isPropertyUndefinedOrEmpty(order, "price"))

    return true;
}

export function isPropertyUndefinedOrEmpty(object, property){
    if(!(property in object)){
        return false;
    }

    if(object[property].length <= 0){
        return false;
    }

    return true;
}