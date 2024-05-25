import NavBar from "../navbar";
import Sidebar from "./sidebar";
import "../../assets/css/components/case.css"
import { useEffect, useState } from "react";
import { getCaseHistoryAPI } from "../../services/caseServices";



export default function CaseHistory(){

    const [caseDetails, setCaseDetails] = useState({
            "caseType" :"",
            "fillingNumber": "",
            "fillingDate":"",
            "registrationDate":"",
            "registrationNumber":"",
            "CNRNumber":"",
    })
    const [caseStatus, setCaseStatus] = useState({
            "firstHearingDate" :"",
            "nextHearingDate": "",
            "caseStage":"",
            "courtAndJudgeNumber":"",
    });


    const getCaseHistory = async () =>{
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
        const response = await getCaseHistoryAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            setCaseDetails(response.data.caseDetails);
            setCaseStatus(response.data.caseStatus);
          // }  
        }else{
          toast.error("Failed To Add Bank");
        }
      }
    
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            // hour: "numeric",
            // minute: "numeric",
        };
        return new Date(dateString).toLocaleString(undefined, options);
    };


  

    useEffect(()=>{
        getCaseHistory();
    }, [])








    return(
        <>
            {/* <div class="m-b-20">
                <div class="user-avatar-name">
                    <h2 class="mb-1">Case Type</h2>
                </div>
            </div>
                <div class="user-avatar-address">
                    <span>SUMMARY CIVIL SUIT</span>
                </div>
            </div> */}
                    <table className="table table-bordered">
                        <thead className="table-active table-dark">
                            <tr>
                                <th colSpan={2} style={{textAlign:"center"}}>Case Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Case Type</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.caseType}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Case Number</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.caseNumber}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Filling Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{formatDate(caseDetails.fillingDate)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Registration Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{formatDate(caseDetails.registrationDate)}</td>
                            </tr>
                            {/* <tr>
                                <th scope="row" style={{textAlign:"center"}}>CNR Number</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.CNRNumber}</td>
                            </tr> */}
                        </tbody>
                        <thead className="table-active table-dark">
                            <th colSpan={2} style={{textAlign:"center"}}>Case Status</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>First Hearing Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{formatDate(caseStatus.firstHearingDate)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Next Hearing Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{formatDate(caseStatus.nextHearingDate)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Case Status</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.caseStage}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Arbitrator</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.arbitratorName}</td>
                            </tr>
                        </tbody>
                    </table>
        </>
    )
}