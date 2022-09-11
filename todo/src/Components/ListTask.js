import React from 'react'
import { Link } from 'react-router-dom'

const ListTask = ({Delete,taskList}) => {
 
  return (
    <div>
   {taskList.map((task)=>(
    <div>
        <Link to ={`/desc/${task.id}`}>{task.title}</Link>
        
    </div>
   ))}
   <button className='delete' onClick={Delete}>DELETE ALL</button>
    </div>
  )
}

export default ListTask
