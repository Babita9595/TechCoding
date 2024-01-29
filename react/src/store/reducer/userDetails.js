import { createSlice } from "@reduxjs/toolkit";

const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null
console.log(userDetails)

//reducer function here with initial state
export const UserDetailsReducer = createSlice({
    name: 'Shared',
    initialState: { userDetails: userDetails ? userDetails : null }
    // userDetails ? {
    //     userDetails: userDetails
    // } :
    //     {
    //         userDetails: null
    //     }

    ,
    reducers: {
        LOGIN: (state, action) => {
            // state = {
            //     ...state,
            //     // userDetails: action.payload
            // }
            // state.userDetails = action.payload;
            // return state;
            state.userDetails = action.payload;
            console.log(state.userDetails)
            console.log(state, action)
        },
        LOGOUT: (state) => {
            // state = {
            //     ...state,
            //     userDetails: null
            // }
            state.userDetails = null

            return state;
        },
    },
})

export const { LOGIN, LOGOUT } = UserDetailsReducer.actions
export default UserDetailsReducer.reducer
