import {ORDER_CALL, ORDER_CAR, ORDER_CONTRACT, ORDER_DESTINATION, ORDER_DISTANCE, ORDER_ERROR, ORDER_LOADING, ORDER_MOVEDATE, ORDER_MOVEFORM, ORDER_NAME, ORDER_OPTION_1, ORDER_OPTION_2, ORDER_PACKINGDATE, ORDER_PHONE, ORDER_STARTINGPOINT} from '../types/order.type'



export const orderLoading = () => {
    return{
        type: ORDER_LOADING
    }
}

export const orderError= () => {
    return{
        type: ORDER_ERROR
    }
}
//거리 주소 입력하면 결과값 받아와 리턴
export const orderDistance = (distance) => {
    return {
        type: ORDER_DISTANCE,
        data: distance
    }
}

//옵션에 따른 값
export const orderOption1 = (option) => {
    return{
        type: ORDER_OPTION_1,
        data: option
    }
}
export const orderOption2 = (option) => {
    return{
        type: ORDER_OPTION_2,
        data: option
    }
}

