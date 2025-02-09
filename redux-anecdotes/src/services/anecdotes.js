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

export default { getAll, createAnecdote }