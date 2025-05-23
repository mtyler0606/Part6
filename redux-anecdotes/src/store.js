import filterReducer from './reducers/filterReducer'
import anecdoteReducer, {appendAnecdote, setAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })


export default store