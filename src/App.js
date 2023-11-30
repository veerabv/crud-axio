import './App.css';
import React from 'react';
import Users from './components/Users';
import { Route,Routes} from 'react-router-dom';
import GetUser from './components/GetUser';

function App() {
  return (

    <div className="display-container">
      <Routes>
        <Route path="" element = {<Users />} />
        <Route path="/user-detail/:id" element = {<GetUser/>} /> 
      </Routes>
      
     
    </div>

  );
}

export default App;
