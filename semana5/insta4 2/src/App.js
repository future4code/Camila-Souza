import React from 'react';
import Post from './components/Post/Post';
import Counter from './components/IconeComContador/IconeComContador';
import styled from 'styled-components';
import Comments from './components/SecaoComentario/SecaoComentario';

const AppContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const UserPic = styled.img `
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPic = styled.img`
  width: 100%;
`
const PostContainer = styled.section`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const PostFooter = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Raven",
        fotoUsuario: "https://picsum.photos/50/49",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Starfire",
        fotoUsuario: "https://picsum.photos/50/48",
        fotoPost: "https://picsum.photos/200/152"
      }
    ]
  };
  render(){
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <PostContainer>
          <PostHeader>
            <UserPic src={post.fotoUsuario}/>
            <p>{post.nomeUsuario}</p> 
          </PostHeader>
          <PostPic src={post.fotoPost}/>
          <PostFooter ></PostFooter>
        </PostContainer>
      );
    })
  return (
    <AppContainer>{listaDePosts}</AppContainer>
  );
}}
export default App;
