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
        },
        searchStudent: (state, action: PayloadAction<String>) => {
            console.log(state.students);
            const searchTerm = action.payload.toLowerCase();
            state.students = initialState.students.filter(student => student.ten.toLowerCase().includes(searchTerm));
            
            // state.students.unshift(action.payload)
            // const orderExistingIndex = state.students.findIndex(student => student.ten === ac)
        
        }
    },
})

export const { loadStudentList, addNewStudent,searchStudent } = studentSlice.actions;
export default studentSlice.reducer;