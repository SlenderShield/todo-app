import data from './todo_data.js'
import Task from './component/Task.jsx'
const App = () =>{

  const addNote = (event) => {
    event.preventDefault()
    console.log('button')
  }
  return (
    <div>
    <h2>Todo Applicatoin</h2>
    <ul>
    {data.map((item) => (
      <Task description={item.description} key={item.id}/>
      ))}
      </ul>
      <form onSubmit={addNote}>
        <input/>
        <button type="submit">Save</button>
        </form>
    </div>
  )
}
export default App
