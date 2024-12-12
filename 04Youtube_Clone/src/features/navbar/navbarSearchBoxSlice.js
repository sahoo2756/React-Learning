import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navbarSearchBoxValue: ""
}

const navbarSearchBoxSlice = createSlice({
    name: "navbarSeachBox",
    initialState,
    reducers: {
        updateNavbarSearchBoxValue: (prevState, action) => {
            let newValue = action?.payload.search_query || undefined
            if (newValue === undefined) {
                return;
            }
            prevState.navbarSearchBoxValue = newValue;
            return;
        },
       
    }

});

export const { updateNavbarSearchBoxValue } = navbarSearchBoxSlice.actions;
const navbarSearchBoxReducer = navbarSearchBoxSlice.reducer


export default navbarSearchBoxReducer

