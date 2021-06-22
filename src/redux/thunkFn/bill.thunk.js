import axios from "axios";
import { getBillDetailError, getBillDetailLoading, getBillDetailSuccess, getBillListError, getBillListLoading, getBillListSuccess } from "../actionFn/bill";

const user = JSON.parse(localStorage.getItem('user'));       



export const getBillList = () => dispatch =>{
    dispatch(getBillListLoading());
    const url = '/BM/API/seller/bill_list.asp';
    axios.post(url,{
        "man_info_sn": user.man_info_sn
    }).then(function (res){
        dispatch(getBillListSuccess(res.data));
    }).catch(function (error){
        dispatch(getBillListError(error));
    })
}

export const getBillDetail = () => dispatch =>{
    dispatch(getBillDetailLoading());
    const url = '/BM/API/seller/bill_info.asp';
    axios.post(url,{
        "brand":user.brand,
        "man_info_sn":user.man_info_sn,
        "manname":user.name,
        "teamname":user.teamname
    }).then(function (res){
        dispatch(getBillDetailSuccess(res.data));
    }).catch(function (error){
        dispatch(getBillDetailError(error));
    })
}