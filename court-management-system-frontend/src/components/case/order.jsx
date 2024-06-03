import React, { useEffect, useRef, useState } from "react";
import { getOrderDetailsAPI } from "../../services/adminServices";
import { format } from "date-fns";
import { getOrderAPI } from "../../services/caseServices";
import { toast } from "react-toastify";


export default function Order({id, togglecomponent}) {
  
  const [orders, setOrders] = useState([]); 
  const [interims, setInterims] = useState([]); 
  const [awards, setAwards] = useState([]); 
  const [others, setOthers] = useState([]); 
  const [url, setURL] = useState("");
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false); // Flag for loading state
  


  const getOrderDetails = async (id) =>{
    debugger;
    //   var role_name = selectedFilter;
    //   var data = authState;
    const response = await getOrderDetailsAPI(id);
    if(response.status == 200){
        const interimSet = new Set();
        const awardSet = new Set();
        const otherSet = new Set();
      // if(response.data == "EXPIRED" || response.data == "INVALID"){
        //   navigate("/login");
        //   toast.warning("Session Time Expired");
        // }
        // else{
          debugger;
          const formattedOrders = response.data.map(orderData => ({
            ...orderData,
            date: orderData.date?format(orderData.date, "MMM dd, yyyy"):null,
          }));
          
          // formattedOrders.forEach(formattedOrder =>{
          //   debugger;
          //   if(formattedOrder.type == "SEC 17"){
          //     setInterims(prevInterims => [...prevInterims, formattedOrder]);
          //   }else if(formattedOrder.type == "Award"){
          //     setAwards(prevAwards => [...prevAwards, formattedOrder]);
          //   }else if(formattedOrder.type == "Other"){
          //     setOthers(prevOthers => [...prevOthers, formattedOrder]);
          //   }
          // }) 
          formattedOrders.forEach(formattedOrder => {
            if (formattedOrder.type === "SEC 17" && !interimSet.has(formattedOrder)) {
              interimSet.add(formattedOrder);
              setInterims([...interimSet]); // Convert Set back to array
            } else if (formattedOrder.type === "Award" && !awardSet.has(formattedOrder)) {
              awardSet.add(formattedOrder);
              setAwards([...awardSet]);
            } else if (formattedOrder.type === "Other" && !otherSet.has(formattedOrder)) {
              otherSet.add(formattedOrder);
              setOthers([...otherSet]);
            }
          });

          console.log(interims);  
          console.log(awards);  
          console.log(others);  
      // }  
    }else{
      toast.error("Didn't Fetch Data");
    }
  }



  const renderInterim = () => {
    return (
      <tbody>
        {interims.map((interim, index) => (
          <tr key={index}>
            <th style={{ textAlign: "center" }}>{interim.date}</th>
            <td style={{ textAlign: "center" }}>
              <a onClick={() => viewOrder(interim.filName)}>view</a>
            </td>
          </tr>
        ))}
      </tbody>
    );  
  }


  const renderAwards = () => {
    debugger;
    return (
      <tbody>
        {awards.map((award, index) => (
          <tr key={index}>
            <th style={{ textAlign: "center" }}>{award.date}</th>
            <td style={{ textAlign: "center" }}>
              <a onClick={() =>
                {debugger; 
                viewOrder(award.filName)}}>view</a>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }


  const renderOthers = () => {
    return (
      <tbody>
        {others.map((other, index) => (
          <tr key={index}>
            <th style={{ textAlign: "center" }}>{other.date}</th>
            <td style={{ textAlign: "center" }}>
              <a onClick={() => viewOrder(other.filName)}>view</a>
            </td>
          </tr>
        ))}
      </tbody>
    );  
  }
  

  const viewOrder = async(filename) => {
    debugger;
  //   var role_name = selectedFilter;
  //   var data = authState;
    const response = await getOrderAPI(filename);
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
        setURL(response.data + "#toolbar=0");
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



  const preventDefaultContextMenu = (event) => {
    event.preventDefault();
  };


  const closeIframe = () => {
    setShowIframe(false);
}





  useEffect(()=>{
    getOrderDetails(id);
  }, [])


  return (
    <>
          <table className="table table-bordered">
            <thead className="table-active table-dark">
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  SEC 17 (Interim Order)
                </th>
              </tr>
            </thead>
            {renderInterim()}
          </table>          
          <table className="table table-bordered">
            <thead className="table-active table-dark">
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  Awards
                </th>
              </tr>
            </thead>
            {renderAwards()}
          </table>          
          <table className="table table-bordered">
            <thead className="table-active table-dark">
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  Others
                </th>
              </tr>
            </thead>
            {renderOthers()}
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
              title="Order"
              style={{ width: "60vw", height: "90vh", position: "relative", zIndex: 0 }}
              ref={iframeRef}
          />
          </div>        
      )}    
    </>
  );
}
