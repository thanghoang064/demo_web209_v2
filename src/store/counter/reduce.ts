import { CounterAction } from "./action"
import * as actions from './type'

// định nghĩa state của reducer (Co)
export interface ICounterState  {
    counter : number
}
// khởi tạo 
const initCounterState :ICounterState = {
    counter :0
}

const counterReducer =  (state : ICounterState = initCounterState,action:CounterAction): ICounterState => {
   
    switch(action.type) {
        case actions.INCREASE_COUNT :
            state = {
                ...state, 
                counter:state.counter + action.payload
            }

            // state.counter = state.counter + 1;
          

        
        break;    
        case actions.DECREASE_COUNT:   
            state = {
                ...state,
                counter: state.counter - action.payload
            }
        break;    

    }
    return state;
}

export default counterReducer;