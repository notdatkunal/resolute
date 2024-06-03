import { useEffect, useState } from "react";
import { getCaseProceedingDetailsAPI, getMeetingRecordingsAPI, getMinutesOfMeetingAPI } from "../../services/caseServices";
import "../../assets/css/components/documents.css";
import { format } from "date-fns";



export default function Proceedings({id}){

    const [hearings, setHearings] = useState([])
    const [url, setURL] = useState("")
    const [showIframe, setShowIframe] = useState(false);


    const getProceedingDetails = async (id) =>{
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
        const response = await getCaseProceedingDetailsAPI(id);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            const formattedProceedings = response.data.map(proceedingData => ({
              ...proceedingData,
                hearingDate: proceedingData.hearingDate?format(proceedingData.hearingDate, "MMM dd, yyyy"):null,
              }));    
            setHearings(formattedProceedings);
          // }  
        }else{
          toast.error("Didn't Fetch Data");
        }
      }


      const getMeetingRecordings = async(filename) => {
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
      const response = await getMeetingRecordingsAPI(filename);
      if(response.status == 200){
          debugger;
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            var reader = new FileReader();
            // const blob = dataURItoBlob(response.data);
            // const blobUrl = URL.createObjectURL(blob);
            // const blobUrl = URL.createObjectURL(blob);
            setURL(response.data);
            setShowIframe(true);
            // reader.readAsText(response.data);            
            // reader.readAsDataURL(response.data); 
            // window.open(blobUrl, '_blank');
            // window.location = reader.readAsDataURL(blob) 
          // }  
        }else{
          toast.error("Didn't Fetch Data");
        }
      }



      const getMinutesOfMeeting = async(filename) => {
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
        const response = await getMinutesOfMeetingAPI(filename);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            setURL(response.data);
            setShowIframe(true);

          // }  
        }else{
          toast.error("Didn't Fetch Data");
        }
      }

      useEffect(()=>{
        getProceedingDetails(id);
      }, [])


    const closeIframe = () => {
        setShowIframe(false);
    }



    return(<>
    {/* <h1 style={{textAlign:"center"}}>Proceedings</h1> */}
    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th style={{textAlign:"center"}}>Hearing Dates</th>
                <th style={{textAlign:"center"}}>Meeting Recordings</th>
                <th style={{textAlign:"center"}}>Minutes of Meetings</th>
            </tr>
        </thead>
        <tbody>
        {hearings.map((hearing, index) => (
            <tr key={index}>
                <th scope="row" style={{textAlign:"center"}}>{hearing.hearingDate}</th>
                <td style={{textAlign:"center"}}>
                    {/* Add an onClick handler to trigger fetching of meeting recordings */}
                    <a onClick={() => getMeetingRecordings(hearing.meetingRecordings)}>View</a>
                </td>
                <td style={{textAlign:"center"}}>
                    {/* You can add a similar onClick handler for minutes of meetings */}
                    <a onClick={() => getMinutesOfMeeting(hearing.minutesOfMeeting)}>View</a>
                </td>
            </tr>
        ))}        
        </tbody>
    </table>
    {showIframe && (
        <div className="iframe-container">
            <div className="close-button" onClick={closeIframe}><i class="fa-solid fa-xmark"></i></div>
            <iframe src={url} 
                    className="centered-iframe" 
                    title="Meeting Recordings"
                    style={{ width: "60vw", height: "90vh" }} />
        </div>
    )}    
    </>);
}