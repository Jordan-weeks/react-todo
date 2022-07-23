import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'



function App() {
  const [showForm,setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        text: 'this is a test',
        id: 1,
        dueDate: '',
        reminder: true
    },
    {
        text: 'this is another test',
        id: 2,
        dueDate: '',
        reminder: false
    }
  ])
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*1000)
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
    console.log(newTask)
    console.log(tasks)
  }

  const deleteTask = (id) =>{
    console.log("Deleted", id)
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  const toggleReminder =(id) =>{
    console.log('reminded', id)
    setTasks(
      tasks.map((task) => 
        task.id === id ?{
        ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
     <Header title="hello" />
     {showForm && <AddTask onAdd={addTask}/>}
    <Tasks tasks={tasks} onDelete = {deleteTask} reminder= {toggleReminder} />
    </div>
  );
}


// CSS in JS
// const headingStyle = {
//   color: 'purple'
// }
export default App;
