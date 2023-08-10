import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INana, INanaState, SearchPayload } from "./nana.interface";


const initialState: INanaState = {
    nanas: [],
    nana : {ten: "",namsinh : 0}
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
            // state.nanas.unshift(action.payload)
            state.nanas.push(action.payload);
        },
        detailStudent: (state, action: PayloadAction<INana>) => {
            // state.nanas.unshift(action.payload)
            state.nana = {ten :action.payload.ten,namsinh:action.payload.namsinh};
        },
        editStudent: (state, action: PayloadAction<INana>) => {
            // state.nanas.unshift(action.payload)
            // state.nana = {ten :action.payload.ten,namsinh:action.payload.namsinh};
            const orderExistingIndex = state.nanas.findIndex(student => student.id === action.payload.id);
            if (orderExistingIndex != -1) {
                state.nanas[orderExistingIndex] = {
                    ten : action.payload.ten,
                    namsinh : action.payload.namsinh
                }
            }
        },
        searchStudent1: (state, action: PayloadAction<SearchPayload>) => {
            
        //  console.log(initialState.nanas);
        // state.nanas.map(student => 

        // )
          
            const searchTerm = action.payload.searchTerm;
            const filteredNanas = action.payload.nanas.filter(student => student.ten && student.ten.toLowerCase().includes(searchTerm) );
            state.nanas = filteredNanas;
          
            //  state.nanas = filteredNanas;
            // state.nanas.filter(student => student.ten.toLowerCase().includes(searchTerm));
            
            // state.students.unshift(action.payload)
            // const orderExistingIndex = state.students.findIndex(student => student.ten === ac)
        
        }
    },
})

export const { loadStudentList, addNewStudent,searchStudent1,detailStudent,editStudent } = nanaSlice.actions;
export default nanaSlice.reducer;