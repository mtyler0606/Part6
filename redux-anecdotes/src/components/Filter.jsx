import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const anecdotes = useSelector(state => state.filter)
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        dispatch(filterChange(event.target.value))
      // input-field value is in variable event.target.value
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input type='text' onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter