import './Register.css'
function Register()
{

    return (
       <div className="container shadow">
        <h2>Register Form</h2>
        <form className="myform">
           <input type="text" value="" id="userName" placeholder="Name" className="auto-input"/>
           <input type="email" value="" id="email" placeholder="Email" className="auto-input"/>
           <input type="password" value="" id="password" placeholder="Password" className="auto-input"/>
           <input type="password" value="" id="cpassword" placeholder="Re-enter password" className="auto-input"/>
           <input type="number" value="" id="num" placeholder="Enter Number" className="auto-input"/>
           <input type="date" value="enter date" id="date" className="auto-input"/>
          
           <input type="submit" value="Submit" className="auto-btn"/>
           
       </form>
       </div>
    )
}
export default Register