import { useState } from "react";
import { getCaseProceedingDetailsAPI } from "../../services/caseServices";

export default function Proceedings(){

    const [hearings, setHearings] = useState({
        "firstHearingDate":"",
        "nextHearingDate":"",
        "dates":[],
    })


    const getCaseHistory = async () =>{
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
        const response = await getCaseProceedingDetailsAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            setHearings(response.data);
          // }  
        }else{
          toast.error("Didn't Fetch Data");
        }
      }


      const getMeetingRecordings = async(date) => {
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
        const response = await getMeetingRecordingsAPI(date);
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
          toast.error("Didn't Fetch Data");
        }
      }




    return(<>
    {/* <h1 style={{textAlign:"center"}}>Proceedings</h1> */}
    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>First Hearing Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>11/05/2024</th>
            </tr>
        </tbody>
    </table>

    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>Next Hearing Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>20/05/2024</th>
            </tr>
        </tbody>
    </table>
    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th style={{textAlign:"center"}}>Hearing Dates</th>
                <th style={{textAlign:"center"}}>Meeting Recordings</th>
                <th style={{textAlign:"center"}}>Minutes of Meetings</th>
            </tr>
        </thead>
        <tbody>
        {hearings.dates.map((date, index) => (
            <tr key={index}>
                <th scope="row" style={{textAlign:"center"}}>{date}</th>
                <td style={{textAlign:"center"}}>
                    {/* Add an onClick handler to trigger fetching of meeting recordings */}
                    <a onClick={() => getMeetingRecordings(date)}>View</a>
                </td>
                <td style={{textAlign:"center"}}>
                    {/* You can add a similar onClick handler for minutes of meetings */}
                    <a>View</a>
                </td>
            </tr>
        ))}        
        </tbody>
    </table>
    </>);
}