import { useEffect, useState } from "react";
import { deleteBankAPI, getAllBanksAPI, getAllEnquiriesAPI } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import "../../assets/css/components/Admin/banks.css";
import { Pagination } from "react-bootstrap";



export default function Enquiries({toggleComponent}){


    var [enquiries, setEnquiries] = useState([]);
    const navigate = useNavigate();
    var [selectedFilter, setSelectedFilter] = useState("");
  
    const headerMapping = {
      'Full Name': 'fullName',
      'Contact': 'contact',
      'Email': 'email',
      'Message': 'message',
    };
  
  
    
      

    // Pagination
    const ITEMS_PER_PAGE = 8;
    const MAX_VISIBLE_PAGES = 5


    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0); // Total number of pages


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const paginatedEnquiries = enquiries.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);



    const renderPagination = () => {

      if (pageCount > 1) {
        const visiblePageCount = Math.min(pageCount, MAX_VISIBLE_PAGES); // Adjust MAX_VISIBLE_PAGES as needed
  
        const startIndex = Math.max(
          Math.min(currentPage - Math.floor((visiblePageCount - 1) / 2), pageCount - visiblePageCount + 1),
          1
        );
        const endIndex = Math.min(startIndex + visiblePageCount - 1, pageCount);
    
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Pagination activePage={currentPage} onSelect={handlePageChange}>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {startIndex > 2 && (
              <>
                <a href="#" className="page-link" onClick={() => handlePageChange(1)}>1</a>
                <Pagination.Ellipsis />
              </>
            )}
            {Array.from({ length: endIndex - startIndex + 1 }, (_, i) => (
              <a
                href="#"
                key={startIndex + i}
                className={`page-link ${currentPage === startIndex + i ? "active btn-primary" : ""}`}
                onClick={() => handlePageChange(startIndex + i)}
              >
                {startIndex + i}
              </a>
            ))}
            {endIndex < pageCount - 1 && (
              <>
                <Pagination.Ellipsis />
                <a href="#" className="page-link" onClick={() => handlePageChange(pageCount)}>{pageCount}</a>
              </>
            )}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount} />
            <Pagination.Last onClick={() => handlePageChange(pageCount)} />
          </Pagination>
        </div>          
        );
      }
  }
    



    const getEnquiries = async() => {
    debugger;
    const response = await getAllEnquiriesAPI();
    if(response.status == 200){
            setEnquiries(response.data);
            setPageCount(Math.ceil((response.data).length / ITEMS_PER_PAGE));      
        }else{
            toast.error('Error while calling get banks api')
        }
        }
          

                  
                    
                    
    
    
    
    const renderEnquiries = () =>
      paginatedEnquiries?.map((enquiry, index) => (
        <tr key={enquiry.id}>
          <td style={{textAlign:'center'}}>{index + 1}</td>
          {Object.keys(headerMapping).map(label => (
            <td style={{textAlign:'center'}} key={label}>
                {enquiry[headerMapping[label]]}
            </td>
          ))}
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
        </tr>
        </thead>
      );
    }
    
    
    const handleFilterChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedFilter(selectedValue);
    };
    
    
    
    
    useEffect(() => {
      debugger;
      getEnquiries();
    },[]);
    
    return(<>
      <div style={{ margin: '50px' }}>
          <div style={{}}>
            <h1 style={{color:"blueviolet"}}>Enquiries</h1>
          </div>
        <div style={{display:"flex", 
                     flexDirection:"row" , 
                     alignItems:"center", 
                     justifyContent:"space-between",
                     marginBottom:"10px"}}> 
        </div>
        <table className="table table-bordered">
          {renderHeader()}
          <tbody>
          {renderEnquiries()}
          </tbody>
        </table>
        {renderPagination()}        
      </div>
  </>  );
}