import React from "react";

function Edituser() {
  return (
    <>
      <form>
        <input type="text" id="username" placeholder="username" />
        <input type="text" id="password" placeholder="password" />
        <input type="submit" value="submit" className="edit-btn" />
      </form>
    </>
  );
}

export default Edituser;