import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {


    const [currentState,setCurrentState] = useState("Sign Up");
    const [showpassword, setShowpassword] = useState(false);

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }
    const handleshowpassword = () => {
        setShowpassword(!showpassword);
    }

  return (

    <div className='login-popup'>
      
    <form  className="login-popup-container">

    <div className="login-popup-title">
        <h2>{currentState}</h2>
        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>

    <div className="login-popup-input">

    {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

    <input type="email" placeholder='Your Email' required/>
    
    <div className='in'>

    <input onChange={handlepassword} type={showpassword ? "text" : "password"} placeholder='Your Password' required />{showpassword ? <i className="fa-solid fa-eye" onClick={handleshowpassword}></i> : <i className="fa-solid fa-eye-slash" onClick={handleshowpassword}></i>}

    </div>

    </div>

    <button>{currentState==="Sign Up"?"Create account":"Login"}</button>

    <div className="login-popup-condition">

        <input type="checkbox" required/>
        <p>By continuing, I agree to the terms of use & privacy policy</p>

    </div>

    {currentState === "Login"?<p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p> 
     :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}

    
    

    </form>

    </div>
  )
}

export default LoginPopup
