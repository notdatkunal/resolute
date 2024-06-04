import { useEffect, useRef, useState } from "react";
import "../../assets/css/components/communication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { getDocumentsAPI, getScreenshotDetailsAPI } from "../../services/caseServices";
import { format } from "date-fns";

export default function Communication({id}) {

  const [screenshots, setScreenShots] = useState([]);
  const [url, setURL] = useState("");
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef(null);






  const getDocuments = async(filename) => {
    debugger;
    screenshots.map((screenshot)=>{
      if(screenshot.fileName.includes(filename)){
        filename = screenshot.fileName
      }
    })
    const response = await getDocumentsAPI(filename);
    if(response.status == 200){
        debugger;
          var reader = new FileReader();
          setURL(response.data  + "#toolbar=0");
          setShowIframe(true);
      }else if(response.status == 403){
        toast.error("Document is not uploaded yet. Please Try Again.");
      }else{
        toast.error("Didn't Fetch Data");
      }
  }






  const closeIframe = () =>{
    setShowIframe(false);
  }


  const preventDefaultContextMenu = (event) => {
    event.preventDefault();
  };



  const renderScreenshot = () =>
    screenshots?.map((screenshot, index) => (
      <tr key={index}>
        <td style={{textAlign:'center'}}>{screenshot.date}</td>
        <td style={{textAlign:'center'}}>
            <a onClick={() => getDocuments(screenshot.fileName)}
               style={{cursor:'pointer'}}>{screenshot.fileName}</a>
        </td>
      </tr>
    ));
    


  const getScreenShot = async(id) => {
    debugger;
    const response = await getScreenshotDetailsAPI(id);
    if(response.status == 200){
                    
        const formattedScreenshots = response.data.map(screenshotData => ({
          ...screenshotData,
            date: screenshotData.date?format(screenshotData.date, "MMM dd, yyyy"):null,
          }));
          setScreenShots(formattedScreenshots);

      }else{
        toast.error('Error while calling get banks api')
    }
  }  
    
    
  useEffect(()=>{
    getScreenShot(id);
  },[])    


  return (
    <>
    <div>
      <h1>Communication</h1>
    </div>
    <table className="table table-bordered">
      <thead className="table-active table-dark">
        <th colSpan={2} style={{textAlign:'center'}}>
          Screenshot
        </th>
      </thead>
      <tbody>
        {renderScreenshot()}
      </tbody>
    </table>
    {showIframe && (
          <div className="iframe-container" onload="disableContextMenu();">
          <div className="close-button" onClick={closeIframe}><i className="fa-solid fa-xmark"></i></div>
          <div
              className="iframe-overlay"
              onContextMenu={preventDefaultContextMenu}
              style={{ width: "90vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 1 }}
          ></div>
          <iframe src={url}
              className="centered-iframe"
              title="Meeting Recordings"
              style={{ width: "60vw", height: "90vh", position: "relative", zIndex: 0 }}
              ref={iframeRef}
          />
          </div>        
      )}    
    </>
  );
}
