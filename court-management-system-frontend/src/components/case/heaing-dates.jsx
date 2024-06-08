import NavBar from "../navbar";
import "../../assets/css/components/search-case.css"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';


export default function HearingDates({toggleComponent}) {


  const [hearingDates, setHearingDates] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();


  const headerMapping = {
      'Hearing Id': 'hearingId',
      'Hearing Date': 'hearingDate',
  };







  const renderHeader = () => {
      return (
        <thead className="table-active table-dark">
      <tr>
          {/* <th style={{textAlign:'center'}}>Serial No.</th> */}
          {Object.keys(headerMapping).map(label => (
            <th style={{textAlign:'center'}} key={label}>{label}</th>
          ))}
          <th style={{textAlign:'center'}}>Action</th>
      </tr>
      </thead>
    );
  }





  const renderHearingDates = () =>
      hearingDates.map((hearingDate, index) => (
        <tr key={hearingDate.hearingId}>
          {/* <td style={{textAlign:'center'}}>{index + 1}</td> */}
          {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{hearingDate[headerMapping[label]]}</td>
          ))}
        </tr>
  ));





  const getHearingDates = async() => {
      debugger;
      const response = await getHearingDatesAPI(id);
      if(response.status == 200){
            const hearingDates = response.data.map(hearingDateData => ({
              ...hearingDateData,
                hearingDate: hearingDateData.hearingDate?format(hearingDateData.hearingDate, "MMM dd, yyyy"):null,
              }));              
            setHearingDates(hearingDates)
      }else{
          toast.error('Error while calling get hearingDates api')
      }
  }   








  useEffect(()=>{
      getHearingDates();
  }, [])


  const AddHearingDate = (id) =>{
      toggleComponent("AddHearingDate", id);
  }

  const BackToCase = () =>{
    navigate(`/search-case`);
  }








  return(<>
  <div>
    <NavBar></NavBar>
  </div>
  <div className="container" style={{marginTop:"7%"}}> 
      <h1>Hearing Dates</h1>
  <div style={{display:"flex", 
                   flexDirection:"row" , 
                   alignItems:"center", 
                   justifyContent:"space-between",
                   marginBottom:"10px"}}> 
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <button className="btn" 
        style={{backgroundColor:"lightgray", color:'black'}} 
        onClick={() => AddHearingDate(id)}
        >
        Add Hearing Date</button>
      </div>
      <div>
        <button className="btn btn-warning" 
        style={{color:'black'}} 
        onClick={() => BackToCase()}
        >
        Back To Case</button>
      </div>
  </div>    
  <div>
      <table className="table table-bordered">
              {renderHeader()}
          <tbody>
              {renderHearingDates()}
          </tbody>
      </table>
  </div>
  </div>
      </>);
}
