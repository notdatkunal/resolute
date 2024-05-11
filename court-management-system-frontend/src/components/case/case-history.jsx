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
                                <th scope="row" style={{textAlign:"center"}}>Filling Number</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.fillingNumber}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Filling Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.fillingDate}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Registration Number</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.registrationNumber}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Registration Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.registrationDate}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>CNR Number</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseDetails.CNRNumber}</td>
                            </tr>
                        </tbody>
                        <thead className="table-active table-dark">
                            <th colSpan={2} style={{textAlign:"center"}}>Case Status</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>First Hearing Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.firstHearingDate}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Next Hearing Date</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.nextHearingDate}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Case Stage</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.caseStage}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign:"center"}}>Court Number And Judge</th>
                                <td colSpan={2} style={{textAlign:"center"}}>{caseStatus.courtAndJudgeNumber}</td>
                            </tr>
                        </tbody>
                    </table>
        </>
    )
}