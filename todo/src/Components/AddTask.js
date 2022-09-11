
import { useState} from 'react'

const AddTask = ({setTaskList,taskList}) => {
 
    const [input, setInput]= useState({});
    const handleTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList,{...input,id:Math.random()}])
   }
  return (
    <div>
     < form >
     <input type='text' name='title' placeholder='title' onChange={e=>setInput({...input,[e.target.name]:e.target.value})} />
    < input type ='text'  name ='desc' placeholder='descripion' onChange={e=>setInput({...input,[e.target.name]:e.target.value})} />
    < input type ='checkbox'  name ='done'onChange={e=>setInput({...input,[e.target.name]:e.target.value})} />
    < button onClick={handleTask } > Add task </ button >
    </form >                   
                      
 
    </div>
    )
  
}

export default AddTask
