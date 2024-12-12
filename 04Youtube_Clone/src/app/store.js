import humburgerReducer from "../features/humburger/humburgerSlice"
import navbarSearchBoxReducer from "../features/navbar/navbarSearchBoxSlice.js"
import videoCollectionReducer from "../features/videoList/videoCollectionSlice.js"
import machineInternetInfoReducer from "../features/machineInternet/clientMachineInternet.js";
import problemOnAppReducer from "../features/problemOnApp/problemOnAppSlice.js";
import userInfoReducer from "../features/userInfo/userInfoSlice.js";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        humburger : humburgerReducer,
        navbarSearchBox : navbarSearchBoxReducer,
        videoCollection : videoCollectionReducer,
        machineInternetInfo : machineInternetInfoReducer,
        problemOnApp : problemOnAppReducer,
        userInfo : userInfoReducer
    },
});



export { store }