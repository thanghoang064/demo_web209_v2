import { CounterAction1 } from "./action"
import * as actions from './type'
export interface ICounterState1 {
    counter :number,
   
}
// khởi tạo biến counter state
const initCounterState : ICounterState1 = {
    counter : 0,
}


const counterReducer1 = (state :ICounterState1 =initCounterState, action:CounterAction1):ICounterState1 =>{
    switch(action.type) {
        case actions.INCREASE_COUNT : 
            state = {
                ...state,
                counter:state.counter + action.payload
            }
        break;
        case actions.SUM_NUMBER : 
            
            state = {
                ...state,
                counter:action.payload 
            }
          
            break;
    }
    return state
}

export default counterReducer1;