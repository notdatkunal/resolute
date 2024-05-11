import { useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadFile } from "../../services/adminServices";


export default function UploadDocuments(){

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () =>{
        setShowModal(!showModal);
    }
    
    const handleFileSubmit = async(event) => {
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;
        var formData = new FormData(event.target);          

        const response = await uploadFile(formData);

        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            // toggleComponent("Cases");
            toast.success("Documents Added Successfully");
            setShowModal(false);
          // }  
        }else{
          toast.error("Failed To Add Documents");
        }

    }


    return(
      <>
      <table className="table table-bordered">
          <thead className="table-active table-dark">
              <tr>
                  <th colSpan={2} style={{textAlign:"center"}}>Loan Recall Notice</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th style={{textAlign:"center"}}>Notice</th>
                  <td style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}} >Intent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Referance Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
          </tbody>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Concent Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Statement of Claim</th>
              <th style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Intimation Letter</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Affidavit</th>
              <th style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></th>
          </thead>
          <thead className="table-active table-dark">
              <th colSpan={2} style={{textAlign:"center"}}>Award</th>
          </thead>
          <tbody>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Notice</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>RPAD</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr>
              <tr>
                  <th scope="row" style={{textAlign:"center"}}>Tracking</th>
                  <td colSpan={2} style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></td>
              </tr> 
          </tbody>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Roznama</th>
              <th style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></th>
          </thead>
          <thead className="table table-primary">
              <th style={{textAlign:"center"}}>Bank Document</th>
              <th style={{textAlign:"center"}}><a onClick={toggleModal}>Upload</a></th>
          </thead>
      </table>      
      <div className={`modal ${showModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" 
                    style={{marginLeft:"3.5em", marginTop:"5px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "bold",
                        color:'black'
                    }}
                >Document Upload</h3>
                <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                        onClick={toggleModal}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form enctype='multipart/form-data' onSubmit={handleFileSubmit}> 
            <div className="modal-body">
                    <input type='file' name='files' multiple/> 
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
                        onClick={toggleModal}>Close</button>
            </div>
           </form>            
            </div>
        </div>
        </div>
      </>
    );   
}