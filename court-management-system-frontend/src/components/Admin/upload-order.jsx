import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadOrder } from "../../services/adminServices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






export default function UploadOrder(){

    // const [orderData, setHearingDates] = useState([]);
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    const [orderTypes, setOrderTypes] = useState(["SEC 17", "Award", "Other"]);




    const handleDateChange = (dates, fieldName) => {
        setSingleCaseDocument({ ...singleCaseDocument, [fieldName]: dates });
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




    
    const renderOrderTypes = () => {
        return orderTypes.map(orderType => (
            <option value={orderType}>
            {orderType}
            </option>
        ));
    }


    


    const handleSingleFileSubmit = async(event) => {
        debugger;
        event.preventDefault();
        var formData = new FormData(event.target);  
    
        const response = await uploadOrder(formData);

        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Order Added Successfully");
          // }  
        }else{
          toast.error("Failed To Add Order");
        }

    }


 

    








    return(<>
    <div className="container">
        <h1>Upload Order</h1>
    </div>
    <div>
        <div style={{display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'center', 
                    alignItems:"center",
                    gap:"3rem",
                    }}>
            {/* <button className="btn btn-primary"
                    onClick={() => {toggleSingleModal("Bank Document")}}>
                Meeting Recording Uplaod
            </button> */}
            {/* <button className="btn btn-primary"
                    onClick={() => {toggleMultipleModal("Bank Document")}}>
                Multiple Bank Document Uplaod
            </button> */}
            <form enctype='multipart/form-data' onSubmit={handleSingleFileSubmit}> 
            <div className="modal-body">
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Case Id.</label>
                    <input type='name' 
                           name='caseId'
                           value={singleCaseDocument.caseId}
                           onChange={onTextChange}
                           required
                           /> 
                </div>
                <div className="form-group mt-1 col">
                    <label>Order Date</label>
                    <div className="col">
                    <DatePicker
                        selected={singleCaseDocument.date}
                        name="date"
                        onChange={(dates) => handleDateChange(dates, "date")}                
                        className="form-control mt-1"
                        placeholderText="Order Date"
                        />        
                    </div>
                </div>
                <div className="form-group mt-1 col">
                    <label>Order Type</label>
                    <select className="form-control mt-1"
                            name="type"
                            value={singleCaseDocument.type}
                            onChange={handleFilterChange}>
                    {renderOrderTypes()}
                    </select>
                </div>
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Upload File</label>
                    <input type='file' name='file'
                        required/> 
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