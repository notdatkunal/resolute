import { useEffect, useState } from "react";
import { getCaseDocumentsListAPI, getDocumentsAPI } from "../../services/caseServices";

export default function Documents({id}){

    const [url, setURL] = useState("");
    const [documents, setDocuments] = useState([]);
    const [showIframe, setShowIframe] = useState(false);



    const getDocuments = async(filename) => {
        debugger;
      //   var role_name = selectedFilter;
      //   var data = authState;
      const response = await getDocumentsAPI(filename);
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


      const getCaseDocumentsList = async(id) =>{
        debugger;
        const response = await getCaseDocumentsListAPI(id);
        if(response.status == 200){
            debugger;
              setDocuments(response.data);
          }else{
            toast.error("Didn't Fetch Data");
          }         
      }


      useEffect(() => {
        debugger;
        getCaseDocumentsList(id);
        }, []);




    return(
      <>
      <table className="table table-bordered">
          <thead className="table-active table-dark">
              <tr>
                  <th colSpan={2} style={{textAlign:"center"}}>Loan Recall Notice</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Intent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Referance Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Concent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Statement of Claim</th>
              <th style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Intimation Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Affidavit</th>
              <th style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Award</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Roznama</th>
              <th style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></th>
          </thead>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Bank Document</th>
              <th style={{textAlign:"center"}}><a onClick={() => {getDocuments()}}>View</a></th>
          </thead>
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
      </>
    );   
}