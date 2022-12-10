import './App.css';
import Navbar from './Componennts/Navbar';
import TextForm from './Componennts/TextForm';
// import About from './Componennts/About';
import React , { useState } from 'react';


function App() {
const[mode,setMode]= useState('light');


const toggleMode =() =>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
      }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
   
  }
 
}

  return (
  <>
  
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />

<div className="container">
<TextForm heading="Enter the Text to Analyase"  mode={mode}/>
{/* <About/> */}
</div>

  </>
  );
}

export default App;
