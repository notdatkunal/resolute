import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI } from "../../services/adminServices";


export default function UploadDocuments(){

    const [showMultipleModal, setShowMultipleModal] = useState(false);
    const [showSingleModal, setShowSingleModal] = useState(false);
    const [selectedField, setSelectedField] = useState("");
    const [singleCaseDocument, setSingleCaseDocument] = useState([]);
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
           (mainType != "borrowerDocument" && mainType != "bankDocument" && mainType != "communication")
           ?<option key={mainType} value={mainType}>
            {mainType}
            </option>
            :null
        ));
    }
    
    const renderSubTypes = () => {
        debugger;
        return subTypes.map(subType => (
            ((singleCaseDocument.mainType == "intentLetter" || singleCaseDocument.mainType == "contentLetter" 
            || singleCaseDocument.mainType == "referenceLetter" || singleCaseDocument.mainType == "intimationLetter"  
            || singleCaseDocument.mainType == "loanRecallNotice"  || singleCaseDocument.mainType == "award")
            && (subType == "notice" || subType == "RPAD" ||subType == "tracking"))  
            ?<option value={subType}>
            {subType}
            </option>
            :((singleCaseDocument.mainType == "document")
             &&(subType == "statementOfClaim" || subType == "roznama" || subType == "affidavit"))
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
            debugger;
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
                    mainType: mainTypeData[0]
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
                    subTypeData: subTypeData[0].subType
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




    return(
      <>
    <div className="container1">
        <h1>Upload Documents</h1>
    </div>
    <div>
        <div style={{display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'center', 
                    alignItems:"center",
                    gap:"3rem",
                    marginTop:"6rem"}}>
            <button className="btn btn-primary"
                    onClick={() => {toggleSingleModal("Document")}}>
                Single Document Uplaod
            </button>
            <button className="btn btn-primary"
                    onClick={() => {toggleMultipleModal("Document")}}>
                Multiple Document Uplaod
            </button>
        </div>
    </div>
      {/* <table className="table table-bordered">
          <thead className="table-active table-dark">
              <tr>
                  <th colSpan={3} style={{textAlign:"center"}}>Loan Recall Notice</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("loanRecallNotice", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("loanRecallNotice", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("loanRecallNotice", "RPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("loanRecallNotice", "RPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("loanRecallNotice", "tracking")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("loanRecallNotice", "tracking")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}} >Intent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intentLetter", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intentLetter", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intentLetter", "")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intentLetter")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intentLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intentLetter")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Referance Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("referenceLetter", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("referenceLetter", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("referenceLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("referenceLetter")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("referenceLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("referenceLetter")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Concent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("contentLetter", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("contentLetter", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("contentLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("contentLetter")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("contentLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("contentLetter")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Statement of Claim</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("document")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("document")}>Multiple Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Intimation Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intimationLetter", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intimationLetter", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intimationLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intimationLetter")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("intimationLetter")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("intimationLetter")}>Multiple Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Affidavit</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("document")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("document")}>Multiple Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Award</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("award", "notice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("award", "notice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("award")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("award")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("award")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("award")}>Multiple Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Roznama</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("document")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("document")}>Multiple Upload</a></th>
          </thead>
            <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Bank Document</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("Bank Document")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("Bank Document")}>Multiple Upload</a></th>
          </thead> 
      </table>       */}
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

      </>
    );   
}