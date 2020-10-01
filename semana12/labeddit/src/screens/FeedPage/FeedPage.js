import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { goToPostsFeed } from '../../routes/Coordinator';
import PostCard from './PostCard';
import { FeedContainer } from './styled';
import Loading from "../../components/Loading/Loading";

const FeedPage = ()=> {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], '/posts')
  
  const renderPosts = ()=>{
    posts.map((item)=>{
    return (
        <PostCard text= {item.text} title={item.title} key={item.postid} onClick={()=> goToPostsFeed(history, item.postid)}/>
      );
    })}
  return (
    <FeedContainer>
      {posts.length > 0 ? renderPosts() : <Loading />}
    </FeedContainer>
  )
  }


export default FeedPage;
