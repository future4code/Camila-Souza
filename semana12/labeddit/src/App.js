import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login")
  return (
    <BrowserRouter>
      <Header buttonName={buttonName} setButtonName={setButtonName}/>
      <Router setButtonName={setButtonName} /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
