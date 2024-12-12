import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamburgerIconClicked : false
}


const humburgerSlice = createSlice({
    name : "humburgerIconState",
    initialState ,
    reducers : {
        toggleHumburgerIconBooleanValue : (prevState) => {
            prevState.isHamburgerIconClicked = !(prevState.isHamburgerIconClicked)
        }
    }
});

const {toggleHumburgerIconBooleanValue} = humburgerSlice.actions;
const humburgerReducer = humburgerSlice.reducer;

export {toggleHumburgerIconBooleanValue}

export default humburgerReducer