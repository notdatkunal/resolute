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


export async function getArbitratorAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/arbitrator/${id}`);
        const response = await axios.get(url);
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


export async function updateArbitratorAPI(data, id){
    try{
        debugger;
        let url = createUrl(`/admin/arbitrator/${id}`);
        const response = await axios.put(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function deleteArbitratorAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/arbitrator/${id}`);
        const response = await axios.delete(url);
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



export async function updateBankAPI(data, id){
    try{
        debugger;
        let url = createUrl(`/admin/bank/${id}`);
        const response = await axios.put(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function deleteBankAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/bank/${id}`);
        const response = await axios.delete(url);
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


export async function getBankAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/bank/${id}`);
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




export async function uploadMultipleFiles(data) {
    try {
        debugger;
        let url = createUrl(`/media/bulk`);
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // You can include any additional headers here if needed
            },
        });
        
        return response; // Assuming your server returns JSON data
    } catch (error) {
        //   console.error('Error uploading file:', error);
        //   throw error; // Throw the error for handling in the component
        return null;
    }
};



export async function uploadSingleFile(data) {
    try {
        debugger;
        let url = createUrl(`/media/bulk`);
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // You can include any additional headers here if needed
            },
        });
        
        return response; // Assuming your server returns JSON data
    } catch (error) {
        //   console.error('Error uploading file:', error);
        //   throw error; // Throw the error for handling in the component
        return null;
    }
  };