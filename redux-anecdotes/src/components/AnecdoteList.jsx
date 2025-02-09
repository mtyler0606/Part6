import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch()
    
    
    return (
        <>
              {[...anecdotes].filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort((a,b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                  <div>
                    {anecdote.content}
                  </div>
                  <div>
                    has {anecdote.votes}
                    <button onClick={() => {dispatch(vote(anecdote)); dispatch(setMessage(anecdote.content)); setTimeout(() => {dispatch(clearMessage())},5000)}}>vote</button>
                  </div>
                </div>
              )}
        </>
    )
}
export default AnecdoteList