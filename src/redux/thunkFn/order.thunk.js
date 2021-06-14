import { orderDistance, orderError, orderLoading, orderOption1, orderOption2 } from "../actionFn/order"

export const getDistance = (distance) => dispatch => {
    dispatch(orderLoading());
    dispatch(orderDistance(distance));
    if(distance === null || distance === "")
        dispatch(orderError());
    
}

export const addOption = (number,option) => (dispatch) =>{
    dispatch(orderLoading());
    if(number === 1){
        dispatch(orderOption1(option));
    } else {
        dispatch(orderOption2(option));
    }

    if(option === null || option === "")
        dispatch(orderError());
}