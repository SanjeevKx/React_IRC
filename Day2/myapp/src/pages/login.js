import './CSS/style.css'
function login()
{
    return(
        <div class="container1 shadow">
<h1>Login</h1>
<form>
<input type="text" value="" id="userName" placeholder="Name" className="auto-input"/>

<input type="password" value="" id="password" placeholder="Enter password" className="auto-input"/>
<input type="password" value="" id="cpassword" placeholder="Confirm password" className="auto-input"/>


<input type="submit" value="Submit" className="auto-btn1" style="color: aliceblue;"/>
<div>
<p className="password1">Forget Password ?<a href="App.js">click here!</a> </p>
    </div>

</form>
</div>
    )
  
}

export default login
