import NavBar from "../navbar";
import Sidebar from "./sidebar";
import { useState } from "react";
import Cases from "./cases";
import Banks from "./banks";
import Arbitrators from "./arbitrators";
import Borrowers from "./borrowers";
import UploadDocuments from "./upload-documents";
import AdminSearchCase from "./search-case";

export default function AdminDashboard(){


    const [activeComponent, setActiveComponent] = useState("Cases");
    const [id, setId] = useState("1");
    
    
    const toggleComponent = (component) => {
    //   debugger;
      console.log(component);
      setActiveComponent(component);
    };

    const updateData = (component) => {
      debugger;
      setId(component);
    };
  
    const componentMapping = {
        Cases: <AdminSearchCase/>,
        AllCases: <Cases/>,
        Banks: <Banks/>,
        Arbitrators:<Arbitrators/> ,
        Borrowers: <Borrowers/>,
        Upload: <UploadDocuments/>,
    };



    return(<>
    <div className="dashboard-main-wrapper">
        <div style={{position:"fixed", zIndex:"1"}}>
            <NavBar/>
        </div>
        <div>
            <Sidebar toggleComponent={toggleComponent}/>
        </div>
        <div className="dashboard-wrapper" style={{zIndex:"0"}}>
            <div className="dashboard-influence">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            {componentMapping[activeComponent]}        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </>);
}