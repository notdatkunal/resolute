import React from 'react';
import "../../assets/css/components/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Sidebar = ({toggleComponent}) => {

  const toggleCases = () => {
    // debugger;
    toggleComponent("Cases");
  };

  const toggleAllCases = () => {
    // debugger;
    toggleComponent("AllCases");
  };

  const toggleBanks = () => {
    toggleComponent("Banks");
  };


  const toggleArbitrators = () => {
    // debugger;
    // console.log("Clicked on Documents");
    toggleComponent("Arbitrators");
  };

  const toggleBorrowers = () => {
    toggleComponent("Borrowers");
  };

  const toggleUpload = () => {
    toggleComponent("Upload");
  };



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
              <li className="nav-item ">
                <a className="nav-link active" 
                   onClick={() => {toggleCases()}}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-1" 
                   aria-controls="submenu-1">
                   <i className="fa-solid fa-briefcase"></i>
                    Cases <span className="badge badge-success">6</span>
                </a>
                <div id="submenu-1" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    {/* <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false">
                         <i class="fa-solid fa-search"></i>                          
                          Search Case</a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link"
                          data-toggle="collapse" 
                          aria-expanded="false"  
                          data-target="#submenu-1-1" 
                          aria-controls="submenu-1-1"       
                          onClick={() => {toggleAllCases()}}>
                      <i class="fa-solid fa-folder"></i>                        
                      All Cases</a>
                    </li>
                  </ul>
                </div>
              </li> 
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleBanks()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                  <i class="fa-solid fa-building-columns"></i>
                   Banks
                  </a>
                {/* <div id="submenu-2" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="pages/cards.html">Cards <span className="badge badge-secondary">New</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/general.html">General</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/carousel.html">Carousel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/listgroup.html">List Group</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/typography.html">Typography</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/accordions.html">Accordions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/tabs.html">Tabs</a>
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
                  <i class="fa-solid fa-gavel"></i>
                   Arbitrators
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleBorrowers()} 
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                    <i class="fa-solid fa-users-line"></i>
                    Borrowers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                  //  onClick={() => toggleUpload()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-5" 
                   aria-controls="submenu-5">
                    <i class="fa-solid fa-upload"></i>
                    Upload
                </a>
                <div id="submenu-5" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" 
                         aria-expanded="false">
                         <i class="fa-solid fa-file-arrow-up"></i>                          
                          Documents</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard-finance.html">
                      <i class="fa-solid fa-video"></i>
                        Meeting Recordings</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard-sales.html">
                      <i class="fa-solid fa-file-video"></i>
                        Minutes of Meeting</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" 
                         href="#" 
                         aria-expanded="false">
                          <i class="fa-solid fa-file-image"></i>
                          Screenshot</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
