import React from 'react'
import axios from 'axios'

export const USERS= axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
  const USERS = res.data;
  console.log(USERS)

  return USERS
})

export const getUser= (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res => {
  const USER = res.data;
  return USER
})



