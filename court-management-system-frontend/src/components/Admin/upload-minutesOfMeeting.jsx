import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI, getHearingDatesAPI } from "../../services/adminServices";
import DatePicker from "../datepicker";
import { format } from "date-fns";






export default function UploadMinutesOfMeeting(){

    const [hearingDates, setHearingDates] = useState([]);
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    const [mainTypes, setMainTypes] = useState([]);
    const [subTypes, setSubTypes] = useState([]);


    const onTextChange = (args) =>{
        var copy = {...singleCaseDocument};
        copy[args.target.name] = args.target.value;
        setSingleCaseDocument(copy);
    }    

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setSingleCaseDocument({ ...singleCaseDocument, [name]: value });
    };


    const renderHearingDates = () => {
        return hearingDates.map(hearingDate => (
            <option key={hearingDate.hearingId} value={hearingDate.hearingDate}>
            {hearingDate.hearingDate}
            </option>
        ));
    }


    const renderMainTypes = () => {
        return mainTypes.map(mainType => (
            mainType == "minutesOfMeeting"
            ?<option value={mainType}>
            {/* {mainType} */}
            Minutes Of Meeting
            </option>
            :null
        ));
    }
    
    const renderSubTypes = () => {
        return subTypes.map(subType => (
            (singleCaseDocument.mainType == "minutesOfMeeting" 
            && subType == "other")  
            ?<option value={subType}>
            {subType}
            </option>
            :null
        ));
    }



    const getHearingDates = async(id) => {
        debugger;
        const response = await getHearingDatesAPI(id);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const formattedhearingDates = response.data.map(hearingDateData => ({
                ...hearingDateData,
                  hearingDate: hearingDateData.hearingDate?format(hearingDateData.hearingDate, "MMM dd, yyyy"):null,
                }));

              setHearingDates(formattedhearingDates)
              if (formattedhearingDates.length > 0) {
                setSingleCaseDocument(prevState => ({
                    ...prevState,
                    hearingDate: formattedhearingDates[0].hearingDate
                }));
                }              
              // }
        }else{
            toast.error('Error while calling get hearingDates api')
        }
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
                    mainType: "minutesOfMeeting"
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

        const response = await uploadSingleFile(formData);

        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Document Added Successfully");
            setShowSingleModal(false);
          // }  
        }else{
          toast.error("Failed To Add Document");
        }

    }


    useEffect(()=>{
        getMainTypes();
        getSubTypes();
    }, [])
 
 
    useEffect(()=>{
        getHearingDates(singleCaseDocument.caseId);
    }, [singleCaseDocument.caseId])


    








    return(<>
    <div className="container">
        <h1>Upload Minutes Of Meeting</h1>
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
                    <label>Hearing Date</label>
                    <select className="form-control mt-1"
                            name="hearingDate"
                            value={singleCaseDocument.hearingDate}
                            onChange={handleFilterChange}
                            required>
                    {renderHearingDates()}
                    </select>
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
                    <input type='file' name='files'
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