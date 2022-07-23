import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from 'react'



function App() {
  const [showForm,setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer =await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [] )


  //Fetch Tasks
  const fetchTasks = async() =>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }
    // Fetch single task
  const fetchTask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
    }



  const addTask = async(task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(task)})
    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random()*1000)
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
    
  }

  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    console.log("Deleted", id)
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  const toggleReminder =async(id) =>{
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers:{'content-type': 'application/json'},
      body:JSON.stringify(updatedTask)
  })
  const data = await res.json()
    
    setTasks(
      tasks.map((task) => 
        task.id === id ?{
        ...task, reminder: data.reminder } : task
    ))
  }
  const toggleForm = () =>{
    setShowForm(!showForm)
  }

  return (
    <div className="container">
     <Header onFormToggle= {toggleForm} formStatus = {showForm}/>
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
