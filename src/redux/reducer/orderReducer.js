import {orderIndividual} from '../init/init'
import { ORDER_DISTANCE, ORDER_ERROR, ORDER_LOADING, ORDER_OPTION_1 } from '../types/order.type';

export default function orderReducer(state = orderIndividual, action){
    switch (action.type){
        case ORDER_LOADING:
            return {
                ...state,
                loading: true,
                error: {}
            }
        case ORDER_ERROR:
            return{
                ...state,
                loading:false,
                error:state.data
            }
        case ORDER_DISTANCE:
            return{
                ...state,
                loading:false,
                error:{},
                data:{
                    ...state.data,
                    distance: state.data
                }
            }
        case ORDER_OPTION_1:
            return{
                ...state,
                loading:false,
                error:{},
                data:{
                    ...state.data,
                    option: action.data
                }
            }
        case ORDER_OPTION_2:
            return{
                ...state,
                loading:false,
                error:{},
                data:{
                    ...state.data,
                    option: action.data
                }
            }
    }

}