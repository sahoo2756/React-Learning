import { createSlice } from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name : "SigninUser Info",
    initialState : {
        isUserLoggedIn : false,
        userAccountInfo : {}
    },
    reducers : {
        logOutUser : () => {}
    }
})


const userInfoReducer = userInfoSlice.reducer

export default userInfoReducer