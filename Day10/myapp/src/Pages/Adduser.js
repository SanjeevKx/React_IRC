import React, { useEffect, useState } from "react";

function Adduser() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add"
          className="submit-btn"
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default Adduser;