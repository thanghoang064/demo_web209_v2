import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import { CounterAction } from "./counter/action";
import thunk from "redux-thunk";
import counterReducer1, { ICounterState1 } from "./counter1/reduce";

export interface IRootState{
    counter : ICounterState
}
export interface IRootState1 {
    counter1 : ICounterState1
}
export type RootActions = CounterAction;
// global state để chứa rất nhiều state 
const rootReducer = combineReducers({
    counter : counterReducer,
    counter1 : counterReducer1
})

export const store = createStore(rootReducer, applyMiddleware(thunk)) //