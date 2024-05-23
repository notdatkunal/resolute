import { useEffect, useState } from "react";
import "../../assets/css/components/Admin/add-case.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getBankAPI, updateBankAPI } from "../../services/adminServices";
import { toast } from "react-toastify";



export default function UpdateBank({id, toggleComponent}){

    const [bank, setBank] = useState({
        bankName: "",
        officerName:"",
        email:"",
        location:"",
        username:"",
        // password:""
    });


    var [selectedFilter, setSelectedFilter] = useState("ADMIN");  


    const handleDateChange = (date, fieldName) => {
        setCaseData({ ...bank, [fieldName]: date });
    };

    const onTextChange = (args) =>{
        var copy = {...bank};
        copy[args.target.name] = args.target.value;
        setBank(copy);
    }


    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setCaseData({ ...bank, [name]: value });
    };
  
   
    
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

    const getBank = async(id) => {
        debugger;
        const response = await getBankAPI(id);
        if(response.status == 200){
            // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
                setBank(response.data);
                // }
            }else{
                toast.error('Error while calling get bank api')
            }
    }
                                            

                        
    const Submit = async () =>{
        debugger;
        //   var role_name = selectedFilter;
        //   var data = authState;
        const response = await updateBankAPI(bank, id);
        if(response.status == 200){
            // if(response.data == "EXPIRED" || response.data == "INVALID"){
                //   navigate("/login");
                //   toast.warning("Session Time Expired");
                // }
                // else{
                    debugger;
                    toggleComponent("Banks");
                    toast.success("Bank Updated Successfully");
                    // }  
                }else{
                    toast.error("Failed To Update Bank");
                }
            }
            
    useEffect(() => {
        debugger;
        // getBanks(selectedFilter);
        getBank(id);
        // getCities();
    },[]);
    
            
        
    return(
    <div>
    <div className="Auth-form-content col">
        <h1 className="Auth-form-title">Update Bank</h1>
        <div className="form-group mt-1 col">
            <label>Bank Name</label>
            <input
            type="text"
            name="bankName"
            value={bank.bankName}
            className="form-control mt-1"
            placeholder="Bank Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Authorised Officer Name</label>
            <input
            type="text"
            name="officerName"
            value={bank.officerName}
            className="form-control mt-1"
            placeholder="Authorised Officer Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Email</label>
            <input
            type="email"
            name="email"
            value={bank.email}
            className="form-control mt-1"
            placeholder="Email"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Location</label>
            <input
            type="text"
            name="location"
            value={bank.location}            
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
            value={bank.username}
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
                <button type="submit" className="btn btn-danger btn-block" onClick={() => toggleComponent("Banks")}>
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