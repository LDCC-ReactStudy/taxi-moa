import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import Main from './components/Main';
import Hello2 from './components/Hello2';
import InstructorApp from './logincomponents/InstructorApp';
import LoginComponent from './logincomponents/LoginComponent';
import LogoutComponent from './logincomponents/LogoutComponent';
import PrivateRoute from './logincomponents/PrivateRoute';
import PublicRoute from './logincomponents/PublicRoute';

function App() {
  
  
  return (
    
    <>
      <Toolbar/>
      <Routes>
        <Route path='/' element={<PrivateRoute><Main /></PrivateRoute>}/>
        <Route path='/about' element={<PrivateRoute><Hello2 /></PrivateRoute>}/>
        <Route path='/logout' element={<PrivateRoute><LogoutComponent /></PrivateRoute>}/>
        <Route path="/login" element={<PublicRoute><LoginComponent /></PublicRoute>}/>
      </Routes>
    </>

  );
  
  

  
  /*
  return (<div className="App">
    <div><InstructorApp/></div>
  </div>);
  */
  
  /*
  return (
    <>
      <Toolbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Hello2 />} />
      </Routes>
    </>
  );
  */
  
}

export default App;