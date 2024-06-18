import React from 'react';
import "../../assets/css/components/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Sidebar = ({toggleComponent}) => {

  const toggleCases = () => {
    // debugger;
    toggleComponent("Cases");
  };

  // const toggleAllCases = () => {
  //   // debugger;
  //   toggleComponent("AllCases");
  // };

  const toggleBanks = () => {
    toggleComponent("Banks");
  };

  const toggleArbitrators = () => {
    // debugger;
    // console.log("Clicked on Documents");
    toggleComponent("Arbitrators");
  };


  const toggleCaseTypes = () => {
    // debugger;
    // console.log("Clicked on Documents");
    toggleComponent("CaseTypes");
  };

  
  const toggleBorrowers = () => {
    toggleComponent("Borrowers");
  };

  const toggleDocumentUpload = () => {
    toggleComponent("DocumentUpload");
  };

  const toggleBankDocumentUpload = () => {
    toggleComponent("BankDocumentUpload");
  };

  const toggleBorrowerDocumentUpload = () => {
    toggleComponent("BorrowerDocumentUpload");
  };

  const toggleMeetingRecordingUpload = () => {
    toggleComponent("MeetingRecordingUpload");
  };

  const toggleMinutesOfMeetingUpload = () => {
    toggleComponent("MinutesOfMeetingUpload");
  };

  const toggleScreenshotUpload = () => {
    toggleComponent("ScreenshotUpload");
  };

  const toggleOrderUpload = () => {
    toggleComponent("OrderUpload");
  };

  const toggleCommunication = () => {
    toggleComponent("Communication");
  }

  const toggleEnquiries = () => {
    toggleComponent("Enquiries");
  }

  const toggleLogInDetails = () => {
    toggleComponent("LogInDetails");
  }


  return (
    <div className="nav-left-sidebar sidebar-dark" style={{}}>
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">
                Menu
              </li>
                <li className="nav-item">
                  <a className="nav-link active" 
                    onClick={() => toggleBanks()}
                    data-toggle="collapse" 
                    aria-expanded="false" 
                    data-target="#submenu-2" 
                    aria-controls="submenu-2">
                    <i className="fa-solid fa-building-columns"></i>
                    Banks
                    </a>
                </li>
              <li className="nav-item ">
                <a className="nav-link" 
                   onClick={() => {toggleCases()}}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-1" 
                   aria-controls="submenu-1">
                   <i className="fa-solid fa-briefcase"></i>
                    Cases <span className="badge badge-success">6</span>
                </a>
                {/* <div id="submenu-1" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false">
                         <i className="fa-solid fa-search"></i>                          
                          Search Case</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                          data-toggle="collapse" 
                          aria-expanded="false"  
                          data-target="#submenu-1-1" 
                          aria-controls="submenu-1-1"       
                          onClick={() => {toggleAllCases()}}>
                      <i className="fa-solid fa-folder"></i>                        
                      All Cases</a>
                    </li>
                  </ul>
                </div> */}
              </li> 
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleArbitrators()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                  <i className="fa-solid fa-gavel"></i>
                   Arbitrators
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleCaseTypes()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-3" 
                   aria-controls="submenu-3">
                  <i class="fa-solid fa-layer-group"></i>                    
                    CaseTypes
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleBorrowers()} 
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                    <i className="fa-solid fa-users-line"></i>
                    Borrowers
                </a>
              </li> */}              
              <li className="nav-item">
                <a className="nav-link" 
                  //  onClick={() => toggleUpload()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-5" 
                   aria-controls="submenu-5">
                    <i className="fa-solid fa-upload"></i>
                    Upload
                </a>
                <div id="submenu-5" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false"
                         onClick={() => toggleDocumentUpload()}
                         >
                         <i className="fa-solid fa-file-arrow-up"></i>                          
                          Documents</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false"
                         onClick={() => toggleBankDocumentUpload()}
                         >

                         <i className="fa-solid fa-file-arrow-up"></i>                          
                          Bank Documents</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false"
                         onClick={() => toggleBorrowerDocumentUpload()}                         
                         >
                         <i className="fa-solid fa-file-arrow-up"></i>                          
                          Borrower Documents</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         onClick={() => toggleMeetingRecordingUpload()}
                      >                        
                      <i className="fa-solid fa-video"></i>
                        Meeting Recordings</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                       onClick={() => toggleMinutesOfMeetingUpload()}
                      >
                      <i className="fa-solid fa-file-video"></i>
                        Minutes of Meeting</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false"
                         onClick={() => toggleScreenshotUpload()}
                         >
                          <i className="fa-solid fa-file-image"></i>
                          Screenshot</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false"
                         onClick={() => toggleOrderUpload()}
                         >
                          <i className="fa-solid fa-file-image"></i>
                          Order</a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <a className="nav-link" 
                     onClick={() => toggleCommunication()}
                    data-toggle="collapse" 
                    aria-expanded="false" 
                    data-target="#submenu-6" 
                    aria-controls="submenu-6">
                      <i class="fa-brands fa-whatsapp"></i>
                      Communication
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" 
                     onClick={() => toggleEnquiries()}
                    data-toggle="collapse" 
                    aria-expanded="false" 
                    data-target="#submenu-7" 
                    aria-controls="submenu-7">
                      <i class="fa-solid fa-message"></i>
                      Enquiries
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" 
                     onClick={() => toggleLogInDetails()}
                    data-toggle="collapse" 
                    aria-expanded="false" 
                    data-target="#submenu-8" 
                    aria-controls="submenu-8">
                      <i class="fa-solid fa-lock"></i>
                      Log In Details
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
