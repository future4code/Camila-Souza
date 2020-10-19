import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { MainContainer } from "./AppStyledMainContainer";

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login")
  return (
    <BrowserRouter>
      <Header buttonName={buttonName} setButtonName={setButtonName}/>
      <MainContainer>
        <Router setButtonName={setButtonName} />
      </MainContainer> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
