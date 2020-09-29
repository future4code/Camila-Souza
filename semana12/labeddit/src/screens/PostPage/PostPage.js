import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { PostsContainer } from "./styled";

const PostPage = ()=> {
  useProtectedPage()
  return (
    <PostsContainer>
        <p>PostPage</p>
    </PostsContainer>
  );
}

export default PostPage;
