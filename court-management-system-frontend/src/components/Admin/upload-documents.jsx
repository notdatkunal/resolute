import { useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles } from "../../services/adminServices";


export default function UploadDocuments(){

    const [showMultipleModal, setShowMultipleModal] = useState(false);
    const [showSingleModal, setShowSingleModal] = useState(false);
    const [selectedField, setSelectedField] = useState("");

    const toggleMultipleModal = (name) =>{
        setShowMultipleModal(!showMultipleModal);
        setSelectedField(name);
    }
    
    const toggleSingleModal = (name) =>{
        setShowSingleModal(!showSingleModal);
        setSelectedField(name);
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







    return(
      <>
      <table className="table table-bordered">
          <thead className="table-active table-dark">
              <tr>
                  <th colSpan={3} style={{textAlign:"center"}}>Loan Recall Notice</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNRPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNRPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNTracking")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNTracking")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}} >Intent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("ILNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("ILNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("ILRPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("ILRPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("ILTracking")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("ILTracking")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Referance Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("RLNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("RLNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("RLRPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("RLRPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("RLTracking")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("RLTracking")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Concent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("CLNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("CLNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("CLRPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("CLRPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("CLTracking")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("CLTracking")}>Multiple Upload</a></td>
              </tr>
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Statement of Claim</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("SOC")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("SOC")}>Multiple Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Intimation Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("IMLNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("IMLNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("IMLRPAD")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("IMLRPAD")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Affidavit</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={3} style={{textAlign:"center"}}>Award</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></td>
                  <td style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Roznama</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></th>
          </thead>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Bank Document</th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleSingleModal("LRNNotice")}>Single Upload</a></th>
              <th style={{textAlign:"center"}}><a onClick={() => toggleMultipleModal("LRNNotice")}>Multiple Upload</a></th>
          </thead>
      </table>      
      <div className={`modal ${showMultipleModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog">
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
                <div className="form-group mt-1 col">
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
        <div className={`modal ${showSingleModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog">
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
                <div className="form-group mt-1 col">
                    <label style={{textAlign:'center'}}>{selectedField}</label>
                </div>                
                <div className="form-group mt-1 col">
                    <label style={{marginRight:"20px"}}>Case No.</label>
                    <input type='name' name='caseNo'/> 
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