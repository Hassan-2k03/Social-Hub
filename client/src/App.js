import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import { BrowserRouter as Router, Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import Home from "./components/screens/Home"
import SignIn from "./components/screens/Signin" // Changed 'Signin' to 'SignIn'
import Profile from "./components/screens/Profile"
import SignUp from "./components/screens/Signup" // Changed 'Signup' to 'SignUp'
import CreatePost from './components/screens/CreatePost';
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    }
    else {
      navigate('/signin')
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;