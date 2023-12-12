import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

const Login= () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const register = () => {
    if (window.confirm('Do you want to register?')) {
      if (password === cpassword) {
        alert(
          `Registered Information:\nUser: ${name}\nPassword: ${password}`
        );
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Registration canceled');
    }
  };

  return (
    <div className="container1">
      <div className="auto-input1">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="auto-btn1" onClick={register}>
        Register
      </button>
    </div>    
    </div>
  );
};

export default Login;
