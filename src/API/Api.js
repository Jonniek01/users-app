import React from 'react'
import axios from 'axios'


export const getUser= (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res => {
  const USER = res.data;
  return USER
})



