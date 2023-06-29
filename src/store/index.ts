import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import { CounterAction } from "./counter/action";
import thunk from "redux-thunk";

export interface IRootState{
    counter : ICounterState
}
export type RootActions = CounterAction;
// global state để chứa rất nhiều state 
const rootReducer = combineReducers({
    counter : counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))