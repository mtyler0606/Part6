import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createAnecdote = async (anecdote) => {
    const response = await axios.post(baseURL, anecdote)
    return response.data
}

const updateAnecdote = async (anecdote) => {
    console.log('PUT', `${baseURL}/${anecdote.id}`, anecdote)
    const response = axios.put(`${baseURL}/${anecdote.id}`, anecdote)
    return (await response).data
}

export default { getAll, createAnecdote, updateAnecdote }