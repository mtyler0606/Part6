import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: "",
        style: {
            display: 'none'
          }
    },
    reducers: {
        setMessage(state,action){
            return {
                message: `you voted ${action.payload}`,
                style: {
                    border: 'solid',
                    padding: 10,
                    borderWidth: 1
                  }
        }
        },
        clearMessage(state, action){
            return {
                message: "",
                style: {
                    display: 'none'
                  }
            }
        }

    }
})

export const {setMessage, clearMessage} = notificationSlice.actions
export default notificationSlice.reducer