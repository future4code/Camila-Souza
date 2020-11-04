import styled from "styled-components";

export const LoadingContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-top: 30vh;
    padding-bottom: 30vh;
`

export const LoadingGif = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    max-width: 150px;
`