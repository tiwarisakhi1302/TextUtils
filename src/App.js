import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter, Routes, Route} from "react-router-dom"
//let name="Sakshi";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path="/" element={<div className="container my-3"><TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}></TextForm></div>}/>
      <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
      </Routes>
    </BrowserRouter>
    <p style={{position: "fixed", bottom: 0, right: "7px"}}>Made by <strong>Sakshi Tiwari</strong></p>
    </>
  );
}

export default App;
