import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {createAnecdote, getAnecdotes, updateAnecdote } from './request'
import { useNotificationDispatch } from './NotificationContext'
const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})

    }
  })
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
    }
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false
  })

 // console.log(JSON.parse(JSON.stringify(result)))

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
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
            <button onClick={() => {handleVote(anecdote); dispatch({type: "VOTE", content: anecdote.content}); setTimeout(() => {dispatch({type: "RESET"})}, 3000)}}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
