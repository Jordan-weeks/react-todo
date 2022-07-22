import React from 'react'
import { Button } from './Button'

const Header = () => {
    const onClick = ()=> console.log('Clicked')
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color='blue' text='Add' onClick={onClick}/>
        

        
    </header>
  )
}

export default Header