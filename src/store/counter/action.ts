import * as actionTypes from './type'
import { DispatchType } from './type'

// định nghĩa cho cái action 
export type CounterAction = {
    type :string, // tên action 
    payload :number  //data muốn truyền vào để xử lý 
}



export function increaseCountAction(count:number) {
    
    const action :CounterAction = {
        type : actionTypes.INCREASE_COUNT,
        payload : count
    }

    return (dispatch : DispatchType) => {
        dispatch(action)
    }
}
export function decreaseCountAction(count:number) {
    const action : CounterAction = {
        type : actionTypes.DECREASE_COUNT,
        payload :count
    }
    return (dispatch :DispatchType) => {
        dispatch(action);
    }
}