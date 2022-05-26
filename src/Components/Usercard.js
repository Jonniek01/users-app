import React, { useState } from 'react'
import SelectedUser from './SelectedUser'


function Usercard() {
    const [id,setId]=useState('')
    const[overlayClass, setOverlayClass]=useState('overlay-none')
  return (
    <div className='user-card'>
        <div className=''>UserCard</div>
        <div className={overlayClass}>
            <SelectedUser id={id}/>
        </div>

    </div>
  )
}

export default Usercard