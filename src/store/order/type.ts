import { AddCartAction, IClearOrderStore } from "./action";


export type AddCartDispatchType = (args:AddCartAction) => AddCartAction
export type ClearOderStoreDispatchType = (args:IClearOrderStore) => IClearOrderStore