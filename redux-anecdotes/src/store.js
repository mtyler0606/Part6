import filterReducer from './reducers/filterReducer'
import anecdoteReducer, {appendAnecdote, setAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from "@reduxjs/toolkit"
import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })

//anecdoteService.getAll().then(anecdotes => store.dispatch(setAnecdotes(anecdotes)))

export default store