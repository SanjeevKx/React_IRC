import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    cpassword: '',
    num: '',
    date: '',
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

    const { userName, email, password, cpassword, num, date } = formData;

    if (password !== cpassword) {
      alert('Passwords mismatching. Please re-confirm !');
      return;
    }

    alert(
      'Registered information:\n' +
        '\nUser: ' + userName + '\n' +
        'Email: ' + email + '\n' +
        'Password: ' + password + '\n' +
        'Number: ' + num + '\n' +
        'Date: ' + date
    );
  };

  return (
    <div className="container shadow">
      <h2>Register Form</h2>
      <form className="myform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.userName}
          id="userName"
          placeholder="Name"
          className="auto-input"
          onChange={handleChange}
        />
        <input
          type="email"
          value={formData.email}
          id="email"
          placeholder="Email"
          className="auto-input"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formData.password}
          id="password"
          placeholder="Password"
          className="auto-input"
          onChange={handleChange}
        />
        <input
          type="password"
          value={formData.cpassword}
          id="cpassword"
          placeholder="Re-enter password"
          className="auto-input"
          onChange={handleChange}
        />
        <input
          type="number"
          value={formData.num}
          id="num"
          placeholder="Enter Number"
          className="auto-input"
          onChange={handleChange}
        />
        <input
          type="date"
          value={formData.date}
          id="date"
          className="auto-input"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" className="auto-btn" />
      </form>
    </div>
  );
}

export default Register;
