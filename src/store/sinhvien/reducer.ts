import { ISinhVien, SinhVienAction } from "./action";

//Định nghĩa cái state của sinh viên
export interface ISinhVienState {
    sinhviens: ISinhVien[],
    isDataLoaded: boolean,
}
// giá trị mặc định defaut cho nó
const initSinhVienState: ISinhVienState = {
    sinhviens: [],
    isDataLoaded: false,
}

const sinhVienReducer = (state: ISinhVienState = initSinhVienState, action: SinhVienAction): ISinhVienState => {
    switch (action.type) {
        case 'add-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.concat(action.payload)
            }
            console.log(action);
            break;
        case 'xoa-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.filter(sinhvien => sinhvien.id !== action.payload.id)
            };
            break;
        case 'get-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.concat(action.payload)
            }
            break;
        case 'SET_DATA_LOADED':
            return {
                ...state,
                isDataLoaded: true,
            };
        default:
            break;
    }
    return state;
}
export default sinhVienReducer;