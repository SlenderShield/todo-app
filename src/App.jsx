import data from './todo_data.js'
import Task from './component/Task.jsx'
const App = () =>{
  return (
    <div>
    <h2>Todo Applicatoin</h2>
    {data.map((item) => (
      <Task title={item.title} description={item.description} key={item.title}/>
      ))}
    </div>
  )
}
export default App
