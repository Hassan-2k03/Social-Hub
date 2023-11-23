import Navbar from './components/Navbar';
import "./App.css"
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/screens/Home"
import SignIn from "./components/screens/Signin" // Changed 'Signin' to 'SignIn'
import Profile from "./components/screens/Profile"
import SignUp from "./components/screens/Signup" // Changed 'Signup' to 'SignUp'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;