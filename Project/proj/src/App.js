// import logo from './logo.svg';
// import './App.css';
import Nav from './pages/Nav.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
// import Footer from './components/Footer.js'
import Register from './pages/Register.js'
import Sidebar from "./pages/Sidebar.js";
// import "./CSS/main.css"
// import Login from './components/Login.js'
import Footer from "./pages/Footer.js";
import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Nav/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>

    </>
     
     
  );
}

export default App;
