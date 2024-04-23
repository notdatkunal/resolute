import React from 'react';
import "../../assets/css/components/sidebar.css"
import CaseHistory from './case-history';



const Sidebar = ({toggleComponent}) => {


  const toggleOrder = () => {
    toggleComponent("Order");
  };

  const toggleCaseHistory = () => {
    // debugger;
    toggleComponent("CaseHistory");
  };

  const toggleDocuments = () => {
    // debugger;
    // console.log("Clicked on Documents");
    toggleComponent("Documents");
  };

  const toggleProceedings = () => {
    toggleComponent("Proceedings");
  };

  const toggleCommunication = () => {
    toggleComponent("Communication");
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
                   onClick={() => {toggleCaseHistory()}}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-1" 
                   aria-controls="submenu-1">
                   <i className="fa-solid fa-briefcase"></i>
                    Case History <span className="badge badge-success">6</span>
                </a>
                {/* <div id="submenu-1" className="collapse submenu" style={{}}>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" 
                         data-toggle="collapse" 
                         aria-expanded="false" 
                         data-target="#submenu-1-2" 
                         aria-controls="submenu-1-2">E-Commerce</a>
                      <div id="submenu-1-2" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="index.html">E Commerce Dashboard</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ecommerce-product.html">Product List</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ecommerce-product-single.html">Product Single</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ecommerce-product-checkout.html">Product Checkout</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard-finance.html">Finance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard-sales.html">Sales</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-1" aria-controls="submenu-1-1">Influencer</a>
                      <div id="submenu-1-1" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="dashboard-influencer.html">Influencer</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="influencer-finder.html">Influencer Finder</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="influencer-profile.html">Influencer Profile</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </li> 
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleDocuments()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                   <i className="fa-solid fa-file"></i>
                    Documents
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
                   onClick={() => toggleProceedings()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                   <i className="fa-solid fa-scale-balanced"></i>
                   Proceedings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleOrder()} 
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                    <i className="fa-solid fa-gavel"></i>
                    Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                   onClick={() => toggleCommunication()}
                   data-toggle="collapse" 
                   aria-expanded="false" 
                   data-target="#submenu-2" 
                   aria-controls="submenu-2">
                    <i className="fa-solid fa-message"></i>
                    Communication
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
