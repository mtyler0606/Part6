import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {createAnecdote, getAnecdotes, updateAnecdote } from './request'

const App = () => {
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: /*(newAnecdote)*/ () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
      /*
      const anecdotes = queryClient.getQueryData({ queryKey: ['anecdotes']})
      queryClient.setQueryData({ queryKey: ['anecdotes']}, anecdotes.concat(newAnecdote))
      */
    }
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false
  })

  console.log(JSON.parse(JSON.stringify(result)))

  const handleVote = (anecdote) => {
    console.log('vote')
  }

const anecdotes = result.isLoading ? []: result.data

if(result.isError){
  return <p>anecdote service not available due to problems in server</p>
}
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm newAnecdoteMutation={newAnecdoteMutation}/>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
