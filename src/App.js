import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Login from './components/Login'; // Ensure this path is correct

function App() {
  const [alert, setAlert] = useState(null);
  const { isAuthenticated, isLoading } = useAuth0();

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar title="vikashtech" />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={isAuthenticated ? <TextForm showAlert={showAlert} heading='Enter the text to analyze below' /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
