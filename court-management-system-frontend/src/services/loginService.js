import axios from "axios";
import { createUrl } from "../utils/utils";


export async function loginAPI(username, password, details){
    try{
        debugger;
        let url = createUrl(`/login`);
        const response = await axios.get(url, {
            params: {
              'username': username,
              'password': password,
              'ip': details.ip,
              'country': details.country,
            }
          });
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function resetPasswordAPI(request){
  try{
    debugger;
    let url = createUrl(`/reset`);
    const response = await axios.post(url, request);
    return response;
  }catch(ex){
    return ex;
  }
}


export async function forgetPasswordAPI(email){
  try{
    debugger;
    let url = createUrl('/forget');
    const response = await axios.post(url, email, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });    
    return response;
  }catch(ex){
    debugger;
    return ex;
  }
}




export async function enquiriesAPI(data){
  try{
    debugger;
    let url = createUrl("/enquiry")
    const response = await axios.post(url, data);    
    return response;
  }catch(ex){
    debugger;
    return ex;
  }
}