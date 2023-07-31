import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit";
import { decrement, increment } from "../toolkit/counter/counterSlice";
import { useGetStudenListQuery } from "../toolkit/student/student.service";
import { IStudent } from "../toolkit/student/student.interface";
import { loadStudentList } from "../toolkit/student/studentSlice";

const Counter2 = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const { isError, isLoading, data: studentList, isSuccess: studentListSuccess, refetch } = useGetStudenListQuery(null);


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
            <h2>Counter 2</h2>

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
export default Counter2;