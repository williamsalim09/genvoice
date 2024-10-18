import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login.jsx';
import Homescreen from './screens/Homescreen.jsx';
import Settings from './screens/Settings.jsx';

const App = () => {
  // authenticate user states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  // handle login. only 1 kind of username, so no need to link directly to mirage
  const handleLogin = (usernameInput) => {
    if (usernameInput === 'genvoice') {
      setIsAuthenticated(true);
      setUsername(usernameInput);
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authenticated state to false on logout
    setUsername(''); // Clear the username
  };

  // frontend
  return (
    <Router basename="/genvoice">
      <div className="items-center justify-center">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/homescreen" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/homescreen" 
            element={isAuthenticated ? <Homescreen username={username} onLogout={handleLogout} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/settings" 
            element={isAuthenticated ? <Settings onLogout={handleLogout}/> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
