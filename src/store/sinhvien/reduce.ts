import { ISinhVien, GetListSinhVienAction, DeleteSinhVienAction, AddSinhVienAction, LoadingSinhVienAction, DetailSinhVienAction } from "./action";
import { DeleteSVDispatchType } from "./type";

//Định nghĩa cái state của sinh viên
export interface ISinhVienState {
    sinhvien : ISinhVien
    sinhviens: ISinhVien[],
    isDataLoaded: boolean,
    error: unknown
}
// giá trị mặc định defaut cho nó
const initSinhVienState: ISinhVienState = {
    sinhvien : {id : 0,ten: "",namsinh : 0} ,
    sinhviens: [],
    isDataLoaded: false,
    error: null
}

type ICombinedActions = GetListSinhVienAction | DeleteSinhVienAction 
| AddSinhVienAction | LoadingSinhVienAction | DetailSinhVienAction

const sinhVienReducer = (state: ISinhVienState = initSinhVienState, action: ICombinedActions): ISinhVienState => {
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
                sinhviens: action.payload.sinhviens
            }
            break;
        case 'loading-sv':
            console.log('action.payload', action.payload)
            state = {
                ...state,
                isDataLoaded: action.payload
            }
            break;
        case 'ct-sv':
            state = {
                ...state,
                sinhvien: {
                    id: action.payload.id,
                    ten: action.payload.ten,
                    namsinh : action.payload.namsinh
                }
            }
            break;
        default:
            break;
    }
    return state;
}
export default sinhVienReducer;