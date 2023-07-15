import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { ISinhVien, addSinhVien } from "../../store/sinhvien/action"
import { useState } from "react"

const SinhVien = () => {
    const [ten, setTen] = useState('');
    const [namsinh, setNamSinh] = useState<number>(0);
    const [id, setId] = useState<number>(0);
    const dispatch: Dispatch<any> = useDispatch()

    const add = () => {

        const sv: ISinhVien = {
            id,
            ten,
            namsinh
        }

        dispatch(addSinhVien(sv))
    }
    return (<div>
        Ten  <input type="text" onChange={(event) => setTen(event.target.value)} />
        Nam Sinh <input type="number"   onChange={(event) => setNamSinh(+event.target.value)} />
        <button onClick={add}> Xu ly</button>
    </div>)
}

export default SinhVien;