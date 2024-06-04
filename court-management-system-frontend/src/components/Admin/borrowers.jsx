import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllBorrowersAPI } from "../../services/adminServices";


export default function Borrowers() {

  var [borrowers, setBorrowers] = useState([
  ]);
  // var [selectedFilter, setSelectedFilter] = useState("");
  // var [cities, setCities] = useState([]);


  const headerMapping = {
    'Serial No.': 'serialNo',
    'Borrower Id': 'borrowerId',
    'Borrower Name': 'borrowerName',
    'Registration Date': 'registrationDate',
  };




  // useEffect(() => {
  //   debugger;
  //   getBorrowers(selectedFilter);
  //   getCities();
  // },[]);

  // useEffect(() => {
  //   getBorrowers(selectedFilter);
  // },[selectedFilter]);


  // const getBorrowers = async(selectedFilter) => {
  //   debugger;
  //   const response = await getBorrowersAPI(selectedFilter, authState);
  //   if(response.status == 200){
  //     if(response.data == "EXPIRED" || response.data == "INVALID"){
  //       navigate("/login");
  //       // toast.warning("Session Time Expired");
  //     }
  //     else{
  //       setBorrowers(response.data);
  //     }
  //   }else{
  //     toast.error('Error while calling get borrowers api')
  //   }
  // }



    const getAllBorrowers = async() => {
      debugger;
      const response = await getAllBorrowersAPI();
      if(response.status == 200){
          setBorrowers(response.data);
      }else{
        toast.error('Error while calling get banks api')
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



  // const renderOption = () => {
  //   return cities.map(city => (
  //     <option key={city} value={city}>
  //       {city}
  //     </option>
  //   ));
  // }



  const renderBorrowers = () =>
    borrowers.map(borrower => (
      <tr key={borrower.borrower_id}>
        {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{borrower[headerMapping[label]]}</td>
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



  useEffect( () => {
    getAllBorrowers();
  }, [])





  return(<>
    <div style={{ margin: '50px' }}>
        <div style={{}}>
          {/* <h1 style={{color:"blueviolet"}}>Borrowers</h1> */}
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
          Add Borrower</button>
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
        {renderBorrowers()}
        </tbody>
      </table>
    </div>
</>  );

}
