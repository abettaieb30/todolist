import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import './App.css';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Description from './Components/Task';


function App() {
  const [taskList,setTaskList]= useState([{
   
  }])
  const Delete = (e) => {
    e.preventDefault()
    setTaskList([])
}
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={
      <>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <ListTask taskList={taskList} Delete={Delete}/>
      </>
    }/>
    <Route path='/desc/:id' element={<Description taskList={taskList}/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
