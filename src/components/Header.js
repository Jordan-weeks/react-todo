import React from 'react'
import { Button } from './Button'

const Header = ({onFormToggle, formStatus}) => {
    // const onClick = ()=> useStateconsole.log('Clicked')
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        { formStatus ? <Button color='darkred' text='Close' onClick={onFormToggle}/> :
        <Button color='darkblue' text='Add' onClick={onFormToggle}/>
        }
        

        
    </header>
  )
}

export default Header