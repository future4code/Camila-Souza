import styled from "styled-components";
import { BackgroundColor, PostContainerBorder, MainPostFontColor, BackgroundColorMedium } from "../../constants/colors";

export const FeedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PostCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 350px;
    background-color: ${BackgroundColor};
    color: ${MainPostFontColor};
    border: 1px solid ${PostContainerBorder};
    border-radius: 5px;
    padding: 10px;
`
export const PostTitle = styled.h3`
    font-variant-caps: all-small-caps;
    background-color: ${BackgroundColorMedium};
    border-bottom: 1px solid ${PostContainerBorder};
`
export const CreatePostContainer = styled.form`
    
`

