import { pageMemoInit } from "../init/init"

export function pageMemoReducer(state = pageMemoInit, action){
    switch(action.type){
        case "PAGEMEMO_INIT":
            return{
                pageNum:1,
                pageTitle:""
            }
        case "PAGEMEMO_URL":
            if(action.url.includes("board/") || action.url.includes("/Manage2_1/") ||action.url.includes("/Manage3_1") ){
                if(state.pageTitle === action.url){
                    return{
                        ...state,
                        pageTitle:action.url
                    }
                } else{
                    if(action.url.includes("/Manage2_1/")||action.url.includes("/Manage3_1")){
                        return{
                            ...state,
                            pageTitle:action.url,
                            pageNum:0
                        }
                    } else {
                         return{
                            ...state,
                            pageTitle:action.url,
                            pageNum:1
                        }
                    }
                   
                }
                
            }else{
                return{
                    ...state
                }
            }
            
        case "PAGEMEMO_NUM":
            if(state.pageTitle.includes(action.url)){
                return{
                ...state
                }
            } else {
                return{
                ...state
                }
            }
        case "PAGEMEMO_NUM_CHANGE" :
             return{
            ...state,
            pageNum:action.num
            }
        
        default :
        return state
    }
}