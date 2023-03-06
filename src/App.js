import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Home from './components/Home';
import Recommendations from './components/Recommendations';
import Bookshelf from './components/Bookshelf';
function App() {

   // new line start
   const [profileData, setProfileData] = useState(null)
   function getData() {
    axios({
      method: "GET",
      url:"http://localhost:5000/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 
  return (
    <Router>
    <div>
      {/* Header goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      {/* Footer goes here */}
    </div>
  </Router>
  );
}

export default App;
