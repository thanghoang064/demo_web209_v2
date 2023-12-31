import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import { CounterAction } from "./counter/action";
import thunk from "redux-thunk";
import counterReducer1, { ICounterState1 } from "./counter1/reduce";
import sinhVienReducer, { ISinhVienState } from "./sinhvien/reduce";
import orderReducer, { IOrderState } from "./order/reduce";

export interface IRootState{
    counter : ICounterState,
    sinhvien : ISinhVienState
    orders : IOrderState
}
export interface IRootState1 {
    counter1 : ICounterState1,
   
}
export type RootActions = CounterAction;
// global state để chứa rất nhiều state 
const rootReducer = combineReducers({
    counter : counterReducer,
    counter1 : counterReducer1,
    sinhvien: sinhVienReducer,
    orders : orderReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk)) //