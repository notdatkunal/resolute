import { useEffect, useState } from "react";
import '../../assets/css/components/Admin/upload-documents.css';
import { toast } from "react-toastify";
import { uploadSingleFile, uploadMultipleFiles, getSubTypesAPI, getMainTypesAPI, singleWhatsAppMessageApi } from "../../services/adminServices";


export default function Communication(){

    const [showMultipleModal, setShowMultipleModal] = useState(false);
    const [showSingleModal, setShowSingleModal] = useState(false);
    const [selectedField, setSelectedField] = useState("");
    const [singleCaseMessage, setSingleCaseMessage] = useState([]);

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



    const handleAccountNumberChange = (e) => {
        const maxLength = 10; // Set maximum length
        let value = e.target.value;
        
        // Enforce maximum length
        if (value.length > maxLength) {
            value = value.slice(0, maxLength);
        }

        setSingleCaseMessage({ ...singleCaseMessage, mobileNumber: value });
    };


    
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


    const handleSingleMessageSubmit = async(event) => {
        debugger;
        event.preventDefault();
        var formData = new FormData(event.target);          

        const response = await singleWhatsAppMessageApi(formData);

        if(response.status == 200){
            debugger;
            toast.success("Message Sent Successfully");
            setShowSingleModal(false);
          // }  
        }else{
          toast.error("Failed To Sent Message");
        }

    }


    useEffect(()=>{
    }, [])




    return(
      <>
    <div className="container1">
        <h1>Communication</h1>
    </div>
    <div>
        <div style={{display:'flex', 
                    flexDirection:"column", 
                    justifyContent:'center', 
                    alignItems:"center",
                    gap:"3rem",
                    marginTop:"6rem"}}>
            <button className="btn btn-success"
                    onClick={() => {toggleSingleModal("WhatsApp Message")}}>
                <i class="fa-brands fa-whatsapp" style={{marginRight:'10px'}}></i>
                Send Message Via WhatsApp
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
                    >WhatsApp Message Communication</h3>
                    <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={() => toggleSingleModal("")}>
                    <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <form onSubmit={handleSingleMessageSubmit}> 
            <div className="modal-body">
                <div className="form-group mt-1 col" style={{display:'flex', justifyContent:"center"}}>
                    <label style={{textAlign:'center'}}>{selectedField}</label>
                </div>                
                <div className="form-group mt-1 col">
                    <label>Mobile Number</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        className="form-control mt-1"
                        placeholder="Mobile Number"
                        value={singleCaseMessage.mobileNumber}
                        onChange={handleAccountNumberChange}            
                        required
                        />                    
                </div>
                <div className="form-group mt-1 col">
                    <label>Message</label>
                    <textarea
                        id = "message"
                        className="form-control mt-1"
                        name="message"
                        placeholder="Write A Message"
                    ></textarea>
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