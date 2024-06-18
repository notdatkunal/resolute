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



export async function getAllEnquiriesAPI(){
    try{
        debugger;
        let url = createUrl(`/list/enquiries`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getAllLogInDetailsAPI(){
    try{
        debugger;
        let url = createUrl(`/loginRecords`);
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





export async function getCasesByBankAndTypeAPI(bankId, caseType){
    try{
        debugger;
        let url = createUrl(`/admin/caseByBankIdAndType/${bankId}?type=${caseType}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        debugger;
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}




export async function getCaseCountByCaseTypeAPI(bankId){
    try{
        debugger;
        let url = createUrl(`/admin/caseTypeCount/${bankId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        debugger;
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}

export async function getCaseCountByCaseTypeCaseStatusAPI(bankId, type, status){
    try{
        debugger;
        let url = createUrl(`/admin/caseCountByTypeAndStatus/${bankId}?type=${type}&status=${status}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        debugger;
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
            data.date = format(data.date, "dd/MM/yyyy")
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
    } catch (ex) {
        debugger;
        //   console.error('Error uploading file:', error);
        //   throw error; // Throw the error for handling in the component
        return ex.response;
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


export async function getCaseTypesAPI(){
    try{
        debugger;
        let url = createUrl(`/list/caseTypes`);
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
        return ex.data;
    }
}


export async function getHearingDateAPI(id){
    try{
        debugger;
        let url = createUrl(`/admin/hearing/${id}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return ex.data;
    }
}




export async function updateHearingDateAPI(data, id) {
    try {
        debugger;
      const date = data.get('hearingDate');
      
      const date1 = format(date, "dd/MM/yyyy")// Retrieve date from data
  
      let url = createUrl(`/admin/hearing/${id}?date=${date1}`);
  
      const response = await axiosInstance.put(url);
  
      return response;
    } catch (ex) {
      // Handle errors (consider logging or displaying error messages)
      return ex.response;
    }
  }





// export async function updateHearingDateAPI(data, id) {
//     try {
//       debugger;
//       const date = data.get('date');
//       const formattedDate = format(date, "dd/MM/yyyy"); // Retrieve date from data
  
//       const url = createUrl(`/admin/hearing/${id}`);
//       const body = JSON.stringify({ date: formattedDate }); // Prepare data for request body
  
//       const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'date': formattedDate // Set content type for JSON data
//         },
//         body, // Add data to request body
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error updating hearing date: ${response.statusText}`);
//       }
  
//       return await response.json(); // Parse response as JSON
//     } catch (error) {
//       console.error('Error updating hearing date:', error); // Log error message
//       throw error; // Re-throw error for handling by caller
//     }
//   }



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




export async function uploadOrder(data) {
    try {
        debugger;
        let caseId = data.get('caseId');
        let date = data.get('date');
        let url = createUrl(`/admin/order/${caseId}`);
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


  export async function getOrderDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/admin/orders/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function uploadScreenshotAPI(data) {
    try {
        debugger;
        let url = createUrl(`/admin/comm`);
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


  export async function getScreenshotDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/admin/comm/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function singleWhatsAppMessageApi(data) {
    try {
        debugger;
        let url = "";
        const response = await axiosInstance.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // You can include any additional headers here if needed
            },
        });
        
        return response; // Assuming your server returns JSON data
    } catch (ex) {
        debugger;
        //   console.error('Error uploading file:', error);
        //   throw error; // Throw the error for handling in the component
        return ex.response;
    }
  };

  export async function addCaseTypeAPI(data){
    try{
        debugger;
        let type = data.get('type');
        let url = createUrl(`/admin/caseType/${type}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function uploadBulkCaseAPI(data) {
    try {
        debugger;
        let url = createUrl(`/admin/case/bulk`);
        const response = await axiosInstance.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // You can include any additional headers here if needed
            },
        });
        
        return response; // Assuming your server returns JSON data
    } catch (ex) {
        debugger;
        //   console.error('Error uploading file:', error);
        //   throw error; // Throw the error for handling in the component
        return ex.response;
    }
  };
