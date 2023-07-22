import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux";
import { useState } from "react"
import { ISinhVien, addSinhVien } from "../../../store/sinhvien/action";
import { IRootState } from "../../../store";

interface IProps {
    stateStudent? : string 
}
const FormSinhVien = (props: IProps) => {
    const [ten, setTen] = useState('');
    const [namsinh, setNamSinh] = useState<number>(0);
    const [id, setId] = useState<number>(0);
    const dispatch: Dispatch<any> = useDispatch()
    
    const add = (e: any) => {
        e.preventDefault();
        const sv: ISinhVien = {
            id,
            ten,
            namsinh,
            
        }
      
        // const sinhvienState1 = useSelector(
        //     (state: IRootState) => state.sinhvien,
        // ) 

        dispatch(addSinhVien(sv))
    }
    const sinhvienState = useSelector(
        (state: IRootState) => state.sinhvien,
    ) 
    return (
        <form onSubmit={add}>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ten Sinh vien</label>
                <input value={sinhvienState.sinhvien.namsinh != 0 ? sinhvienState.sinhvien.namsinh : '' } onChange={(event) => setTen(event.target.value)} type="text" id="ten" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhap ten sinh vien" />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nam Sinh</label>
                <input onChange={(event) => setNamSinh(+event.target.value)} type="text" id="namsinh" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhap nam sinh" />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default FormSinhVien;