import { useEffect, useState } from "react";
import "../../assets/css/components/Admin/add-case.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addArbitrator, getArbitratorAPI, updateArbitratorAPI } from "../../services/adminServices";
import { toast } from "react-toastify";



export default function UpdateArbitrator({id, toggleComponent}){

    const [arbitrator, setArbitrator] = useState({
        arbitratorName: "",
        location:"",
        email:"",
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
  
    const getArbitrator = async(id) => {
        debugger;
        const response = await getArbitratorAPI(id);
        if(response.status == 200){
            // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
                setArbitrator(response.data);
                // }
            }else{
                toast.error('Error while calling get bank api')
            }
    }




  
    const Submit = async () =>{
      debugger;
    //   var role_name = selectedFilter;
    //   var data = authState;
      const response = await updateArbitratorAPI(arbitrator, id);
      if(response.status == 200){
        // if(response.data == "EXPIRED" || response.data == "INVALID"){
        //   navigate("/login");
        //   toast.warning("Session Time Expired");
        // }
        // else{
          debugger;
          toggleComponent("Arbitrators");
          toast.success("Arbitrator Update Successfully");
        // }  
      }else{
        toast.error("Failed To Update Arbitrator");
      }
    }
  


    useEffect( ()=> { 
        getArbitrator(id);
    }, [])



    return(
    <div>
    <div className="Auth-form-content col">
        <h1 className="Auth-form-title">Update Arbitrator</h1>
        <div className="form-group mt-1 col">
            <label>Arbitrator Name</label>
            <input
            type="text"
            name="arbitratorName"
            value={arbitrator.arbitratorName}
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
            value={arbitrator.location}
            className="form-control mt-1"
            placeholder="Location"
            onChange={onTextChange}
            required
            />
        </div>
       <div className="form-group mt-1 col">
            <label>Email</label>
            <input
            type="email"
            name="email"
            value={arbitrator.email}
            className="form-control mt-1"
            placeholder="Email"
            onChange={onTextChange}
            disabled
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Username</label>
            <input
            type="text"
            name="username"
            value={arbitrator.username}
            className="form-control mt-1"
            placeholder="Username"
            onChange={onTextChange}
            disabled
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