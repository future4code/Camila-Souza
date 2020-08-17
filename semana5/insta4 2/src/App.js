import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
        <div className={'post-container'}>
          <div className={'post-header'}>
            <img src={post.fotoUsuario}/>
            <p>{post.nomeUsuario}</p> 
          </div>
          <img src={post.fotoPost}/>
        </div>
      );
    })
  return (
    <div>{listaDePosts}</div>
  );
}}
export default App;
