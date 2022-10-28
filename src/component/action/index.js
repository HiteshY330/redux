
export const AddData = (data) =>{
    return{
        type:`ADD`,
        data,
    }
}

export const Delete = (dis) =>{
    return{
        type:`DEL`,
        dis,
    }
}


export const AddCart = (cart) =>{
    return{
        type:`ADDCART`,
        cart,
    }
}