import { CounterAction } from "./action";

export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export type DispatchType = (args: CounterAction) => CounterAction 
// định nghĩa type dispatch phải có những tham số nào