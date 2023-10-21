import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Profile from './pages/profile';
import SignIn from './pages/singin';
import SignUp from './pages/signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/signin" element={<SignIn/>} />
        <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;