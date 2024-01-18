import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Saed', email:'saed@gmail.com'},
    { id: '2', name: 'Saed', email:'saed@gmail.com'}
];


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        addUser:(state, action: PayloadAction<any>)=>{
            state.push(action.payload);
        }
    },
});

export const {addUser} = userSlice.actions 

export const usersReduser = userSlice.reducer