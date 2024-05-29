import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI, getHearingDatesAPI, deleteHearingDatesAPI } from "../../services/adminServices";
import DatePicker from "../datepicker";














export default function HearingDates({id, toggleComponent}){




    const [hearingDates, setHearingDates] = useState([]);




    const headerMapping = {
        'Hearing Id': 'hearingId',
        'Hearing Date': 'hearingDate',
    };



    const deleteHearingDate = (hearingId) =>{
      debugger;
        deleteHearingDates(hearingId)
    }





    const renderHeader = () => {
        return (
          <thead className="table-active table-dark">
        <tr>
            <th style={{textAlign:'center'}}>Serial No.</th>
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
            <td style={{textAlign:'center'}}>{index + 1}</td>
            {Object.keys(headerMapping).map(label => (
              <td style={{textAlign:'center'}} key={label}>{hearingDate[headerMapping[label]]}</td>
            ))}
            <td style={{textAlign:'center'}}>
              <button className="btn btn-primary" 
                      style={{marginRight:'1rem'}}
                      onClick={() => updateHearingDate(hearingDate.hearingId)}
              >
                Update
              </button>
              <button className="btn btn-danger"
                      onClick={() => deleteHearingDate(hearingDate.hearingId)}
              >
                Delete
              </button>
            </td>
          </tr>
    ));





    const getHearingDates = async() => {
        debugger;
        const response = await getHearingDatesAPI(id);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const hearingDateData = response.data;
              setHearingDates(hearingDateData)
            //   if (mainTypeData.length > 0) {
            //     setCaseData(prevState => ({
            //         ...prevState,
            //         bankId: bankData[0].bankId
            //     }));
            //     }              
              // }
        }else{
            toast.error('Error while calling get hearingDates api')
        }
    }   


    const deleteHearingDates = async(hearingId) => {
        debugger;
        const response = await deleteHearingDatesAPI(hearingId);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              toast.success("Hearing Date Deleted Successfully")
        }else{
            toast.error('Error while calling delete hearingDates')
        }
    }   






    useEffect(()=>{
        getHearingDates();
    }, [])


    const AddHearingDate = (id) =>{
        toggleComponent("AddHearingDate", id);
    }








    return(<>
    <div className="container">
        <h1>Hearing Dates</h1>
    </div>
    <div style={{display:"flex", 
                     flexDirection:"row" , 
                     alignItems:"center", 
                     justifyContent:"space-between",
                     marginBottom:"10px"}}> 
        <div style={{display:'flex', justifyContent:'flex-end', }}>
        <button className="btn" 
        style={{backgroundColor:"#F3525A", color:'white'}} 
        onClick={() => AddHearingDate(id)}
        >
        Add Hearing Date</button>
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
        </>);
}