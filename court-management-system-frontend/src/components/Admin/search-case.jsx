import NavBar from "../navbar";
import "../../assets/css/components/search-case.css"
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { getAllCasesAPI, getSearchedCaseAPI } from "../../services/adminServices";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { format } from 'date-fns';


const AdminSearchCase = ({toggleComponent}) => {


    var [cases, setCases] = useState([
    ]);
    var [selectedDate, setSelectedDate] = useState("");
    var [searchQuery, setSearchQuery] = useState(""); // State to hold search query
    // const [date, setDate] = useState("");
    const navigate = useNavigate();
    

    const headerMapping = {
        "Case Id":"id",
        "Case No.":"caseNo",
        "Case Type":"caseType",
        "Filling Date":"fillingDate",
        "Registration Date":"registrationDate",
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
    


    const getCases = async() => {
        // debugger;
        const response = await getAllCasesAPI();
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
            //   navigate("/login");
            // toast.warning("Session Time Expired");
            // }
            // else{
              const formattedCases = response.data.map(caseData => ({
                ...caseData,
                fillingDate: formatDate(caseData.fillingDate),
                // fillingDate: format(caseData.fillingDate, "MM DD YYYY"),
                registrationDate: formatDate(caseData.registrationDate),
              }));

              setCases(formattedCases);

              // }
            }else{
              toast.error('Error while calling get banks api')
            }
          }


    const AddCase = () => {
        // debugger;
        toggleComponent("AddCase");
    }


    const updateCase = async(id) => {
      debugger;
      toggleComponent("UpdateCase", id);
    }

    const openCase = async(id) => {
      debugger;
      navigate(`/case/${id}`);
    }
  
    const formatDate = (dateString) => {
      const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
      };
      return new Date(dateString).toLocaleString(undefined, options);
  };



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
                  <button className="btn btn-primary" 
                          style={{marginBottom:'5px'}}
                          onClick={() => updateCase(caseData.id)}
                          >
                      Update
                  </button>
                  <button className="btn btn-primary" 
                          style={{marginBottom:'5px'}}
                          onClick={() => openCase(caseData.id)}
                          >
                      Open
                  </button>
                  <button className="btn btn-primary"
                          style={{marginBottom:'5px'}}
                          onClick={() => addHearingDate(caseData.id)}
                          >
                      Add Hearing Date
                  </button>
              </div>
          </div>
      </div>
  );


    
    const renderCases = () =>
        cases.map((caseData, index) => (
          <tr key={caseData.caseId}>
            <td style={{textAlign:'center'}}>{index + 1}</td>
            {Object.keys(headerMapping).map(label => (
              <td style={{textAlign:'center'}} key={label}>{caseData[headerMapping[label]]}</td>
            ))}
          {/* <td style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
            <div className="row" style={{gap:"1rem"}}> 
              <button className="btn btn-primary" 
                      style={{marginBottom:'5px'}}
                      onClick={() => updateCase(caseData.id)}
                      >
                Update
              </button>
              <button className="btn btn-primary" 
                      style={{marginBottom:'5px'}}
                      onClick={() => openCase(caseData.id)}
                      >
                Open
              </button>
            </div>
            <div>
             <button className="btn btn-danger"
                    onClick={() => deleteBank(bank.bankId)}
                    >
                    Delete
                  </button> 
              <button className="btn btn-primary"
                      style={{margin:'0px', padding:'5px'}}
                      onClick={() => addHearingDate(caseData.id)}
                      >
              Add Hearing Date
              </button>
            </div>
          </td> */}
          <td style={{textAlign:'center'}}>
              <i 
                  className="fa-solid fa-up-right-from-square" 
                  onClick={() => handleIconClick(caseData)}
                  style={{ cursor: 'pointer' }}
              ></i>
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


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  

  // Function to handle form submission
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault(); // Prevent default form submission behavior
    // console.log("clicked");
    try {
        const searchRequest = {
            'searchParameter':searchQuery,
            'date':selectedDate
          }
      // console.log(searchQuery);
      const response = await getSearchedCaseAPI(searchRequest);  // Send Axios request with search query
      const formattedCases = response.data.map(caseData => ({
        ...caseData,
        fillingDate: formatDate(caseData.fillingDate),
        registrationDate: formatDate(caseData.registrationDate),
      }));
      setCases(formattedCases); // Update cases state with response data
    } catch (error) {
      console.error("Error searching cases:", error);
      // Handle error, show toast message, etc.
    }
  };


  const handleSearch = async () => {
    debugger;
    // console.log("clicked");
    try {
        const searchRequest = {
            'searchParameter':searchQuery,
            'date':selectedDate
          }
      // console.log(searchQuery);
      const response = await getSearchedCaseAPI(searchRequest); // Send Axios request with search query
      const formattedCases = response.data.map(caseData => ({
        ...caseData,
        fillingDate: formatDate(caseData.fillingDate),
        registrationDate: formatDate(caseData.registrationDate),
      }));
      setCases(formattedCases); // Update cases state with response data
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
      getCases();
    },[]);

    useEffect(() => {
      debugger;
      handleSearch();
    },[searchQuery, selectedDate]);



    return(<>
    <main>
    <div>
        <NavBar/>
    </div>
    <div className="container1">
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
                onClick={handleSubmit}
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
      <div>
              <button className="btn" 
              style={{backgroundColor:"#F3525A", color:'white', height:"40px"}} 
              onClick={() => AddCase()}
              >
              Add Case</button>
      </div>
      <div>
      <DatePicker
        selected={selectedDate}
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
    </div>
    </main>
    {modalVisible && <ActionModal caseData={selectedCase} closeModal={closeModal} />}
    </>);
}


export default AdminSearchCase; 