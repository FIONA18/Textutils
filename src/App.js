
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert]= useState(null)
  const ShowAlert=(message, type)=>
  {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>
      {
        setAlert(null)
      },
      2000

      )
  }
  const toogleMode=()=>
  {
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor ='#18185a'
      ShowAlert("Dark Mode has been enabled", "success")

    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor ='white'
      ShowAlert("Light Mode has been enabled", "success")
    }
      
  }
 
  return (
    <>
    <Router>
    <Navbar title="My TextUtils" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
      {/* <TextForm heading="Enter your Text" mode={mode} ShowAlert={ShowAlert}/> */}
      <Routes>
      <Route
      path="/"
      element={<TextForm heading="Enter your Text" mode={mode} ShowAlert={ShowAlert}/>}
      />

      <Route
      path="/about"
      element={<About />}
      />
      </Routes>

      
      {/* <About/> */}
      </div>
    </Router>
     
    </>
  );
}

export default App;
