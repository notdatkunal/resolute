import NavBar from "../navbar";
import "../../assets/css/components/search-case.css"
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { getAllCasesAPI, getSearchedCaseAPI } from "../../services/adminServices";
import { useEffect, useState } from "react";
import axios from "axios";



const AdminSearchCase = ({toggleComponent}) => {


    var [cases, setCases] = useState([
    ]);
    var [selectedDate, setSelectedDate] = useState("");
    var [searchQuery, setSearchQuery] = useState(""); // State to hold search query
    // const [date, setDate] = useState("");

    

    const headerMapping = {
        "Serial No.":"serialNo",
        "Case No.":"caseNo",
        "Case Type":"caseType",
        "Filling Date":"fillingDate",
        "Registration Number":"registrationNumber",
        "Registration Date":"registrationDate",
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
              setCases(response.data);
              // }
            }else{
              toast.error('Error while calling get banks api')
            }
          }


    const AddCase = () => {
        // debugger;
        toggleComponent("AddCase");
    }



    
    const renderCases = () =>
        cases.map(caseData => (
          <tr key={caseData.caseDataId}>
            {Object.keys(headerMapping).map(label => (
              <td style={{textAlign:'center'}} key={label}>{caseData[headerMapping[label]]}</td>
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
      const response = await getSearchedCaseAPI(searchRequest); // Send Axios request with search query
      setCases(response.data); // Update cases state with response data
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
      setCases(response.data); // Update cases state with response data
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
    </>);
}


export default AdminSearchCase; 