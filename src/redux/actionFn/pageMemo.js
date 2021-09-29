import { PAGEMEMO_INIT, PAGEMEMO_NUM, PAGEMEMO_NUM_CHANGE, PAGEMEMO_URL } from "../types/pageMemo.type"

export const pageMemoInit = () =>{
    return{
        type:PAGEMEMO_INIT
    }
}

export const pageMemoUrl = (url) =>{
    return {
        type:PAGEMEMO_URL,
        url:url
    }
}

export const pageMemoNum = (url) =>{
    return {
        type:PAGEMEMO_NUM,
        url
    }
}

export const pageMemoNumChange = (num) =>{
    return{
        type:PAGEMEMO_NUM_CHANGE,
        num
    }
}