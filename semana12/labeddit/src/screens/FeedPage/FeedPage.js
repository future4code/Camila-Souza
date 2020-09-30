import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { FeedContainer } from './styled';

const FeedPage = ()=> {
  useProtectedPage()
  return (
    <FeedContainer>
        {/* <PostCard /> */}
    </FeedContainer>
  );
}

export default FeedPage;
