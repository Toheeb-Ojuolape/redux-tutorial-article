import React from 'react'
import { useSelector } from "react-redux"

function User() {
    const users = useSelector((state) => state.counter.value)
  return (
    <div>
        {users.map((user,i)=>(
            <div key={i}>
                <p>{user.name.title} {user.name.first} {user.name.last}</p>
                <img src={user.picture.large} alt="img"/>
            </div>
        ))}
    </div>
  )
}

export default User

