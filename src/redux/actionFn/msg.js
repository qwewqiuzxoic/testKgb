import { MSG_DEL_ERROR, MSG_DEL_LOADING, MSG_DEL_SUCCESS, MSG_RCV_LIST_ERROR, MSG_RCV_LIST_LOADING, MSG_RCV_LIST_SUCCESS, MSG_SEND_LIST_ERROR, MSG_SEND_LIST_LOADING, MSG_SEND_LIST_SUCCESS, MSG_DEL_INIT,
    MSG_SEARCH_ADD_SUCCESS, MSG_SEARCH_ADD_LOADING, MSG_SEARCH_ADD_ERROR, MSG_SEND_SUCCESS, MSG_SEND_LOADING, MSG_SEND_ERROR, MSG_SEND_INIT} from "../types/msg.type"

export const getMsgRcvListSuccess = (data)=>{
    return{
        type:MSG_RCV_LIST_SUCCESS,
        data
    }
}

export const getMsgRcvListLoading = ()=>{
    return{
        type:MSG_RCV_LIST_LOADING
    }
}

export const getMsgRcvListError = (data)=>{
    return{
        type:MSG_RCV_LIST_ERROR,
        data
    }
}

export const getMsgSendListSuccess = (data)=>{
    return{
        type:MSG_SEND_LIST_SUCCESS,
        data
    }
}

export const getMsgSendListLoading = ()=>{
    return{
        type:MSG_SEND_LIST_LOADING
    }
}

export const getMsgSendListError = (data)=>{
    return{
        type:MSG_SEND_LIST_ERROR,
        data
    }
}

export const getMsgDelSuccess = (data)=>{
    return{
        type:MSG_DEL_SUCCESS,
        data
    }
}

export const getMsgDelLoading = ()=>{
    return{
        type:MSG_DEL_LOADING
    }
}

export const getMsgDelError = (data)=>{
    return{
        type:MSG_DEL_ERROR,
        data
    }
}

export const getMsgDelInit = (data)=>{
    return{
        type:MSG_DEL_INIT
    }
}


//주소록찾기
export const getMsgAddSuccess = (data) =>{
    return{
        type:MSG_SEARCH_ADD_SUCCESS,
        data
    }
}

export const getMsgAddLoading = () =>{
    return{
        type:MSG_SEARCH_ADD_LOADING
    }
}

export const getMsgAddError = (data) =>{
    return{
        type:MSG_SEARCH_ADD_ERROR,
        data
    }
}

//쪽지보내기
export const postMsgSendSuccess = (data) =>{
    return{
        type:MSG_SEND_SUCCESS,
        data
    }
}

export const postMsgSendLoading = () =>{
    return{
        type:MSG_SEND_LOADING
    }
}

export const postMsgSendError = (data) =>{
    return{
        type:MSG_SEND_ERROR,
        data
    }
}
export const postMsgSednInit = ()=>{
    return{
        type:MSG_SEND_INIT
    }
}