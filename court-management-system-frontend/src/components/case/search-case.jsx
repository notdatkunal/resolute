import NavBar from "../navbar";
import "../../assets/css/components/search-case.css"
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { getAllBanksAPI, getAllCasesAPI, getSearchedCaseAPI } from "../../services/adminServices";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { getArbitratorCasesAPI, getBankCasesAPI, getSearchedArbitratorCaseAPI, getSearchedBankCaseAPI } from "../../services/caseServices";
import { useDispatch, useSelector } from "react-redux";
import { addBankId } from "../../features/user/userSlice";
import { Pagination } from "react-bootstrap";


export default function SearchCase({toggleComponent}) {


    var [cases, setCases] = useState([
    ]);
    var [selectedDate, setSelectedDate] = useState("");
    var [searchQuery, setSearchQuery] = useState(""); // State to hold search query
    // const [date, setDate] = useState("");
    const [bank, setBank] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const role = useSelector((state)=> state.user.user.role);
    const userName = useSelector((state)=> state.user.user.userName);
    const bankId = useSelector((state) => state.user.user.bankId);
    const MAX_VISIBLE_PAGES = 5;    

    const headerMapping = {
        // "Case Id":"id",
        "Case No.":"caseNo",
        "Case Type":"caseType",
        "Filling Date":"socFillingDate",
        "Registration Date":"registrationDate",
    };
  



    // Pagination
    const ITEMS_PER_PAGE = 5;

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0); // Total number of pages


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const paginatedCases = cases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);





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
  
      return null; // Hide pagination if there's only one page
    };
  




    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);

    const handleIconClick = (caseData) => {
        setSelectedCase(caseData);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCase(null);
    };
    



    const openCase = async(id) => {
      debugger;
      navigate(`/casePanel/${id}`);
    }

    const hearingDates = async(id) => {
      debugger;
      navigate(`/casePanel/${id}/hearingDates`);
    }
  


  const ActionModal = ({ caseData, closeModal }) => (
      <div className="modal-overlay">
          <div className="modal-content">
              <div className="modal-header">
                  <h1 style={{textAlign:'center'}}>Actions</h1>
                  <button onClick={closeModal} style={{padding:"10px"}}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
              </div>
              <div className="modal-body">
                  {/* <button className="btn btn-primary" 
                          style={{marginBottom:'5px'}}
                          onClick={() => updateCase(caseData.id)}
                          >
                      Update
                  </button> */}
                  <button className="btn btn-primary" 
                          style={{marginBottom:'5px'}}
                          onClick={() => openCase(caseData.id)}
                          >
                      Case History
                  </button>
                  <button className="btn btn-primary"
                          style={{marginBottom:'5px'}}
                          onClick={() => hearingDates(caseData.id)}
                          >
                      Hearing Dates
                  </button>
              </div>
          </div>
      </div>
  );


    
    const renderCases = () =>
        paginatedCases.map((caseData, index) => (
          <tr key={caseData.caseId}>
            <td style={{textAlign:'center'}}>{index + 1}</td>
            {Object.keys(headerMapping).map(label => (
              <td style={{textAlign:'center'}} key={label}>{caseData[headerMapping[label]]}</td>
            ))}
          <td style={{textAlign:'center'}}>
              <i 
                  className="fa-solid fa-up-right-from-square" 
                  onClick={() => handleIconClick(caseData)}
                  style={{ cursor: 'pointer', color:"blue" }}
              ></i>
          </td>          
          </tr>
        ));



    const getBanks = async() => {
      debugger;
      const response = await getAllBanksAPI();
      if(response.status == 200){
            console.log(response.data);
            const formattedBanks = response.data.map(bankData => {
              debugger;
                if(bankData.username == userName){
                  setBank(bankData);
                  dispatch(addBankId(bankData));
                }
              });
            // }
          }else{
            toast.error('Error while calling get banks api')
          }
        }
  

        const getCases = async() => {
          debugger;
          var response = "";
          if(role == "arbitrator"){
            response = await getArbitratorCasesAPI(bankId);
          }else if(role == "bank"){
            console.log(bank);
            response = await getBankCasesAPI(bankId);
          }
          if(response.status == 200){
                debugger;
                const formattedCases = response.data.map(caseData => ({
                  ...caseData,
                    // fillingDate: formatDate(caseData.fillingDate),
                    socFillingDate: caseData.socFillingDate?format(caseData.socFillingDate, "dd MMM yyyy"):null,
                    registrationDate: caseData.registrationDate?format(caseData.registrationDate, "dd MMM yyyy"):null,
                    // registrationDate: formatDate(caseData.registrationDate),
                  }));
    
                setCases(formattedCases);
                setPageCount(Math.ceil(formattedCases.length / ITEMS_PER_PAGE));                     
                // }
              }else{
                toast.error('Error while calling get banks api')
              }
        }
            
        
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


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  

  // Function to handle form submission
  // const handleSubmit = async (event) => {
  //   debugger;
  //   event.preventDefault(); // Prevent default form submission behavior
  //   // console.log("clicked");
  //   try {
  //       const searchRequest = {
  //           'searchParameter':searchQuery,
  //           'date':selectedDate
  //         }
  //     // console.log(searchQuery);
  //     if(role == 'arbitrator'){
  //       const response = await getSearchedArbitratorCaseAPI(arbitratorId, searchRequest); // Send Axios request with search query
  //     }else if(role == 'bank'){
  //       const response = await getSearchedBankCaseAPI(bankId, searchRequest);
  //     }
  //     const formattedCases = response.data.map(caseData => ({
  //       ...caseData,
  //       // fillingDate: formatDate(caseData.fillingDate),
  //       fillingDate: caseData.fillingDate?format(caseData.fillingDate, "MMM dd, yyyy"):null,
  //       registrationDate: caseData.registrationDate?format(caseData.registrationDate, "MMM dd, yyyy"):null,
  //       // registrationDate: formatDate(caseData.registrationDate),
  //     }));
  //     setCases(formattedCases); // Update cases state with response data
  //   } catch (error) {
  //     console.error("Error searching cases:", error);
  //     // Handle error, show toast message, etc.
  //   }
  // };


  const handleSearch = async () => {
    debugger;
    // console.log("clicked");
    try {
        const searchRequest = {
            'searchParameter':searchQuery,
            'date':selectedDate
          }
          var response = "";
      // console.log(searchQuery);
      if(role == 'arbitrator'){
        response = await getSearchedArbitratorCaseAPI(arbitratorId, searchRequest); // Send Axios request with search query
      }else if(role == 'bank'){
        response = await getSearchedBankCaseAPI(bankId, searchRequest);
      }
      const formattedCases = response.data.map(caseData => ({
        ...caseData,
        // fillingDate: formatDate(caseData.fillingDate),
        socFillingDate: caseData.socFillingDate?format(caseData.socFillingDate, "dd MMM yyyy"):null,
        registrationDate: caseData.registrationDate?format(caseData.registrationDate, "dd MMM yyyy"):null,
        // registrationDate: formatDate(caseData.registrationDate),
      }));
      setCases(formattedCases); // Update cases state with response data
      setPageCount(Math.ceil(formattedCases.length / ITEMS_PER_PAGE));      
    } catch (error) {
      console.error("Error searching cases:", error);
      // Handle error, show toast message, etc.
    }
  };



  // Function to handle changes to the input field
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state with input value
  };



    useEffect(() => {
      debugger;
      getBanks();
    },[]);


    useEffect(() => {
      debugger;
      getCases();
    },[bankId]);

    useEffect(() => {
      debugger;
      handleSearch();
    },[searchQuery, selectedDate]);



    return(<>
    <main>
    <div>
        <NavBar/>
    </div>
    <div className="container2">
        <h1>Find The Case</h1>
        {/* <h2>Try below!</h2> */}
        <div className="search-box">
            <div className="search-icon"><i className="fa fa-search search-icon"></i></div>
            {/* <form className="search-form" onSubmit={handleSubmit}> */}
                <input 
                  type="text" 
                  placeholder="Search" 
                  id="search" 
                  autoComplete="off"
                  // value={searchQuery} // Bind input value to searchQuery state
                  onChange={handleInputChange}/>
              <svg className="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style={{enableBackground: 'new 0 0 671 111'}}
                  xmlSpace="preserve">
                  <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
                  <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/>
              </svg>
              <button 
                className="go-icon" 
                type="submit"
                // onClick={handleSubmit}
                style={{
                  backgroundColor:'white',
                  border:'none',
                  color: 'black',
                  padding: '0'
                }}>
                  <i className="fa fa-arrow-right"></i>
              </button>
            {/* </form> */}
        </div>
    </div>
    <div style={{
            display:"flex", 
            flexDirection:'row', 
            justifyContent:'space-between', 
            marginLeft:'5em',
            marginRight:"5em",
            marginTop:'1em'}}>
      {/* <div style={{position:'absolute', float:"left", marginTop:"4em", marginLeft:"5em"}}> */}
      {/* <div>
              <button className="btn" 
              style={{backgroundColor:"#F3525A", color:'white', height:"40px"}} 
              onClick={() => AddCase()}
              >
              Add Case</button>
      </div> */}
      <div style={{marginLeft:"10%"}}>
      <DatePicker
        selected={selectedDate}
        name='date'
        onChange={(date) => handleDateChange(date)}                
        className="form-control mt-1"
        placeholderText="Pick A Date"
        required
        />        
      </div>
    </div>
    <div className="container">
        <table className="table">
                {renderHeader()}
            <tbody>
                {renderCases()}
            </tbody>
        </table>
        {renderPagination()}        
    </div>
    </main>
    {modalVisible && <ActionModal caseData={selectedCase} closeModal={closeModal} />}
    </>);
}
