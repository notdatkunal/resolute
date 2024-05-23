import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllArbitratorsAPI } from "../../services/adminServices";

export default function Arbitrators({toggleComponent}) {

  var [arbitrators, setArbitrators] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("");
  var [cities, setCities] = useState([]);


  const headerMapping = {
    'Serial No.': 'serialNo',
    'Arbitrator Id': 'arbitratorId',
    'Arbitrator Name': 'arbitratorName',
    'Location': 'location',
    'Username': 'username',
    'Registration Date': 'registrationDate',
  };




  // useEffect(() => {
  //   debugger;
  //   getArbitrators(selectedFilter);
  //   getCities();
  // },[]);

  // useEffect(() => {
  //   getArbitrators(selectedFilter);
  // },[selectedFilter]);


  const getArbitrators = async(selectedFilter) => {
    debugger;
    const response = await getArbitratorsAPI(selectedFilter);
    if(response.status == 200){
      if(response.data == "EXPIRED" || response.data == "INVALID"){
        navigate("/login");
        toast.warning("Session Time Expired");
      }
      else{
        setArbitrators(response.data);
      }
    }else{
      toast.error('Error while calling get arbitrators api')
    }
  }

  const getAllArbitrators = async() => {
    debugger;
    const response = await getAllArbitratorsAPI();
    if(response && response.status == 200){
      debugger;
      // if(response.data == "EXPIRED" || response.data == "INVALID"){
      //   navigate("/login");
      //   toast.warning("Session Time Expired");
      // }
      // else{
        setArbitrators(response.data);
      // }
    }else{
      toast.error('Error while calling get arbitrators api')
    }
  }

  
  // const getCities = async() => {
  //   const response = await getCitiesAPI(authState);
  //   if(response.status == 200){
  //     if(response.data == "EXPIRED" || response.data == "INVALID"){
  //       navigate("/login");
  //       toast.warning("Session Time Expired");
  //     }
  //     else{
  //       setCities(response.data);
  //     }
  //   }else{
  //     toast.error('Error while calling getcities api')
  //   }
  // }



  const renderOption = () => {
    return cities.map(city => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  }


  // const deleteArbitrator = async(id) => {
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


  const updateArbitrator = async(id) => {
    debugger;
    toggleComponent("UpdateArbitrator", id);
  }




  const renderArbitrators = () =>
    arbitrators.map(arbitrator => (
      <tr key={arbitrator.arbitrator_id}>
        {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{arbitrator[headerMapping[label]]}</td>
        ))}
          <td style={{textAlign:'center'}}>
            <button className="btn btn-primary" 
                    style={{marginRight:'1rem'}}
                    onClick={() => updateArbitrator(arbitrator.arbitrator_id)}
            >
              Update
            </button>
            {/* <button className="btn btn-danger"
                    onClick={() => deleteArbitrator(arbitrator.arbitrator_id)}
            >
              Delete
            </button> */}
          </td>
      </tr>
    ));

    
  const renderHeader = () => {
    return (
      <thead className="table-active table-dark">
      <tr>
          {Object.keys(headerMapping).map(label => (
              <th style={{textAlign:'center'}} key={label}>{label}</th>
            ))}
            <th style={{textAlign:'center'}}>Action</th>
      </tr>
      </thead>
    );
  }


  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
  };


  const AddArbitrator = () => {
    debugger;
    toggleComponent("AddArbitrator");
  }



  useEffect( () => {
    getAllArbitrators();
  }, [])





  return(<>
    <div style={{ margin: '50px' }}>
        <div style={{}}>
          {/* <h1 style={{color:"blueviolet"}}>Arbitrators</h1> */}
        </div>
      <div style={{display:"flex", 
                   flexDirection:"row" , 
                   alignItems:"center", 
                   justifyContent:"space-between",
                   marginBottom:"10px"}}> 
        <div style={{display:'flex', justifyContent:'flex-end', }}>
          <button className="btn" 
          style={{backgroundColor:"#F3525A", color:'white'}} 
          onClick={AddArbitrator}
          >
          Add Arbitrator</button>
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
        {renderArbitrators()}
        </tbody>
      </table>
    </div>
</>  );
}
