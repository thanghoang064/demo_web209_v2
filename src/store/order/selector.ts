import { IOrderState } from "./reduce";

export const getTotalAmounSelector = (state: IOrderState) => {
    const { orders } = state;
    return orders.reduce((pre, current) => {
        return (current.quantity * current.price) + pre
    }, 0)
}