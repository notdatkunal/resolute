import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI } from "../../services/adminServices";




export default function UploadBankDocument(){



    const [showMultipleModal, setShowMultipleModal] = useState(false);
    const [showSingleModal, setShowSingleModal] = useState(false);
    const [selectedField, setSelectedField] = useState("");
    const [singleCaseDocument, setSingleCaseDocument] = useState("");
    const [mainTypes, setMainTypes] = useState([]);
    const [subTypes, setSubTypes] = useState([]);

    const toggleMultipleModal = (name) =>{
        setShowMultipleModal(!showMultipleModal);
        setSelectedField(name);
    }
    
    const toggleSingleModal = (name) =>{
        setShowSingleModal(!showSingleModal);
        setSelectedField(name);
    }


    const onTextChange = (args) =>{
        var copy = {...singleCaseDocument};
        copy[args.target.name] = args.target.value;
        setSingleCaseDocument(copy);
    }    

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setSingleCaseDocument({ ...singleCaseDocument, [name]: value });
    };


    const renderMainTypes = () => {
        return mainTypes.map(mainType => (
            mainType == "bankDocument"
            ?<option value={mainType}>
            {mainType}
            </option>
            :null
        ));
    }
    
    const renderSubTypes = () => {
        debugger;
        return subTypes.map(subType => (
            (singleCaseDocument.mainType == "bankDocument" 
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
                    mainType: "bankDocument"
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
              setSubTypes(subTypeData)
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

    
    const handleMultipleFilesSubmit = async(event) => {
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;
        var formData = new FormData(event.target);          

        const response = await uploadMultipleFiles(formData);


        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Documents Added Successfully");
            setShowMultipleModal(false);
          // }  
        }else{
          toast.error("Failed To Add Documents");
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













    return(<>
    <div className="container1">
        <h1>Upload Bank Documents</h1>
    </div>
    <div>
        <div style={{display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'center', 
                    alignItems:"center",
                    gap:"3rem",
                    marginTop:"6rem"}}>
            <button className="btn btn-primary"
                    onClick={() => {toggleSingleModal("Bank Document")}}>
                Single Bank Document Uplaod
            </button>
            <button className="btn btn-primary"
                    onClick={() => {toggleMultipleModal("Bank Document")}}>
                Multiple Bank Document Uplaod
            </button>
        </div>
    </div>
    <div className={`modal ${showMultipleModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog"
            style={{marginLeft:"15em"}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" 
                    style={{marginLeft:"3.5em", marginTop:"5px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "bold",
                        color:'black'
                    }}
                >Multiple Documents Upload</h3>
                <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                        onClick={() => toggleMultipleModal("")}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form enctype='multipart/form-data' onSubmit={handleMultipleFilesSubmit}> 
            <div className="modal-body">
                <div className="form-group mt-1 col" style={{display:'flex', justifyContent:"center"}}>
                    <label style={{textAlign:'center'}}>{selectedField}</label>
                </div>                
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Upload Files</label>
                    <input type='file' name='files' multiple/> 
                </div>                
            </div>
            <div className="modal-footer">
                <button 
                        type="submit" 
                        className="btn btn-primary"
                    >Submit</button>
                <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal" 
                        onClick={() => toggleMultipleModal("")}>Close</button>
            </div>
           </form>            
            </div>        
        </div>
        </div>
        <div className={`modal ${showSingleModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog"
            style={{marginLeft:"15em"}}>

        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" 
                    style={{marginLeft:"3.5em", marginTop:"5px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "bold",
                        color:'black'
                    }}
                >Single Document Upload</h3>
                <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                        onClick={() => toggleSingleModal("")}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form enctype='multipart/form-data' onSubmit={handleSingleFileSubmit}> 
            <div className="modal-body">
                <div className="form-group mt-1 col" style={{display:'flex', justifyContent:"center"}}>
                    <label style={{textAlign:'center'}}>{selectedField}</label>
                </div>                
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Case Id.</label>
                    <input type='name' 
                           name='caseId'
                           value={singleCaseDocument.caseId}
                           onChange={onTextChange}
                           /> 
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
                    <input type='file' name='files'/> 
                </div>
            </div>
            <div className="modal-footer">
                <button 
                        type="submit" 
                        className="btn btn-primary"
                    >Submit</button>
                <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal" 
                        onClick={() => toggleSingleModal("")}>Close</button>
            </div>
           </form>            
            </div>
        
        </div>
        </div>
        </>);
}