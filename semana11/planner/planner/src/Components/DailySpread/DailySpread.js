import React from "react";
import { WeekDay } from "../DailySpread/styled";

function DailySpread(props){
    return(
        <WeekDay>
            <div>
                <h3>{props.weekDay}</h3>
            </div>
            <div>
                <ul>
                    {props.tasks.map((task)=>{
                        return <li key={task.id}>{task.text}</li>
                    })}
                </ul>
            </div>
        </WeekDay>
    )
}

export default DailySpread;