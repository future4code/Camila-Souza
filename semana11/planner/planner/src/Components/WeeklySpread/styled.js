import styled from "styled-components";
import { coral, lightCyan, mediumTurquoise } from "../../Constants/colors";

export const SpreadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 5vh 1fr;
    border: 2px solid ${coral};
`
export const WeekDaysContainer = styled.div`
    grid-column: 1/8;
    grid-row: 1/2;
    background-color: ${mediumTurquoise};
    color: ${lightCyan};
`
export const TasksContainer = styled.div`
    grid-column: 1/8;
    grid-row: 2/3;
    background-color: ${lightCyan};
    color: ${mediumTurquoise};
`

