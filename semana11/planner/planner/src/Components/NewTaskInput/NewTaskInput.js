import React, { useState } from "react";
import { NewTaksContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../Constants/URLs";


const useInputTask = (initialValue)=>{
    const [taskValue, setTaskValue] = useState(initialValue);
    const onChange = (event) =>{
        setTaskValue(event.target.value)
    }
    return [taskValue, onChange];
}

function NewTaskForm(){
    const [newTask, setNewTask] = useInputTask("");
    const [newTaskDay, setNewTaskDay] = useInputTask("");
    const onSubmitTask = (event)=>{
        event.preventDefault()
        const body = {
            "text": newTask,
	        "day": newTaskDay,
        }
        axios.post(`${BASE_URL}`, body).then((response)=>{
            console.log(response)
        })
    }
    return(
        <NewTaksContainer>
            <form onSubmit={onSubmitTask}>
                <label id="newTask">Nova tarefa</label>
                <input type="text" value={newTask} onChange={setNewTask}></input>
                <select value={newTaskDay} onChange={setNewTaskDay}>
                    <option>Dias da semana</option>
                    <option value={"mon"}>Segunda-feira</option>
                    <option value={"tue"}>Terça-feira</option>
                    <option value={"wed"}>Quarta-feira</option>
                    <option value={"thu"}>Quinta-feira</option>
                    <option value={"fri"}>Sexta-feira</option>
                    <option value={"sat"}>Sábado</option>
                    <option value={"sun"}>Domingo</option>
                </select>
                <button>Adicionar</button>
            </form>
        </NewTaksContainer>
    )
}
export default NewTaskForm;