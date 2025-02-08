import { createSlice } from "@reduxjs/toolkit"

const notificatinSlice = createSlice({
    name: 'notification',
    initialState: 'none',
    reducers: {
        defaultReducer(state,action){
            return state
        }
    }
})
export default notificatinSlice.reducer