import { useEffect, useState } from "react";
import { addCaseTypeAPI, deleteBankAPI, getAllBanksAPI, getCaseTypesAPI } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import "../../assets/css/components/Admin/banks.css";



export default function CaseTypes({toggleComponent}){


    var [caseTypes, setCaseTypes] = useState([]);
    const [showSingleModal, setShowSingleModal] = useState(false);
    const navigate = useNavigate();
    var [selectedFilter, setSelectedFilter] = useState("");
  
    const headerMapping = {
      'CaseType': 'type',
    };
  
    const [modalVisible, setModalVisible] = useState(false);
    
    const closeModal = () => {
        setModalVisible(false);
        setSelectedCase(null);
    };
    
    const toggleSingleModal = () =>{
      setShowSingleModal(!showSingleModal);
    }
    
    // useEffect(() => {
      //   getBanks(selectedFilter);
      // },[selectedFilter]);

      
      

      const getCaseTypes = async() => {
        debugger;
        const response = await getCaseTypesAPI();
        if(response.status == 200){
              const caseTypeData = response.data;
              setCaseTypes(caseTypeData)
              if (caseTypeData.length > 0) {
                setCaseData(prevState => ({
                    ...prevState,
                    caseType: caseTypeData[0]
                }));
                }              
              // }
        }else{
            toast.error('Error while calling get banks api')
        }
    }   



                              
    // const deleteBank = async(id) => {
    //   debugger;
    //   const response = await deleteBankAPI(id);
    //   if(response.status == 200){
    //     // if(response.data == "EXPIRED" || response.data == "INVALID"){
    //       //   navigate("/login");
    //       // toast.warning("Session Time Expired");
    //       // }
    //       // else{
    //         toast.success("Bank Delete Successfully");
    //         // }
    //       }else{
    //         toast.error('Error while calling get banks api')
    //       }
    //     }


    const deleteCaseType = async(id) => {
      debugger;
      toggleComponent("UpdateBank", id);
    }
                  
                    
                    
    // const renderOption = () => {
    //   return cities.map(city => (
    //     <option key={city} value={city}>
    //       {city}
    //     </option>
    //   ));
    // }
    

    const handleSingleFileSubmit = async(event) => {
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;
        var formData = new FormData(event.target);          
  
        const response = await addCaseTypeAPI(formData);
  
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
  

    
    
    const renderCaseTypes = () =>
      caseTypes?.map((caseType, index) => (
        <tr key={caseType.id}>
          <td style={{textAlign:'center'}}>{index + 1}</td>
          {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>
                {caseType}
          </td>
          ))}
          <td style={{textAlign:'center'}}>
            <button className="btn btn-danger" 
                    style={{marginRight:'1rem'}}
                    onClick={() => deleteCaseType(caseType)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
      
      
      const renderHeader = () => {
        return (
          <thead className="table-active table-dark">
        <tr>
            <th style={{textAlign:'center'}}>Serial No.</th>
            {Object.keys(headerMapping).map(label => (
              <th style={{textAlign:'center'}} key={label}>{label}</th>
            ))}
            <th style={{textAlign:'center'}}>Action</th>
        </tr>
        </thead>
      );
    }
    
    
    
    const AddCaseType = () => {
        // debugger;
        setShowSingleModal(true);
    }
    
    
    useEffect(() => {
      debugger;
      // getBanks(selectedFilter);
      getCaseTypes();
      // getCities();
    },[]);
    
    return(<>
      <div style={{ margin: '50px' }}>
          <div style={{}}>
            {/* <h1 style={{color:"blueviolet"}}>Banks</h1> */}
          </div>
        <div style={{display:"flex", 
                     flexDirection:"row" , 
                     alignItems:"center", 
                     justifyContent:"space-between",
                     marginBottom:"10px"}}> 
          <div style={{display:'flex', justifyContent:'flex-end', }}>
            <button className="btn addBtn" 
            onClick={() => AddCaseType()}
            >
            Add Case Type</button>
          </div>
          {/* <div style={{}}>
          <select onChange={handleFilterChange}
                  style={{width:"150px"}}>
            <option value="ALL">All</option>
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
            {renderOption()}
          </select>
          </div> */}
        </div>
        <table className="table table-bordered">
          {renderHeader()}
          <tbody>
          {renderCaseTypes()}
          </tbody>
        </table>
        <div className={`modal ${showSingleModal ? 'show' : 'hide'}`} tabindex="-1" role="dialog"
            style={{marginLeft:"15em"}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" 
                        style={{marginLeft:"6.5em", marginTop:"5px",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "bold",
                            color:'black'
                         }}
                    >Add Case Type</h3>
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
                    <label style={{marginRight:"20px"}}>Case Type</label>
                    <input type='text' 
                           name='type'
                          //  onChange={onTextChange}
                           /> 
                </div>
            </div>
            <div className="modal-footer">
                <button 
                        type="submit" 
                        className="btn btn-primary"
                    >Add</button>
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
      </div>
  </>  );
}