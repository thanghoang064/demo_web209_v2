import { DispatchType } from "./type"

// ddinh nghia khuon mau sinh vien co clj
export interface ISinhVien  {
    id:number
    ten:string,
    namsinh: number
}
// dinh nghia 1 cái action

export interface SinhVienAction   {
    type:string, // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload : ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}
export function addSinhVien(sv:ISinhVien) {
    //khoi tao 1 action (bao gom 2 gia tri - kieu action - gia tri cua action payload )
    // const action:SinhVienAction =  {
    //     type : 'add-sv',
    //     payload : sv
    // }
    // // gọi đến 1 hàm dispatch
    // return (dispatch: DispatchType) => {
    //     dispatch(action)
    // }
    return async (dispatch: DispatchType) => {
        try {
            const response = await fetch('http://localhost:3001/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sv)
            });

            if (!response.ok) {
                throw new Error('Error adding student');
            }

            const data = await response.json();

            // Thực hiện các tác vụ cần thiết sau khi gửi dữ liệu thành công
            // Ví dụ: dispatch action để cập nhật danh sách sinh viên
            dispatch({
                type: 'add-sv',
                payload: data
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };
}
export function deleteSinhVien(sv:ISinhVien) {
    //khoi tao 1 action (bao gom 2 gia tri - kieu action - gia tri cua action payload )
    // const action:SinhVienAction =  {
    //     type : 'xoa-sv',
    //     payload : sv
    // }
    // // gọi đến 1 hàm dispatch
    // return (dispatch: DispatchType) => {
    //     dispatch(action)
    // }
    return async (dispatch:DispatchType) => {
        try {
            const response = await fetch(`http://localhost:3001/student/${sv.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error deleting student');
            }

            // Thực hiện các tác vụ cần thiết sau khi xóa thành công
            // Ví dụ: dispatch action để cập nhật danh sách sinh viên
            dispatch({
                type: 'xoa-sv',
                payload:sv
            });

        } catch (error) {
            console.log('Error:', error);
        }
    };
}
export const fetchSinhViensAction = () => {

    return async (dispatch: DispatchType) => {
        try {
            const response = await fetch('http://localhost:3001/student');
            const data = await response.json();
            console.log("123");
            dispatch({
                type: 'get-sv',
                payload: data
            });
            dispatch({
                type: 'SET_DATA_LOADED',
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
};
