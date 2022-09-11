import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = ({taskList}) => {
    const {id}=useParams();
    const task=taskList.find((tk)=>tk.id === +id);
  return (
    <><Link to ="/">Home</Link>
    
    
    <div className='task'>
    <h2> ID: <br />{task.id}</h2>  
    <p> Description: <br />{task.desc}</p>
     <h3>X/√: <br />{task.done}</h3> 
    </div>
      </>
  )
}

export default Description
