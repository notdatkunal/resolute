import axios from "axios";
import { createUrl } from "../utils/utils";


export async function loginAPI(username, password){
    try{
        debugger;
        let url = createUrl(`/login`);
        const response = await axios.get(url, {
            params: {
              'username': username,
              'password': password
            }
          });
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}
