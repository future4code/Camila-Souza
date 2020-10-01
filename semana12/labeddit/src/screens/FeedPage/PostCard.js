import React from "react";
import { PostCardContainer, PostTitleContainer, PostTextContainer, PostCredit, PostTimePassed, PostToggle } from "./styled";
import { timePassed } from "../../constants/timePassed";
import useToggle from "../../hooks/useToggle";

const PostCard = (props) => {
    useToggle()
    return (
        <PostCardContainer onClick={props.onClick}>
            <PostTitleContainer>{props.title}</PostTitleContainer>
            <PostTextContainer>{props.text}</PostTextContainer>
            <PostCredit>{props.username}</PostCredit>
            <PostTimePassed>{timePassed(props.createdAt)}</PostTimePassed>
            <PostToggle></PostToggle>
        </PostCardContainer>
    )
}
export default PostCard;