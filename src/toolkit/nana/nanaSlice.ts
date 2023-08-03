import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INana, INanaState } from "./nana.interface";


const initialState: INanaState = {
    nanas: []
}

const nanaSlice = createSlice({
    name: 'ddddddddd',
    initialState: initialState,
    reducers: {
        loadStudentList: (state, action: PayloadAction<INana[]>) => {
                state.nanas = action.payload
                console.log('state.students', state.nanas)
            },
        addNewStudent: (state, action: PayloadAction<INana>) => {
            state.nanas.unshift(action.payload)
        }
    },
})

export const { loadStudentList, addNewStudent } = nanaSlice.actions;
export default nanaSlice.reducer;