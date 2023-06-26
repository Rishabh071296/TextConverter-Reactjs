import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About'; 
import React, { useState } from 'react';
import Alert from './Alert'; 
 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
   
    <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
               <TextForm showAlert={showAlert} heading="Try TextConverter - word counter, character counter, remove extra spaces" mode={mode}/>
              {/* <About/> */}
          </div>
              
    </> 
  );
}

export default App;