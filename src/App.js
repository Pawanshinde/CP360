import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  const[loggedState, setLoggedState]=useState("")

  const onLoggedin =(param) =>{
    const dta= param
    console.log(param, "from parent")
    console.log(dta, "from parent")
    setLoggedState(dta) 
    

  }
  return (
    <div className="App">
    
      
        <Routes>
          <Route path='/' element={<Login onLogged={onLoggedin}></Login>}/>
          {loggedState &&<Route path='home' element ={<Home></Home>} />}
        </Routes>
        {loggedState}
    </div>
  );
}

export default App;
