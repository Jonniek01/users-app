import React, { useState } from 'react'
import axios from 'axios'

function SelectedUser(id) {
  const [user, setUser]=useState({})

  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res => {
    setUser(res.data)

  })
  return (
    <div>SelectedUser</div>
  )
}

export default SelectedUser