import React from "react";
import { PostCardContainer, PostTitle } from "./styled";

const PostCard = (props) => {
    return (
        <PostCardContainer onClick={props.onClick}>
            <PostTitle title={props.title}/>
            <p text={props.text}/>
        </PostCardContainer>
    )
}
export default PostCard;