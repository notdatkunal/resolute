import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI, getHearingDatesAPI, addHearingDateAPI } from "../../services/adminServices";
import DatePicker from "../datepicker";
import ReactDatePicker from "react-datepicker";
import { format } from 'date-fns';











export default function AddHearingDate({id, toggleComponent}){

    const [hearingDates, setHearingDates] = useState([]);
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    // const [mainTypes, setMainTypes] = useState([]);
    // const [subTypes, setSubTypes] = useState([]);



    const handleDateChange = (date, fieldName) => {
        // const formattedDate = format(date, "yyyy/MM/dd");
        setSingleCaseDocument({ ...singleCaseDocument, [fieldName]: date });
    };


    const onTextChange = (args) =>{
        var copy = {...singleCaseDocument};
        copy[args.target.name] = args.target.value;
        setSingleCaseDocument(copy);
    }    

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setSingleCaseDocument({ ...singleCaseDocument, [name]: value });
    };





    
    const handleHearingDateSubmit = async(event) => {
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;

        const response = await addHearingDateAPI(singleCaseDocument, id);

        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Hearing Date Added Successfully");
            setShowSingleModal(false);
          // }  
        }else{
          toast.error("Failed To Add Hearing Date");
        }

    }


    useEffect(()=>{
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
                    <ReactDatePicker
                        selected={singleCaseDocument.hearingDate}
                        name="date"
                        onChange={(date) => handleDateChange(date, "date")}                
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
            </div>
           </form>            
        </div>
    </div>
        </>);
}