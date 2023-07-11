import { type } from 'os'
import * as actionTypes from './type'
import { DispatchType } from './type'

// định nghĩa ra cái khuôn CounterAction
export type CounterAction1 = {
    type:string,
    payload:number     
}
// export type SumAction = {
//     type:string,
//     payload : number
// }

export function increaseCountAction(count:number) {
    const action :CounterAction1 = {
        type : actionTypes.INCREASE_COUNT,
        payload: count
    }
    return (dispatch : DispatchType) => {
        dispatch(action)
    }
}
export function sumTwoNumBerAction(num1:number,num2:number) {
    const action :CounterAction1 = {
        type : actionTypes.SUM_NUMBER,
        payload : num1 + num2
    }
    
    return (dispatch : DispatchType) => {
        dispatch(action)
    }
}