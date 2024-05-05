import React from "react";
import './App.css';
import LoginForm from './components/login-form';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginForm />
    </div>
  );
}

export default App;
