import { createUrl } from "../utils/utils";
import { toast } from "react-toastify";
import { format } from 'date-fns';
import axiosInstance from "../axiosconfig";

export async function addArbitrator(data){
    try{
        debugger;
        let url = createUrl("/admin/arbitrator");
        const response = await axiosInstance.post(url, data);
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
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.put(url, data);
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
        const response = await axiosInstance.delete(url);
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
        const response = await axiosInstance.post(url, data);
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
        const response = await axiosInstance.put(url, data);
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
        const response = await axiosInstance.delete(url);
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
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.post(url, data);
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
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}




export async function getCaseAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/case/${id}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function updateCaseAPI(data, id){
    try{
        debugger;
        let url = createUrl(`/admin/case/${id}`);
        const response = await axiosInstance.put(url, data);
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
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function getSearchedCaseAPI(data){
    try{
        let url = ""
        debugger;
        if (data.date){
            data.date = format(data.date, "yyyy/MM/dd")
            // url = createUrl(`/admin/search/case?parameter=${data.searchParameter}&date=${data.date}`);
            url = createUrl(`/admin/search/case?date=${data.date}`);
            
        } else{
            url = createUrl(`/admin/search/case?parameter=${data.searchParameter}`);
        }
            
            const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.post(url, data, {
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
        let url = createUrl(`/media`);
        const response = await axiosInstance.post(url, data, {
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


  
export async function getMainTypesAPI(){
    try{
        debugger;
        let url = createUrl(`/list/mainTypes`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function getHearingDatesAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/hearings/${id}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}




export async function updateHearingDatesAPI(data, id){
    try{
        debugger;
        let url = createUrl(`/admin/hearing/${id}`);
        const response = await axiosInstance.put(url, data);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function deleteHearingDatesAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/hearing/${id}`);
        const response = await axiosInstance.delete(url);
        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}





export async function getSubTypesAPI(){
    try{
        debugger;
        let url = createUrl(`/list/subTypes`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function addHearingDateAPI(data, id){
    try{
        debugger;
        let url = createUrl(`/admin/hearing/${id}`);
        const response = await axiosInstance.post(url, data);

        return response;  
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}