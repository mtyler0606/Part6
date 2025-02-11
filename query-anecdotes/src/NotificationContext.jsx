import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
    switch(action.type){
        case "NEW_ANECDOTE":
            return `added ${action.content}`
        case "VOTE":
            return `voted on ${action.content}`
        case "RESET":
            return ""
        case "ERROR":
            return "must have length 5 or more"
        default:
            return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext