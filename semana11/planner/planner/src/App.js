import React, { useState }  from 'react';
import axios from "axios";
import { BASE_URL } from "./Constants/URLs";
import NewTaskForm from './Components/NewTaskInput/NewTaskInput';
// import PlannerPage from './Screens/PlannerPage/plannerPage';
import WeeklySpread from './Components/WeeklySpread/WeeklySpread';


function App() {
  const [tasks, setTasks] = useState([])
  const getTask = ()=>{
  axios.get(`${BASE_URL}`).then((response)=>{
    setTasks(response.data);})}

  return (
    <div>
      <NewTaskForm updateTask={getTask} setTasks={setTasks}/>
      <WeeklySpread getTask={getTask} tasks={tasks}/>
    </div>
  );
}

export default App;