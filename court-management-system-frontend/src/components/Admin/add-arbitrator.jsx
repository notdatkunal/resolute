import { useState } from "react";
import "../../assets/css/components/Admin/add-case.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addArbitrator } from "../../services/adminServices";
import { toast } from "react-toastify";



export default function AddArbitrator({toggleComponent}){

    const [arbitrator, setArbitrator] = useState({
        arbitrator_name: "",
        authorised_officer_name:"",
        location:"",
        username:"",
        // password:""
    });


    // var [selectedFilter, setSelectedFilter] = useState("ADMIN");  


    const handleDateChange = (date, fieldName) => {
        setCaseData({ ...arbitrator, [fieldName]: date });
    };

    const onTextChange = (args) =>{
        var copy = {...arbitrator};
        copy[args.target.name] = args.target.value;
        setArbitrator(copy);
    }


    // const handleFilterChange = (event) => {
    //     const { name, value } = event.target;
    //     setCaseData({ ...arbitrator, [name]: value });
    // };
  
   


 
      
    // const getRoles = async () => {
    //     var response = await getRolesAPI(authState);
    //     if(response.status == 200){
    //         if(response.data == "EXPIRED" || response.data == "INVALID"){
    //         navigate("/login");
    //         toast.warning("Session Time Expired");
    //         }
    //         else{
    //         setRoles(response.data);
    //         }    
    //     }else{
    //         toast.error("Failed To Load Roles");
    //     }
    // }
  
  
    const Submit = async () =>{
      debugger;
    //   var role_name = selectedFilter;
    //   var data = authState;
      var sentData = {arbitrator}
      const response = await addArbitrator(sentData);
      if(response.status == 200){
        // if(response.data == "EXPIRED" || response.data == "INVALID"){
        //   navigate("/login");
        //   toast.warning("Session Time Expired");
        // }
        // else{
          debugger;
          toggleComponent("Arbitrators");
          toast.success("Arbitrator Added Successfully");
        // }  
      }else{
        toast.error("Failed To Add Arbitrator");
      }
    }
  




    return(
    <div>
    <div className="Auth-form-content col">
        <h1 className="Auth-form-title">Add Arbitrator</h1>
        <div className="form-group mt-1 col">
            <label>Arbitrator Name</label>
            <input
            type="text"
            name="arbitrator_name"
            className="form-control mt-1"
            placeholder="Arbitrator Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Authorised Officer Name</label>
            <input
            type="text"
            name="arbitrator_name"
            className="form-control mt-1"
            placeholder="Arbitrator Name"
            onChange={onTextChange}
            required
            />
        </div>
       <div className="form-group mt-1 col">
            <label>Location</label>
            <input
            type="text"
            name="location"
            className="form-control mt-1"
            placeholder="Location"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Username</label>
            <input
            type="text"
            name="username"
            className="form-control mt-1"
            placeholder="Username"
            onChange={onTextChange}
            required
            />
        </div>
        <div color="red" id="ErrorBox">
        </div>
        <div className="row mt-3">
            <div className="col"></div>        
            <div className="col">
                <button type="submit" className="btn btn-primary btn-block" onClick={Submit}>
                Submit
                </button>
            </div>
            <div className="col">
                <button type="submit" className="btn btn-danger btn-block" onClick={() => toggleComponent("Arbitrators")}>
                Cancel
                </button>
            </div>
            <div className="col"></div>        
        </div>
        </div>
    <div className="col">
    </div>
    </div>);
}