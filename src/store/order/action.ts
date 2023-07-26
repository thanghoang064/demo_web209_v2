import { ISinhVien } from "../sinhvien/action";
import { AddCartDispatchType } from "./type";


  export interface AddCartAction {
    type: 'add-cart', // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload: ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}  


export function CartAction(product : ISinhVien) {
   
    const action :AddCartAction = {
        type : 'add-cart',
        payload :product
    }
    
    return (dispatch : AddCartDispatchType) => {
        dispatch(action)
    }
}