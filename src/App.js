import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Tools from './components/Tools';
import Home from './components/Home';
import PostureDetector from './components/detect';
import AboutUs from './components/AboutUs';

import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { SignInButton, UserButton } from "@clerk/clerk-react";

const clerkFrontendApi = "pk_test_YXNzdXJlZC1iZWUtMTYuY2xlcmsuYWNjb3VudHMuZGV2JA";
function App() {
  return (
    
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/detect" element={<PostureDetector />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
