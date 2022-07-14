import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './Home';

import SignIn from './components/SignIn';
import Login from './components/Login';
import AuthContextProvider from './context/AuthContext';

function App() {
  
  const { loggedIn } = useContext(AuthContextProvider)


  return (
    
      <div className="app">
        <Header />

        <Routes>
        {loggedIn === false &&  (
            <>
            <Route path='/' element={<Login />} />
            <Route path='/signin' element={<SignIn />} />
            </>
          )}
          <Route path='/home' element={<Home/>}/>
        </Routes>
        
      </div>
  );
}

export default App;
