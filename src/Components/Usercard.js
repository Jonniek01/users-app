import React, { useEffect, useState } from 'react'
import SelectedUser from './SelectedUser'
import axios from 'axios';


function Usercard() {
    const [id,setId]=useState('');
    const[overlayClass, setOverlayClass]=useState('overlay-none');
    const [users, setUsers]=useState([])
  
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
              setUsers(res.data)
        
            })
        
    



    
      
    

    return (
        <div className="content">

      
           {
           users.map(
                (item)=>{
                return <div className='user-card' key={item.id} onClick={()=>{setOverlayClass("overlay-show")}}>
                            <div className='user-name' >
                                
                                <p className='p1'>User name: </p>
                                <p className=' u-name'>{item.username}</p>
                            </div>
                            <div className='name'>
                                
                                <p className='p1'>Name: </p>
                                <p>{item.name}</p>
                            </div>
                            <div className='id'>
                                
                                <p className='p1'>ID: </p>
                                <p>{item.id}</p>
                            </div>
                            <div className='email'>
                                
                                <p className='p1'>Email: </p>
                                <p>{item.email}</p>
                            </div>

                    


          </div>
      }
  )
  }

<div className={overlayClass}>
                        <SelectedUser id={id}/>
                            </div>
  </div>

  )
}

export default Usercard