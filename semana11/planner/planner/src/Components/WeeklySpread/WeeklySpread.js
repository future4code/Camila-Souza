import React, { useEffect, useState } from "react";
import DailySpread from "../DailySpread/DailySpread";
import { SpreadContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../Constants/URLs"

function WeeklySpread(){
    const [tasks, setTasks] = useState([])
    const getTask = ()=>{
        axios.get(`${BASE_URL}`).then((response)=>{
            setTasks(response.data);
        });
    }

    useEffect(()=>{
        getTask();
    }, []);

    const monTasks = tasks.filter((task)=>{
        return task.day === "mon"
    });
    const tueTasks = tasks.filter((task)=>{
        return task.day === "tue"
    });
    const wedTasks = tasks.filter((task)=>{
        return task.day === "wed"
    });
    const thuTasks = tasks.filter((task)=>{
        return task.day === "thu"
    });
    const friTasks = tasks.filter((task)=>{
        return task.day === "fri"
    });
    const satTasks = tasks.filter((task)=>{
        return task.day === "sat"
    });
    const sunTasks = tasks.filter((task)=>{
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