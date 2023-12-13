import React, { useRef } from 'react';
import './CSS/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const numRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access input values using refs
    const formData = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cpassword: cpasswordRef.current.value,
      num: numRef.current.value,
      date: dateRef.current.value,
    };

    // Use formData for your logic (e.g., send to server, perform validation, etc.)
    console.log('Form Data:', formData);
  };

  return (
    <div className="container shadow">
      <Navbar />
      <Footer />
      <h3>Register Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={userNameRef}
          placeholder="Name"
          className="auto-input"
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="auto-input"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="auto-input"
        />
        <input
          type="password"
          ref={cpasswordRef}
          placeholder="Confirm password"
          className="auto-input"
        />
        <input
          type="number"
          ref={numRef}
          placeholder="Enter Number"
          className="auto-input"
        />
        <input type="date" ref={dateRef} className="auto-input" />
        <input type="submit" value="Submit" className="auto-btn" />
      </form>
    </div>
  );
}

export default App;
