import { createSlice } from "@reduxjs/toolkit";

// client machine
const machineInternetInfoSlice = createSlice({
    name : "clientMachineInternetConnectionInfo" , 
    initialState : {
        isMachineOnline : null
        // don't know that's why null
    },
    reducers : {
        setMachineOnline : (state , action) => {
            state.isMachineOnline = true
        },
        setMachineOffline : (state) => {
            state.isMachineOnline = false
        }
    }
});


export const {setMachineOffline , setMachineOnline} = machineInternetInfoSlice.actions

const machineInternetInfoReducer = machineInternetInfoSlice.reducer

export default machineInternetInfoReducer