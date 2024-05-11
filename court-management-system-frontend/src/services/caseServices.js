import axios from "axios";
import { createUrl } from "../utils/utils";

export async function getCaseHistoryAPI(caseId = 1){
    try{
        debugger;
        let url = createUrl(`/case/history/${caseId}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getCaseDocumentsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/document/${caseId}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getCaseProceedingDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/proceeding/${caseId}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function getCaseOrderDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/order/${caseId}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getCaseCommunicationDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/communication/${caseId}`);
        const response = await axios.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}
