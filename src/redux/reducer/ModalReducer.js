const MODAL_CLOSE = "MODAL_CLOSE";
const MODAL_OPEN = "MODAL_OPEN";

const initialState = { open: false,type:1};


export const modalOpen = (type) =>{
    return{
        type:MODAL_OPEN,
        data:type
    }
}


export const modalCloase = () =>{
    return{
        type:MODAL_CLOSE
    }
}

export default function ModalReducer(state = initialState, action){
    switch(action.type){
        case MODAL_CLOSE:
            return{
                open:false
            }
        case MODAL_OPEN:
            return{
                ...state,
                open:true,
                data:action.data
            }
        default : return state;
    }
}