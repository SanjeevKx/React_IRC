import './CSS/style.css';
function Login()
{
   return(
     <div className="container shadow">
         <form>
           <input type="text" value="" id="userName" placeholder="Name" className="auto-input"/>
          
           <input type="password" value="" id="password" placeholder="Enter password" className="auto-input"/>
           <input type="password" value="" id="cpassword" placeholder="Confirm password" className="auto-input"/>
        
           <input type="submit" value="Submit" className="auto-btn" style="color: aliceblue;"/>
           
       </form>
     </div>
   )
}