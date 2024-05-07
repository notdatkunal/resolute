import axios from "axios";
import { createUrl } from "../utils/utils";
import { toast } from "react-toastify";


export async function addArbitrator(data){
    try{
        debugger;
        let url = createUrl("/admin/arbitrator");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getAllArbitratorsAPI(){
    try{
        debugger;
        let url = createUrl(`/admin/arbitrator`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}




export async function addBank(data){
    try{
        debugger;
        let url = createUrl("/admin/bank");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getAllBanksAPI(){
    try{
        debugger;
        let url = createUrl(`/admin/bank`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function addCase(data){
    try{
        debugger;
        let url = createUrl("/admin/case");
        const response = await axios.post(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getAllCasesAPI(){
    try{
        debugger;
        let url = createUrl(`/admin/case`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}




export async function getAllBorrowersAPI(){
    try{
        debugger;
        let url = createUrl(`/admin/borrower`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function getSearchedCaseAPI(data){
    try{
        debugger;
        let url = createUrl(`/admin/search/case`);
        const response = await axios.post(url, data);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}
