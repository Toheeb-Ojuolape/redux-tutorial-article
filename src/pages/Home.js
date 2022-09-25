import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUsers } from "./../store/user"
import { useNavigate } from 'react-router'


function Home() {
  const users = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  const history = useNavigate()

  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  const gotonextpage = () =>{
    history('/users')
  }

  return (
    <div>
      <div>
        {/* {count} */}
        {users.map((user,i)=>(
            <div key={i}>
                <p>{user.name.title} {user.name.first} {user.name.last}</p>
                <img src={user.picture.large} alt="img"/>
            </div>
        ))}
        <button onClick={()=>gotonextpage()}>Hello Governor</button>
      </div>
    </div>
  )
}


export default Home

