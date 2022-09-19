// for add to cart
export const addCart =(product)=>{
    return {
        type : "ADDITEM",
        payload : product
    }
}

// For delete item from cart
export const delCart =(product)=>{
    return {
        type : "DELITEM",
        payload : product
    }
}
export const pdelCart =(product)=>{
    return {
        type : "PDELITEM",
        payload : product
    }
}