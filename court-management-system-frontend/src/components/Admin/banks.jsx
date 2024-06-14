import { useEffect, useState } from "react";
import { deleteBankAPI, getAllBanksAPI } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import "../../assets/css/components/Admin/banks.css";
import { Pagination } from "react-bootstrap";



export default function Banks({toggleComponent}){


    var [banks, setBanks] = useState([]);
    const navigate = useNavigate();
    var [selectedFilter, setSelectedFilter] = useState("");
  
    const headerMapping = {
      'Bank Id': 'bankId',
      'Bank Name': 'bankName',
      'Username': 'username',
      'Registration Date': 'registrationDate',
    };
  
  
    const bankDetails = (id) =>{
        toggleComponent("BankCases", id)
    }
  
    
    // useEffect(() => {
      //   getBanks(selectedFilter);
      // },[selectedFilter]);
      

    // Pagination
    const ITEMS_PER_PAGE = 5;

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0); // Total number of pages


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const paginatedBanks = banks.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);



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
      



      const getBanks = async() => {
        debugger;
        const response = await getAllBanksAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const formattedBanks = response.data.map(bankData => ({
                ...bankData,
                  registrationDate: bankData.registrationDate?format(bankData.registrationDate, "dd MMM yyyy"):null,
                }));
              setBanks(formattedBanks);
              setPageCount(Math.ceil(formattedBanks.length / ITEMS_PER_PAGE));      

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


    const updateBank = async(id) => {
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
    
    
    
    const renderBanks = () =>
      paginatedBanks?.map((bank, index) => (
        <tr key={bank.bankId}>
          {/* <td style={{textAlign:'center'}}>{index + 1}</td> */}
          {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>
            {label === 'Bank Name' ? (
              <a onClick={() => {bankDetails(bank.bankId)}}
                 style={{color:'blue'}}
              >{bank[headerMapping[label]]}</a>
            ) : (
            bank[headerMapping[label]]
            )}
          </td>
          ))}
          <td style={{textAlign:'center'}}>
            <button className="btn btn-primary" 
                    style={{marginRight:'1rem'}}
                    onClick={() => updateBank(bank.bankId)}
            >
              Update
            </button>
          </td>
        </tr>
      ));
      
      
      const renderHeader = () => {
        return (
          <thead className="table-active table-dark">
        <tr>
            {/* <th style={{textAlign:'center'}}>Serial No.</th> */}
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
            <button className="btn addBtn" 
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
        {renderPagination()}        
      </div>
  </>  );
}