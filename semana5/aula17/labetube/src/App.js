import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import home from "./images/home.png"
// import library from "./images/library.png"
// import search from "./images/Screen Shot 2020-08-10 at 14.50.31.png"
// import subscriptions from "./images/subscriptions.png"
// import trending from "./images/trending.png"
// import yuverm from "./images/yuvermelho.png"
// As imagens não funcionaram do jeito que imaginei

function App() {
    const titulo = "Título do vídeo"

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido")
    }
    function alerta() {
      alert("Página em construção")
    
    }
  return (
    <div>
       <div className="tela-inteira">
        <header>
            <h1 onMouseOver={alerta}>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
                {/* <img src="search" alt="" /> */}
        </header>

        <main>
            <nav className="menu-vertical">
                <ul onMouseOver={alerta}>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
