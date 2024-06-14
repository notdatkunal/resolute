import { useEffect, useState } from "react";
import { deleteBankAPI, getAllBanksAPI, getAllCasesAPI, getCaseCountByCaseTypeAPI, getCaseCountByCaseTypeCaseStatusAPI, getCaseTypesAPI, getCasesByBankAndTypeAPI } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import "../../assets/css/components/Admin/banks.css";
import { useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";



export default function BankCases({id, toggleComponent}){



    var [caseTypes, setCaseTypes] = useState([]);
    var [countByCaseType, setCountByCaseType] = useState({
    });
    var [countByCaseStatus, setCountByCaseStatus] = useState();
    var [countByCaseStatus1, setCountByCaseStatus1] = useState();
    var [countByCaseStatus2, setCountByCaseStatus2] = useState();
    var [countByCaseStatus3, setCountByCaseStatus3] = useState();
    var [cases, setCases] = useState([
    ]);
    const [activeCaseType, setActiveCaseType] = useState("Arbitration"); // Track currently active case type




    const headerMapping = {
        "Case Id":"id",
        "Case No.":"caseNo",
        "Case Type":"caseType",
        "Filling Date":"socFillingDate",
        "Registration Date":"registrationDate",
    };



    const caseTypeActive = (caseType) =>{
      debugger;
      setActiveCaseType(caseType);
    }


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



    // Pagination
    const ITEMS_PER_PAGE = 8;

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0); // Total number of pages


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const paginatedCases = cases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);



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
  




    const getCases = async() => {
        debugger;
        const response = await getCasesByBankAndTypeAPI(id, activeCaseType);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
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
              debugger;
              toast.error('Error while calling get banks api')
            }
        }



        const updateCase = async(id) => {
          debugger;
          toggleComponent("UpdateCase", id);
        }
    
        const openCase = async(id) => {
          debugger;
          navigate(`/casePanel/${id}`);
        }
    
        const hearingDates = async(id) => {
          debugger;
          toggleComponent("HearingDates", id);
        }
      
    
    
    
      const ActionModal = ({ caseData, closeModal }) => (
          <div className="modal-overlay">
              <div className="modal-content">
                  <div className="modal-header">
                      <h1 style={{textAlign:'center'}}>Actions</h1>
                      <button onClick={closeModal} style={{padding:"10px"}}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                  </div>
                  <div className="modal-body">
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
                      <button className="btn btn-primary" 
                              style={{marginBottom:'5px'}}
                              onClick={() => updateCase(caseData.id)}
                              >
                          Update Case
                      </button>
                  </div>
              </div>
          </div>
      );
    

      

    const getTotalCaseCount = async() => {
        debugger;
        const response = await getCaseCountByCaseTypeAPI(id);
        if(response.status == 200){
          debugger;
          const caseTypeCountData = response.data;
          setCountByCaseType(caseTypeCountData);
          // console.log(activeCaseType);
          // console.log(countByCaseType);
          // if (caseTypeData.length > 0) {
          //   setCaseData(prevState => ({
          //       ...prevState,
          //       caseType: caseTypeData[0]
          //   }));
          //   }              
          // }
        }else{
            toast.error('Error while calling get banks api')
        }
    }   

    const getCaseStatusCount = async() => {
      debugger;
      const response = await getCaseCountByCaseTypeCaseStatusAPI(id, activeCaseType, "LRN Sent");
      const response1 = await getCaseCountByCaseTypeCaseStatusAPI(id, activeCaseType, "Referance Letter Issued");
      const response2 = await getCaseCountByCaseTypeCaseStatusAPI(id, activeCaseType, "Filing Claim Statement");
      const response3 = await getCaseCountByCaseTypeCaseStatusAPI(id, activeCaseType, "Award Passed");
      if(response.status == 200 || response1.status == 200 
          || response2.status == 200 || response3.status == 200){
        debugger;
        const caseStatusCountData = response.data;
        const caseStatusCountData1 = response1.data;
        const caseStatusCountData2 = response2.data;
        const caseStatusCountData3 = response3.data;
        setCountByCaseStatus(caseStatusCountData);
        setCountByCaseStatus1(caseStatusCountData1);
        setCountByCaseStatus2(caseStatusCountData2);
        setCountByCaseStatus3(caseStatusCountData3);
        // console.log(activeCaseType);
        // console.log(countByCaseType);
        // if (caseTypeData.length > 0) {
        //   setCaseData(prevState => ({
        //       ...prevState,
        //       caseType: caseTypeData[0]
        //   }));
        //   }              
        // }
      }else{
          toast.error('Error while calling get banks api')
      }
    }   
    
  


    const getCaseTypes = async() => {
        debugger;
        const response = await getCaseTypesAPI();
        if(response.status == 200){
              const caseTypeData = response.data;
              setCaseTypes(caseTypeData)
              // if (caseTypeData.length > 0) {
              //   setCaseData(prevState => ({
              //       ...prevState,
              //       caseType: caseTypeData[0]
              //   }));
              //   }              
              // }
        }else{
            toast.error('Error while calling get banks api')
        }
    }   


    
    
    const renderCaseTypes = () => {
        return caseTypes.map(caseType => (
            <button   
            className={`btn ${activeCaseType === caseType ? "active btn-primary" : ""}`}            
            onClick={() => {caseTypeActive(caseType)}}
            key={caseType}
            style={{
                width:'20%'
                }}
                >
            {caseType}
            </button>
        ));
        }
        
        
        
    const renderCases = () =>
        paginatedCases.map((caseData, index) => (
          <tr key={caseData.caseId}>
            {/* <td style={{textAlign:'center'}}>{index + 1}</td> */}
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
            
    useEffect(() =>{
        getCaseTypes();
        getCases();
        getTotalCaseCount();
        getCaseStatusCount();
    }, [])  

    useEffect(() =>{
        getCases();
    }, [activeCaseType])  
        

    
   return(<>
      <div style={{ margin: '20px' }}>
        <div style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
              gap:'40px'    
        }}>
        <div className="card border-dark mb-3" style={{width: "10rem"}}>
          <div className="card-header" 
               style={{
                textAlign:'center',
                fontSize:"18px",
                color:"black"
            }}>
              Total Cases
            </div>
          <div className="card-body text-dark">
            <h5 className="card-title" style={{textAlign:'center'}}>
              {countByCaseType[activeCaseType]}
            </h5>
          </div>
        </div>        
        <div className="card border-dark mb-3" style={{width: "10rem"}}>
          <div className="card-header" 
               style={{
                textAlign:'center',
                fontSize:"18px",
                color:"black"
            }}>
              Case Filing
            </div>
          <div className="card-body text-dark">
            <h5 className="card-title" style={{textAlign:'center'}}>
            {countByCaseStatus}
            </h5>
          </div>
        </div>        
        <div className="card border-dark mb-3" style={{width: "10rem"}}>
          <div className="card-header" 
               style={{
                textAlign:'center',
                fontSize:"18px",
                color:"black"
            }}>
              Case Filed
            </div>
          <div className="card-body text-dark">
            <h5 className="card-title" style={{textAlign:'center'}}>
            {countByCaseStatus1}
            </h5>
          </div>
        </div>        
        <div className="card border-dark mb-3" style={{width: "10rem"}}>
          <div className="card-header" 
               style={{
                textAlign:'center',
                fontSize:"18px",
                color:"black"
            }}>
              Case Order
            </div>
          <div className="card-body text-dark">
            <h5 className="card-title" style={{textAlign:'center'}}>
            {countByCaseStatus2}
            </h5>
          </div>
        </div>        
        <div className="card border-dark mb-3" style={{width: "10rem"}}>
          <div className="card-header" 
               style={{
                textAlign:'center',
                fontSize:"18px",
                color:"black"
            }}>
              Execution
            </div>
          <div className="card-body text-dark">
            <h5 className="card-title" style={{textAlign:'center'}}>
            {countByCaseStatus3}
            </h5>
          </div>
        </div>        
        </div>
        {renderCaseTypes()}
        <div style={{margin:"50px"}}>
        <table className="table table-bordered">
          {renderHeader()}
          <tbody>
          {renderCases()}
          </tbody>
        </table>        
        {renderPagination()}        
        </div>
      </div>
      {modalVisible && <ActionModal caseData={selectedCase} closeModal={closeModal} />}
    </>);
}