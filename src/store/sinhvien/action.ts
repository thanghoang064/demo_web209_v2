import { AddSVDispatchType, DeleteSVDispatchType, DetailSvDispatchType, GetListSVDispatchType, LoadingSvDispatchType } from "./type"

// ddinh nghia khuon mau sinh vien co clj
export interface ISinhVien {
    id: number
    ten: string,
    namsinh: number
}

interface IGetListSvPayload {
    sinhviens: ISinhVien[]
    loading: boolean
    error: unknown
}

// dinh nghia 1 cái action

export interface GetListSinhVienAction {
    type: 'get-sv', // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload: IGetListSvPayload// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}

export type AddSinhVienAction = {
    type: 'add-sv', // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload: ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}

export type LoadingSinhVienAction = {
    type: 'loading-sv',
    payload: boolean
}

export type DeleteSinhVienAction = {
    type: 'xoa-sv', // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload: ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý
}
export type DetailSinhVienAction = {
    type : 'ct-sv',
    payload: ISinhVien
}

export function addSinhVien(sv: ISinhVien) {
    return async (dispatch: AddSVDispatchType) => {
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
export function deleteSinhVien(sv: ISinhVien) {
    return async (dispatch: DeleteSVDispatchType) => {
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
                payload: sv
            });

        } catch (error) {
            console.log('Error:', error);
        }
    };
}
export const fetchSinhViensAction = () => {
    console.log('fetchSinhViensAction')
    return async (dispatch: GetListSVDispatchType) => {
        try {
            // dispatch({
            //     type: 'get-sv',
            //     payload: {
            //         error: null,
            //         loading: false,
            //         sinhviens: []
            //     }
            // });
            const response = await fetch('http://localhost:3001/student');
            const data: ISinhVien[] = await response.json();
            console.log("123", data);
            dispatch({
                type: 'get-sv',
                payload: {
                    error: null,
                    loading: false,
                    sinhviens: data
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const loadingSinhVien = (loading = false) => {
    return (dispatch: LoadingSvDispatchType) => {
        dispatch({
            type: 'loading-sv',
            payload: loading
        })
    }
}


export const detailSinhVien = (sv: ISinhVien) => {
    return (dispatch: DetailSvDispatchType) => {
        dispatch({
            type: 'ct-sv',
            payload:sv
        })
    }
}
