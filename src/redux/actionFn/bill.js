import { BILL_DETAIL_ERROR, BILL_DETAIL_LOADING, BILL_DETAIL_SUCCESS, BILL_LIST_ERROR, BILL_LIST_LOADING, BILL_LIST_SUCCESS } from "../types/bill.type"

export const getBillListSuccess = (data) => {
    return{
        type:BILL_LIST_SUCCESS,
        data
    }
}

export const getBillListLoading = () => {
    return{
        type:BILL_LIST_LOADING
    }
}

export const getBillListError = (data) => {
    return{
        type:BILL_LIST_ERROR,
        data
    }
}

export const getBillDetailSuccess = (data) => {
    return{
        type:BILL_DETAIL_SUCCESS,
        data
    }
}

export const getBillDetailLoading = () => {
    return{
        type:BILL_DETAIL_LOADING
    }
}

export const getBillDetailError = (data) => {
    return{
        tyep:BILL_DETAIL_ERROR,
        data
    }
}