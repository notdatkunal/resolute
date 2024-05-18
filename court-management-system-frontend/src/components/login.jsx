import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginAPI } from '../Services/LoginServices';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../utils/GlobalStates';
import NavBar from './navbar'
import '../assets/css/components/login.css'
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { loginAPI } from '../services/loginService';
import { toast } from 'react-toastify';




export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
//   const [authState,setAuthState] = useContext(AuthContext);
  
  // const GoToSignUp = () =>{
  //   navigate("/register");
  // }



  // const ResetPassword = () =>{
  //   navigate("/reset");
  // }

// const sendLoginData = async() => {
//   if(email == "" || password == ""){
//       toast.warning("Please Enter Email And Password");
//     }else{
//         const user = {
//           email: email,
//           password: password
//         };
//       const response = await loginAPI(user);
//       if(response.status == 200){
//         setAuthState({
//           ...authState,
//           user_id:response.data.user_id,
//           token:response.data.token,
//           role_id:response.data.role_id
//         });
//           dispatch(login(response.data))
//
//         if (response.data != 0) {
//           switch (response.data.role_id) {
//             case 1:
//               navigate("/admin");              
//               break;
//             case 2:
//               navigate("/dispatcher");              
//               break;
//             case 3:
//               navigate("/deliverypersonnel");              
//               break;
//             case 4:
//               navigate("/customer");              
//               break;
//             default:
//               break;
//           }
//           toast.success(`Welcome ${response.data.first_name}!`);
//         }else{
//           toast.warning("Please Enter Correct Password");
//         }
//       }else{
//         toast.error("Customer Login Failed. Please Try Again!");
//       }
//     }
// }
  

const Submit = async (e) =>{
  e.preventDefault();
  debugger;
  const response = await loginAPI(username, password);
  if(response.status == 200){
    dispatch(login(response.data))
    if (response.data != 0) {
      switch (response.data.role) {
        case "admin":
          navigate("/admin");              
          break;
        case "bank":
          navigate("/search-case");              
          break;
        case "arbitrator":
          navigate("/search-case");              
          break;
        default:
          break;
      }
      toast.success(`Welcome ${response.data.username}!`);
    }
  }else{
    toast.error("Failed To Login, Please Try Again");
  }
}





  return (<>
  <div>
    <NavBar></NavBar>
  </div>
{/*  <div className="Auth-form-container">
      <div className="Auth-form-content mb-5">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="text-center">
          Not Registered?{" "}
          <span className="link-primary" onClick={GoToSignUp}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            name='LoginEmail'
            className="form-control mt-1"
            placeholder="Enter email"
            required
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name='LoginPassword'
            className="form-control mt-1"
            placeholder="Enter password"
            required
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={sendLoginData}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-center mt-2">
        <a onClick={ResetPassword}> Forgot password?</a>
        </p>
      </div>
  </div>
      */}  
    <div className="main">
    <div className="session">
      <div className="left">
        <svg
          enableBackground="new 0 0 300 302.5"
          version="1.1"
          viewBox="0 0 300 302.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style type="text/css">
            {`.st01{fill:#fff;}`}
          </style>
          <path
            className="st01"
            d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"
          />
        </svg>
      </div>
      <form action="" className="log-in, form" autoComplete="off" onSubmit={Submit}>
        <h4>We are <span>RESOLUTE</span></h4>
        <p>Welcome back! Log in to your account to view today's clients:</p>
        <div className="floating-label">
          <input 
              placeholder="Username" 
              type="text" 
              name="username" 
              id="username" 
              autoComplete="off" 
              onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="email">Username:</label>
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
        <div className="floating-label">
          <input 
                placeholder="Password" 
                type="password" 
                name="password" 
                id="password" 
                autoComplete="off" 
                onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="password">Password:</label>
          <div className="icon">
            <svg
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style type="text/css">
                {`.st0{fill:none;}.st1{fill:#010101;}`}
              </style>
              <rect className="st0" width="24" height="24" />
              <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
              <path className="st1" d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
              <path className="st1" d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
            </svg>
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>  
    </div>  
  </>);
}
