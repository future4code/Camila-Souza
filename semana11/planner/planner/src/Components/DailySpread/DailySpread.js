import React from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/URLs";
import { WeekDay } from "../DailySpread/styled";


function DailySpread(props){
    // const DeleteTask = (id) => {
    //     axios.delete(`${BASE_URL}/${id}`).then(response =>{
    //         console.log(response.data)
    //     })
    // }
    return(
        <WeekDay>
            <div>
                <h3>{props.weekDay}</h3>
            </div>
            <div>
                {props.tasks.map((task)=>{
                    return <p key={task.id}>{task.text}</p>
                } 
                )}
            </div>
        </WeekDay>
    )
}

export default DailySpread;