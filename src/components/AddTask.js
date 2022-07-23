import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const taskSubmitted = (e) =>{
        e.preventDefault()
        if(!text){
            alert("please add a task")
            return}
        onAdd({text,dueDate,reminder})

        setText('')
        setDueDate('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={taskSubmitted}>
        <div className='form-control'>
            <label htmlFor="">Task</label>
            <input type="text" placeholder='Add Task'
             value={text} onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="">Due by</label>
            <input type="date"
             value={dueDate} onChange={(e) => setDueDate(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" checked={reminder}
            value={reminder} onChange={(e) => setReminder(e.target.checked)}
            />
        <input className='btn btn-block' type="submit" value='Save Task' />
        </div>
    </form>
  )
}

export default AddTask