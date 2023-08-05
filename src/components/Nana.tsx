import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";
import { useEffect, useState } from "react";
import { useAddStudentMutation, useDeleteStudentMutation, useEditStudentMutation, useGetStudenListQuery } from "../toolkit/nana/nana.service";
import { loadStudentList } from "../toolkit/nana/nanaSlice";
import { INana } from "../toolkit/nana/nana.interface";



const Nana = () => {
    // const [counter,setCounter] = useState(0);
    // const handlerCounter = () => {
    //     setCounter(counter - 1);
    // }
    const [show, setShow] = useState(false)

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const { isError, isLoading, data: studentList, isSuccess: studentListSuccess, refetch } = useGetStudenListQuery(null);
    const [onAddStudent] = useAddStudentMutation();
    const [onEditStudent] = useEditStudentMutation();
    const [onDeleteStudent] = useDeleteStudentMutation();


    useEffect(() => {
        if (studentListSuccess) {
            dispatch(loadStudentList(studentList))
        }
    }, [studentListSuccess])

    if (isLoading) {
        return <p>Loading ...</p>
    }
    if (isError) {
        return <p>Error</p>
    }

    return (
        <div>
            <ul>
                {
                    (studentList as INana[] || []).map(student => {
                        return <li key={student.id}>{student.ten} <button onClick={() => onEditStudent({id:student.id,ten:"Nan",namsinh:1997})}>Sửa</button>
                        <button onClick={() => onDeleteStudent(student)}>xóa</button>
                        </li>
                    })
                }
            </ul>
            {/* {show && <Counter2 />} */}
            <button onClick={() => onAddStudent({ten: 'Thang', namsinh: 1996})}>Add</button>
            <hr />
            <button onClick={() => setShow(true)}>Test cache</button>
            <hr />
            <button onClick={refetch}>Refetch</button>

            {/* <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div> */}
        </div>
    )
}
export default Nana;