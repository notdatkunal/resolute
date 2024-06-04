import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { addHearingDateAPI, getHearingDateAPI, updateHearingDateAPI } from "../../services/adminServices";
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";











export default function UpdateHearingDate({id, hearingId, toggleComponent}){

    const [hearingDates, setHearingDates] = useState([]);
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    // const [mainTypes, setMainTypes] = useState([]);
    // const [subTypes, setSubTypes] = useState([]);



    const handleDateChange = (date, fieldName) => {
        // const formattedDate = format(date, "yyyy/MM/dd");
        setSingleCaseDocument({ ...singleCaseDocument, [fieldName]: date });
    };







    
    const handleHearingDateSubmit = async(event) => {
        debugger;
        event.preventDefault();
        var formData = new FormData(event.target);          

        const response = await updateHearingDateAPI(formData, hearingId);

        if(response.status == 200){
            debugger;
            toggleComponent("HearingDates", id, hearingId);
            toast.success("Hearing Date Updated Successfully");
        }else{
          toast.error("Failed To Update Hearing Date");
        }

    }


    const getHearingDate = async(hearingId) => {
      debugger;
      const response = await getHearingDateAPI(hearingId);
      if(response.status == 200){
            const hearingDateData = response.data;
            setSingleCaseDocument(hearingDateData)
        }else{
            toast.error('Error while calling get banks api')
        }
    }   


    const handleCancel = () =>{
        toggleComponent("HearingDates", id, hearingId);
    }   


    useEffect(()=>{
      debugger;
      getHearingDate(hearingId);
    }, [])


    








    return(<>
    <div className="container">
        <h1>Add Hearing Dates</h1>
    </div>
    <div>
        <div style={{display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'center', 
                    alignItems:"center",
                    gap:"3rem",
                    }}>
            <form enctype='multipart/form-data' onSubmit={handleHearingDateSubmit}> 
            <div className="modal-body">
                <div className="form-group mt-1 col">
                    <label>Hearing Date</label>
                    <DatePicker
                        selected={singleCaseDocument.hearingDate}
                        name="hearingDate"
                        onChange={(date1) => handleDateChange(date1, "hearingDate")}                
                        className="form-control mt-1"
                        // placeholderText=""
                        />        
                </div>
            </div>
            <div className="modal-footer">
                <button 
                        type="submit" 
                        className="btn btn-primary"
                    >Submit</button>
                <button 
                        type="submit" 
                        className="btn btn-danger"
                        onClick={handleCancel}
                    >Cancel</button>
            </div>
           </form>            
        </div>
    </div>
        </>);
}