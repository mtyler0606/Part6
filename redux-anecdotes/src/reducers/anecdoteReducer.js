import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [], 
  reducers: {
    /*
    createAnecdote(state, action){
      const newAnecdote = asObject(action.payload)
      state.push(newAnecdote)
      anecdoteService.createAnecdote(newAnecdote)
    },
    
    vote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    */
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    },
    updateAnecdote(state, action){
      const changedAnecdote = action.payload
      const id = changedAnecdote.id
      return state.map(a => a.id !== id ? a : changedAnecdote)
    }
  }  
})

export const initializeAnecedotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(asObject(anecdote))
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const vote = anecdote => {
  return async dispatch => {
    console.log(anecdote)
    const changedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
      }
    const response = await anecdoteService.updateAnecdote(changedAnecdote)
    dispatch(updateAnecdote(response))
  }
}

export const { appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

export default anecdoteSlice.reducer