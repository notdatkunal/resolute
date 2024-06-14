import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllArbitratorsAPI } from "../../services/adminServices";
import { format } from "date-fns";
import "../../assets/css/components/Admin/banks.css";
import { Pagination } from "react-bootstrap";





export default function Arbitrators({toggleComponent}) {

  var [arbitrators, setArbitrators] = useState([]);
  var [selectedFilter, setSelectedFilter] = useState("");
  var [cities, setCities] = useState([]);


  const headerMapping = {
    'Arbitrator Id': 'arbitratorId',
    'Arbitrator Name': 'arbitratorName',
    'Location': 'location',
    'Username': 'username',
    'Registration Date': 'registrationDate',
  };


    // Pagination
    const ITEMS_PER_PAGE = 5;

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0); // Total number of pages


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const paginatedArbitrators = arbitrators.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);



    const renderPagination = () => {
      if (pageCount > 1) {
        return (
          <div style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
            <Pagination activePage={currentPage} onSelect={handlePageChange}>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
              {Array.from({ length: pageCount }, (_, i) => (
                  <li 
                      className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                      aria-current="page"
                      onClick={() => handlePageChange(i + 1)}>
                    <span className="page-link">
                      {i+1}
                    </span>
                  </li>
              ))}
              <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount} />
              <Pagination.Last onClick={() => handlePageChange(pageCount)} />
            </Pagination>
          </div>
        );
      }
    }
      









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
  //   const response = await getArbitratorsAPI(selectedFilter);
  //   if(response.status == 200){
  //     if(response.data == "EXPIRED" || response.data == "INVALID"){
  //       navigate("/login");
  //       toast.warning("Session Time Expired");
  //     }
  //     else{
  //       setArbitrators(response.data);
  //     }
  //   }else{
  //     toast.error('Error while calling get arbitrators api')
  //   }
  // }

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
        const formattedArbitrators = response.data.map(arbitratorData => ({
          ...arbitratorData,
            registrationDate: arbitratorData.registrationDate?format(arbitratorData.registrationDate, "dd MMM yyyy"):null,
          }));

        setArbitrators(formattedArbitrators);
        setPageCount(Math.ceil(formattedArbitrators.length / ITEMS_PER_PAGE));         
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



  // const renderOption = () => {
  //   return cities.map(city => (
  //     <option key={city} value={city}>
  //       {city}
  //     </option>
  //   ));
  // }


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
    paginatedArbitrators.map((arbitrator,index) => (
      <tr key={arbitrator.arbitratorId}>
        <td style={{textAlign:'center'}}>{index + 1}</td>
        {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>{arbitrator[headerMapping[label]]}</td>
        ))}
          <td style={{textAlign:'center'}}>
            <button className="btn btn-primary" 
                    style={{marginRight:'1rem'}}
                    onClick={() => updateArbitrator(arbitrator.arbitratorId)}
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
          <th style={{textAlign:'center'}}>Serial No.</th>
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
          <button className="btn addBtn" 
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
      {renderPagination()}        
    </div>
</>  );
}
