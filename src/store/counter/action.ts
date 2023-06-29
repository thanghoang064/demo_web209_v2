import * as actionTypes from './type'
import { DispatchType } from './type'

export type CounterAction = {
    type :string,
    payload :number
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