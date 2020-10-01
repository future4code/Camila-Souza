import styled from "styled-components";
import { BackgroundColor, PostContainerBorder, MainPostFontColor, BackgroundColorMedium } from "../../constants/colors";

export const FeedContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 2vh;
    column-gap: 2vw;
    width: 80vw;
`

export const PostCardContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
   
    align-self: center;
    justify-self: center;
    background-color: ${BackgroundColor};
    color: ${MainPostFontColor};
    border: 1px solid ${PostContainerBorder};
    border-radius: 5px;
    height: 100px;
    width: 250px;
`
export const PostTitleContainer = styled.div`
    grid-column: 1/4;
    grid-row: 1/2;
    font-variant-caps: all-small-caps;
    font-size: 1em;
    align-self: center;
    text-align: center;
    padding: 2px;
    background-color: ${BackgroundColorMedium};
    border: 1px solid ${PostContainerBorder};
`
export const PostTextContainer = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    font-size: 0.7em;
    padding: 2px;
    overflow: hidden;
`
export const PostCredit = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
    font-size: 0.7em;
    font-variant-caps: all-small-caps;
    padding: 2px;
`
export const PostTimePassed = styled.div`
    grid-column: 2/3;
    grid-row: 3/4;
    font-size: 0.5em;
    padding: 2px;
`
export const PostToggle = styled.div`
    grid-column: 3/4;
    grid-row: 3/4;
    padding: 2px;
`

export const CreatePostContainer = styled.form`
    
`

