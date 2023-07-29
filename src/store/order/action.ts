import { ISinhVien } from "../sinhvien/action";
import { IOrder } from "./reduce";
import { AddCartDispatchType, ClearOderStoreDispatchType } from "./type";


export interface AddCartAction {
    type: 'add-cart', // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload: ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}
export interface IClearOrderStore {
    type: 'clear-order-order'
}

export function CartAction(product: ISinhVien) {

    const action: AddCartAction = {
        type: 'add-cart',
        payload: product
    }

    return (dispatch: AddCartDispatchType) => {
        dispatch(action)
    }
}
export function saveOrderAction(cart: IOrder[]) {
    return async (dispatch: ClearOderStoreDispatchType) => {
        try {
            const response = await fetch('http://localhost:3001/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Error save orders');
            }

            const action: IClearOrderStore = {
                type: 'clear-order-order',
            }

            dispatch(action)

        } catch (error) {
            console.log('Error:', error);
        }
    }
}