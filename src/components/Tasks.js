import React from 'react'
import Task from './Task'
export const Tasks = ({tasks}) => {
  return (
    <>
        {tasks.map( (task) => (
           <Task key={tasks.id} task={task}/>
        ))}
    </>
    
  )
}
export default Tasks
