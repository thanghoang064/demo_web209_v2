import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStudentState, IStudent } from "./student.interface";

const initialState: IStudentState = {
    students: []
}

const studentSlice = createSlice({
    name: 'student',
    initialState: initialState,
    reducers: {
        loadStudentList: (state, action: PayloadAction<IStudent[]>) => {
                state.students = action.payload
                console.log('state.students', state.students)
            },
        addNewStudent: (state, action: PayloadAction<IStudent>) => {
            state.students.unshift(action.payload)
        }
    },
})

export const { loadStudentList, addNewStudent } = studentSlice.actions;
export default studentSlice.reducer;