import React from 'react';
import './CSS/style.css';
function register()
{
    return (
       <div className="container shadow">
        <h3>Register Form</h3>
        <form>
           <input type="text" value="" id="userName" placeholder="Name" className="auto-input"/>
           <input type="email" value="" id="email" placeholder="Email" className="auto-input"/>
           <input type="password" value="" id="password" placeholder="Password" className="auto-input"/>
           <input type="password" value="" id="cpassword" placeholder="Confirm password" className="auto-input"/>
           <input type="number" value="" id="num" placeholder="Enter Number" className="auto-input"/>
           <input type="date" value="enter date" id="date" className="auto-input"/>
          
           <input type="submit" value="Submit" className="auto-btn"/>
           
       </form>
       </div>
    )
}
export default register