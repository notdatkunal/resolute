import NavBar from "../navbar";
import Sidebar from "./sidebar";
import "../../assets/css/components/case.css"
import { useState } from "react";



export default function Cases(){
    
    var [cases, setCases] = useState([
        {
            'serial_no':"1",
            'case_no': '1234343123',
            'case_type':'type1',
            'filling_date':'11/05/2023',
            'registration_number':'1232452132',
            'registration_date': '12/05/2023',
      
        },
        {
            'serial_no':"2",
            'case_no': '12302043124',
            'case_type':'type2',
            'filling_date':'11/08/2023',
            'registration_number':'1232452133',
            'registration_date': '12/08/2023',
      
        }
    ]);
    var [selectedFilter, setSelectedFilter] = useState("");
    var [cities, setCities] = useState([]);
  
  
    const headerMapping = {
      'Serial No.': 'serial_no',
      'Case No.': 'case_no',
      'Case Type': 'case_type',
      'Filling Date': 'filling_date',
      'Registration Number': 'registration_number',
      'Registration Date': 'registration_date',
    };
  
  
  
  
    // useEffect(() => {
    //   debugger;
    //   getCases(selectedFilter);
    //   getCities();
    // },[]);
  
    // useEffect(() => {
    //   getCases(selectedFilter);
    // },[selectedFilter]);
  
  
    // const getCases = async(selectedFilter) => {
    //   debugger;
    //   const response = await getCasesAPI(selectedFilter, authState);
    //   if(response.status == 200){
    //     if(response.data == "EXPIRED" || response.data == "INVALID"){
    //       navigate("/login");
    //       // toast.warning("Session Time Expired");
    //     }
    //     else{
    //       setCases(response.data);
    //     }
    //   }else{
    //     toast.error('Error while calling get cases api')
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
  
  
  
    const renderCases = () =>
      cases.map(order => (
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
  
  
  
    return (<>
      <div style={{ margin: '50px' }}>
          <div style={{}}>
            {/* <h1 style={{color:"blueviolet"}}>Cases</h1> */}
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
            Add Case</button>
          </div>
          <div style={{}}>
          <select onChange={handleFilterChange}
                  style={{width:"150px"}}>
            <option value="ALL">All</option>
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
            {renderOption()}
          </select>
          </div>
        </div>
        <table className="table table-bordered">
          {renderHeader()}
          <tbody>
          {renderCases()}
          </tbody>
        </table>
      </div>
  </>  );
  
}