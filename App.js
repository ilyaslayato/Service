import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RegisterForm from './Login/RegisterForm'
import Header from './Client/Header';
import Service from './Client/Service';
import NoPage from './Client/Service';
import You from './Client/You';
import Home from './Client/Home';

function App() {
  return (
    // <div>
    //    <RegisterForm />
    // </div>
   
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/You" element={<You />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
