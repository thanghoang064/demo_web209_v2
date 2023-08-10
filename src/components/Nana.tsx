import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";
import { useEffect, useState } from "react";
import { useAddStudentMutation, useDeleteStudentMutation, useEditStudentMutation, useGetStudenListQuery } from "../toolkit/nana/nana.service";
import { addNewStudent, detailStudent, editStudent, loadStudentList, searchStudent1 } from "../toolkit/nana/nanaSlice";
import { INana } from "../toolkit/nana/nana.interface";
import { searchStudent } from "../toolkit/student/studentSlice";



const Nana = () => {
    // const [counter,setCounter] = useState(0);
    // const handlerCounter = () => {
    //     setCounter(counter - 1);
    // }
    const [show, setShow] = useState(false)
    const [idd,setIdd] = useState<any>();
    const [search,setSearch] = useState<string>("");
    const nanaState = useSelector((state: RootState) => state.nana.nanas);
    const detailNanaState = useSelector((state: RootState) => state.nana.nana);
    const dispatch = useDispatch()
    const [ten,setTen] = useState<string>("");
    const [namSinh,setNamSinh] = useState<number>(0);
    const { isError, isLoading, data: studentList, isSuccess: studentListSuccess, refetch } = useGetStudenListQuery(null);
    const [onAddStudent,result] = useAddStudentMutation();
    const [onEditStudent] = useEditStudentMutation();
    const [onDeleteStudent] = useDeleteStudentMutation();

    const searchInput = () => {
        // dispatch(decreaseCountAction(1));
        // searchStudent1
        dispatch(searchStudent1(
            {searchTerm:search,nanas: studentList}
        ));
    }
    const handleDetailSV = (sv: INana) => {
        setIdd(sv.id);
        setTen(sv.ten);
        setNamSinh(sv.namsinh);
        // dispatch(detailStudent(sv));
    }
    const addStudent = () => {
        const newStudent = { ten: ten, namsinh: namSinh };
         onAddStudent(newStudent)
        .then(() => {
            // Nếu thêm sinh viên thành công, cập nhật danh sách studentList bằng cách refetch
            // refetch();
            dispatch(addNewStudent(newStudent));
            // dispatch(loadStudentList(studentList));
        })
        .catch(error => {
            console.error("Error adding student:", error);
        });
    }
    const handleEditStudent = (sv :INana) => {
        const newStudent = {id :sv.id, ten: sv.ten, namsinh: sv.namsinh };
         onEditStudent(newStudent)
        .then(() => {
            // Nếu thêm sinh viên thành công, cập nhật danh sách studentList bằng cách refetch
            // refetch();
            dispatch(editStudent(newStudent));
            // dispatch(loadStudentList(studentList));
        })
        .catch(error => {
            console.error("Error adding student:", error);
        });
    }
    useEffect(() => {
        if (studentListSuccess) {
            // console.log(result.data);
            // dispatch(addNewStudent({ten:"thắng",namsinh:1997}));
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
            Name<input type="text" onChange={(event) => setSearch(event.target.value)} />

            <button onClick={searchInput}>Tìm kiếm</button>
            <ul>
                {
                    (nanaState as INana[] || []).map(student => {
                        return <li key={student.id}>{student.ten} <button onClick={event=> handleDetailSV(student)}>Sửa</button>
                        <button onClick={() => onDeleteStudent(student)}>xóa</button>
                        </li>
                    })
                }
            </ul>
            {/* {show && <Counter2 />} */}
            Tên<input type="text" onChange={(event) => setTen(event.target.value)} value={ten}  /><br></br>
            Năm sinh <input type="text" onChange={(event) => setNamSinh(+event.target.value)} value={namSinh} /><br></br>
            <button onClick={addStudent}>Add</button>
            <button onClick={event => handleEditStudent({id: idd,ten : ten,namsinh : namSinh})}>Edit</button>
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