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

export const setAndClearMessage = (message, time) => {
    return async dispatch => {
        dispatch(setMessage(message))
        setTimeout(() => {dispatch(clearMessage())}, time * 1000)
    }
}

export const {setMessage, clearMessage} = notificationSlice.actions
export default notificationSlice.reducer