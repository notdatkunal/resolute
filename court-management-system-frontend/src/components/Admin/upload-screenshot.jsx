import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI, getHearingDatesAPI, uploadScreenshotAPI } from "../../services/adminServices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






export default function UploadScreenShot(){

    const [hearingDates, setHearingDates] = useState([]);
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    const [mainTypes, setMainTypes] = useState([]);
    const [subTypes, setSubTypes] = useState([]);




    const handleDateChange = (date, fieldName) => {
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


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSingleCaseDocument({ ...singleCaseDocument, file: file });
    };



    const renderMainTypes = () => {
        return mainTypes.map(mainType => (
            mainType == "communication"
            ?<option value={mainType}>
            {mainType}
            </option>
            :null
        ));
    }
    
    const renderSubTypes = () => {
        return subTypes.map(subType => (
            (singleCaseDocument.mainType == "communication" 
            && subType == "other")  
            ?<option value={subType}>
            {subType}
            </option>
            :null
        ));
    }





    const getMainTypes = async() => {
        debugger;
        const response = await getMainTypesAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const mainTypeData = response.data;
              setMainTypes(mainTypeData)
              if (mainTypeData.length > 0) {
                setSingleCaseDocument(prevState => ({
                    ...prevState,
                    mainType: "communication"
                }));
                }              
              // }
        }else{
            toast.error('Error while calling get mainTypes api')
        }
    }   


    const getSubTypes = async() => {
        debugger;
        const response = await getSubTypesAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const subTypeData = response.data;
              setSubTypes(subTypeData);
              if (subTypeData.length > 0) {
                setSingleCaseDocument(prevState => ({
                    ...prevState,
                    subType: "other"
                }));
                }              
              // }
        }else{
            toast.error('Error while calling get subTypes api')
        }
    }   

    



    const handleSingleFileSubmit = async(event) => {
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;
        var formData = new FormData(event.target);          

        const response = await uploadScreenshotAPI(formData);

        if(response.status >= 200 && response.status < 300){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Screenshot Added Successfully");
          // }  
        }else{
          toast.error("Failed To Add Screenshot");
        }

    }


    useEffect(()=>{
        getMainTypes();
        getSubTypes();
    }, [])
 
 



    return(<>
    <div className="container">
        <h1>Upload ScreenShot</h1>
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
                    <label>Communication Date</label>
                    <div className="col">
                    <DatePicker
                        name = "date"
                        selected={singleCaseDocument.date}
                        onChange={(date) => handleDateChange(date, "date")}                
                        className="form-control mt-1"
                        placeholderText="Communication Date"
                        />        
                    </div>
                </div>
                <div className="form-group mt-1 col">
                    <label>Main Type</label>
                    <select className="form-control mt-1"
                            name="mainType"
                            value={singleCaseDocument.mainType}
                            onChange={handleFilterChange}>
                    {renderMainTypes()}
                    </select>
                </div>
                <div className="form-group mt-1 col">
                    <label>Sub Type</label>
                    <select className="form-control mt-1"
                            name="subType"
                            value={singleCaseDocument.subType}
                            onChange={handleFilterChange}>
                    {renderSubTypes()}
                    </select>
                </div>
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Upload File</label>
                    <input type='file' 
                           name='file'
                           onChange={handleFileChange}
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