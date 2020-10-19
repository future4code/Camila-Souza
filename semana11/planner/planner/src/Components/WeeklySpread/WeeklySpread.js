import React, { useEffect, useState } from "react";
import DailySpread from "../DailySpread/DailySpread";
import { SpreadContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../Constants/URLs"

function WeeklySpread(props){
  
    useEffect(()=>{
        props.getTask();
    }, []);

    const monTasks = props.tasks.filter((task)=>{
        return task.day === "mon"
    });
    const tueTasks = props.tasks.filter((task)=>{
        return task.day === "tue"
    });
    const wedTasks = props.tasks.filter((task)=>{
        return task.day === "wed"
    });
    const thuTasks = props.tasks.filter((task)=>{
        return task.day === "thu"
    });
    const friTasks = props.tasks.filter((task)=>{
        return task.day === "fri"
    });
    const satTasks = props.tasks.filter((task)=>{
        return task.day === "sat"
    });
    const sunTasks = props.tasks.filter((task)=>{
        return task.day === "sun"
    });

    return(
        <SpreadContainer>
            <DailySpread weekDay={"Segunda-Feira"} tasks={monTasks}/>
            <DailySpread weekDay={"Terça-Feira"} tasks={tueTasks}/>
            <DailySpread weekDay={"Quarta-Feira"} tasks={wedTasks}/>
            <DailySpread weekDay={"Quinta-Feira"} tasks={thuTasks}/>
            <DailySpread weekDay={"Sexta-Feira"} tasks={friTasks}/>
            <DailySpread weekDay={"Sábado"} tasks={satTasks}/>
            <DailySpread weekDay={"Domingo"} tasks={sunTasks}/>
        </SpreadContainer>
    )
}
export default WeeklySpread;