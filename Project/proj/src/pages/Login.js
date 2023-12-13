import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, password } = formData;

    if (window.confirm('Do you want to proceed?')) {
      alert(
       'Congrats! You have logged-in successfully'
      );
    } else {
      alert('Failed');
    }
  };

  return (
    <div className="container1 shadow1">
      <h1>Login</h1>
      <form className="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.userName}
          id="userName"
          placeholder="Name"
          className="auto-input1"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formData.password}
          id="password"
          placeholder="Enter password"
          className="auto-input1"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" className="auto-btn1" />
        <div>
          <p className="password1">
            Forget Password ?<a href="Register.js">click here!</a>{' '}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
