import axiosInstance from "../axiosconfig";
import { createUrl } from "../utils/utils";

export async function getCaseHistoryAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/history/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getCaseDocumentsListAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/docs/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}


export async function getDocumentsAPI(filename){
    try{
        debugger;
        let url = createUrl(`/media/${filename}`);
        // let url = createUrl(`/media/Recording 2024-04-17 032742.mp4`);
        // let url = createUrl(`/media/resoluteServerCredentials.pdf`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        debugger;
        // console.log(ex);
        // toast.error(ex.message);
        return ex.response;
    }
}



export async function getCaseProceedingDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/hearings/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}

export async function getMeetingRecordingsAPI(filename){
    try{
        debugger;
        let url = createUrl(`/media/${filename}`);
        // let url = createUrl(`/media/Recording 2024-04-17 032742.mp4`);
        // let url = createUrl(`/media/resoluteServerCredentials.pdf`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return ex.response;
    }
}


export async function getMinutesOfMeetingAPI(filename){
    try{
        debugger;
        let url = createUrl(`/media/${filename}`);
        // let url = createUrl(`/media/Recording 2024-04-17 032742.mp4`);
        // let url = createUrl(`/media/resoluteServerCredentials.pdf`);
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.get(url);
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
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}



export async function getOrderAPI(filename){
    try{
        debugger;
        let url = createUrl(`/media/${filename}`);
        // let url = createUrl(`/media/Recording 2024-04-17 032742.mp4`);
        // let url = createUrl(`/media/resoluteServerCredentials.pdf`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        // console.log(ex);
        // toast.error(ex.message);
        return ex.response;
    }
}


export async function getScreenshotDetailsAPI(caseId){
    try{
        debugger;
        let url = createUrl(`/case/communication/${caseId}`);
        const response = await axiosInstance.get(url);
        return response;
    }catch(ex){
        debugger;
        // console.log(ex);
        // toast.error(ex.message);
        return null;
    }
}
