import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { loginAPI } from '../Services/LoginServices';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../utils/GlobalStates';
import NavBar from './navbar'
import '../assets/css/components/login.css'
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import { resetPasswordAPI } from '../services/loginService';




export default function ResetPassword() {

  const navigate = useNavigate();
  const [otp, setOtp] = useState('');  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const { email } = useParams('email');


  const validatePasswordMatch = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false; // Prevent form submission if passwords don't match
    }
    return true; // Allow form submission if passwords match
  };




  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();

    // Additional password strength validation (optional)
    if (!validatePasswordStrength(password)) {
      setErrorMessage('Password is weak. Please use a combination of uppercase, lowercase letters, numbers, and symbols.');
      return;
    }

    if (!validatePasswordMatch()) {
      return; // Error already handled in validatePasswordMatch
    }

    var request = {
      email : email,
      otp: otp,
      newPassword: password
    }
    const response = await resetPasswordAPI(request);

    if(response.status == 200){

      toast.success("Password Reset Successfull");
      navigate('/signin'); 
    }else{
      toast.error(response.message);
    }
    
  };

  const validatePasswordStrength = (password) => {
    // Implement your desired password strength requirements here
    // Example: Minimum length, uppercase, lowercase, numbers, symbols
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

    return password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSymbol;
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
        <p className='para'>Please Enter OTP</p>
        <div style={{margin:'0 auto 0 auto'}}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span style={{marginLeft:'20px'}}></span>}
            renderInput={(props) => <input {...props} />}
            />        
        </div>
        <div style={{width:"300px",
            display:"flex",
            justifyContent:"end",
        }}>
          <a className='resendOtp' 
             href=''
             >Resend OTP</a>
        </div>
        <p className='para'>Please Enter New Password</p>
        <div className="floating-label">
          <input 
              placeholder="New Password" 
              type="password" 
              name="password" 
              id="password" 
              autoComplete="off" 
              onChange={(e) => setPassword(e.target.value)}
              />
          <label htmlFor="password">New Password:</label>
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
        <div className="floating-label">
          <input 
              placeholder="Re Enter Password" 
              type="password" 
              name="repassword" 
              id="repassword" 
              autoComplete="off" 
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
          <label htmlFor="password">Re Enter Password:</label>
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
          {errorMessage && <p className='error-message'>{errorMessage}</p>}        
          <button type="submit">Submit</button>
      </form>
    </div>  
  </div>  
  </div>
  </>);
}
