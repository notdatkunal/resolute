import { useEffect, useState } from "react";
import { getAllBanksAPI } from "../../services/adminServices";




export default function Banks({toggleComponent}){


    var [banks, setBanks] = useState([
    ]);
    var [selectedFilter, setSelectedFilter] = useState("");
    // var [cities, setCities] = useState([]);
  
  
    const headerMapping = {
      'Serial No.': 'serialNo',
      'Bank Id': 'bankId',
      'Bank Name': 'bankName',
      'Registration Date': 'registrationDate',
    };
  
  
  
  
    
    // useEffect(() => {
      //   getBanks(selectedFilter);
      // },[selectedFilter]);
      
      
      const getBanks = async() => {
        debugger;
        const response = await getAllBanksAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              setBanks(response.data);
              // }
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
    
    
    
    const renderBanks = () =>
      banks.map(bank => (
        <tr key={bank.bankId}>
          {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{bank[headerMapping[label]]}</td>
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
    
    
    const AddBank = () => {
      debugger;
      toggleComponent("AddBank");
    }
    
    
    useEffect(() => {
      debugger;
      // getBanks(selectedFilter);
      getBanks();
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
            <button className="btn" 
            style={{backgroundColor:"#F3525A", color:'white'}} 
            onClick={() => AddBank()}
            >
            Add Bank</button>
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
          {renderBanks()}
          </tbody>
        </table>
      </div>
  </>  );
}