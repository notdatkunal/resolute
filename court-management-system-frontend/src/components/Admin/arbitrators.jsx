import React, { useState } from "react";

export default function Arbitrators() {

  var [arbitrators, setArbitrators] = useState([
  ]);
  var [selectedFilter, setSelectedFilter] = useState("");
  var [cities, setCities] = useState([]);


  const headerMapping = {
    'Serial No.': 'serial_no',
    'Arbitrator Id': 'bank_id',
    'Arbitrator Name': 'bank_name',
    'Registration Date': 'registration_date',
  };




  // useEffect(() => {
  //   debugger;
  //   getArbitrators(selectedFilter);
  //   getCities();
  // },[]);

  // useEffect(() => {
  //   getArbitrators(selectedFilter);
  // },[selectedFilter]);


  // const getArbitrators = async(selectedFilter) => {
  //   debugger;
  //   const response = await getArbitratorsAPI(selectedFilter, authState);
  //   if(response.status == 200){
  //     if(response.data == "EXPIRED" || response.data == "INVALID"){
  //       navigate("/login");
  //       // toast.warning("Session Time Expired");
  //     }
  //     else{
  //       setArbitrators(response.data);
  //     }
  //   }else{
  //     toast.error('Error while calling get arbitrators api')
  //   }
  // }


  
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



  const renderArbitrators = () =>
    arbitrators.map(order => (
      <tr key={order.order_id}>
        {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{order[headerMapping[label]]}</td>
        ))}
      </tr>
    ));

    
  const renderHeader = () => {
    return (
      <thead className="table-active table-dark">
      <tr>
          {Object.keys(headerMapping).map(label => (
              <th style={{textAlign:'center'}} key={label}>{label}</th>
          ))}
      </tr>
      </thead>
    );
  }


  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
  };





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
          // onClick={AddEmployee}
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
