import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, reminder}) => {
  return (
    <div className={(task.reminder ? 'task reminder' : 'task' )} onDoubleClick={() => reminder(task.id)}>
        <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer' }} onClick={()=> onDelete(task.id)} /> </h3>
        <p>{task.dueDate}</p>

    </div>
  )
}

export default Task