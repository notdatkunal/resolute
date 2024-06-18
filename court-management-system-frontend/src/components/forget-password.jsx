import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginAPI } from '../Services/LoginServices';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../utils/GlobalStates';
import NavBar from './navbar'
import '../assets/css/components/login.css'
import { forgetPasswordAPI } from '../services/loginService';
import { toast } from 'react-toastify';




export default function ForgetPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");


  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    const response = await forgetPasswordAPI(email);
    if(response.status == 200){
      debugger;
      toast.success("Otp Sent Successfull");
      navigate(`/resetPassword/${email}`); 
    }else{
      toast.error(response.message);
    }
    
  };


  return (<>
  <div>
    <NavBar></NavBar>
  </div>
  <div className='container'>
    <div className="main">
    <div className="session">
      <form action="" className="log-in, form" autoComplete="off" onSubmit={handleSubmit}>
        <h4>Do Not <span>Panic!</span></h4>
        <p style={{textAlign:"center"}}>We Are Here To Help You.</p>
        <p style={{textAlign:"center"}}>Please Enter Your Email</p>
        <div className="floating-label">
          <input 
              placeholder="Email" 
              type="email" 
              name="email" 
              id="email" 
              autoComplete="off" 
              onChange={(e) => setEmail(e.target.value)}
            />
          <label htmlFor="email">Email:</label>
          <div className="icon">
            <svg
              enableBackground="new 0 0 100 100"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              >
              <style type="text/css">
                {`.st0{fill:none;}`}
              </style>
              <g transform="translate(0 -952.36)">
                <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
              </g>
              <rect className="st0" width="100" height="100" />
            </svg>
          </div>
        </div>
          <button type="submit">Send</button>
      </form>
    </div>  
  </div>  
  </div>
  </>);
}
