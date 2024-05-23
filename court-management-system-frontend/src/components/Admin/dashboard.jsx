import NavBar from "../navbar";
import Sidebar from "./sidebar";
import { useState } from "react";
import Banks from "./banks";
import Arbitrators from "./arbitrators";
import Borrowers from "./borrowers";
import UploadDocuments from "./upload-documents";
import AdminSearchCase from "./search-case";
import AddCase from "./add-case";
import AddBank from "./add-bank";
import AddArbitrator from "./add-arbitrator";
import UpdateBank from "./update-bank";
import UpdateArbitrator from "./update-arbitrator";

export default function AdminDashboard(){


    const [activeComponent, setActiveComponent] = useState("Cases");
    const [id, setId] = useState("1");
    
    
    const toggleComponent = (component, id) => {
      debugger;
      console.log(component);
      setActiveComponent(component);
      setId(id);
    };

    const updateData = (component) => {
      debugger;
      setId(component);
    };
  
    const componentMapping = {
        Cases: <AdminSearchCase toggleComponent={toggleComponent}/>,
        // AllCases: <Cases/>,
        Banks: <Banks toggleComponent={toggleComponent}/>,
        Arbitrators:<Arbitrators toggleComponent={toggleComponent}/> ,
        Borrowers: <Borrowers/>,
        DocumentUpload: <UploadDocuments/>,
        AddCase: <AddCase toggleComponent={toggleComponent}/>,
        AddBank: <AddBank toggleComponent={toggleComponent}/>,
        UpdateBank: <UpdateBank id={id} toggleComponent={toggleComponent}/>,
        AddArbitrator: <AddArbitrator toggleComponent={toggleComponent}/>,
        UpdateArbitrator: <UpdateArbitrator id={id} toggleComponent={toggleComponent}/>,
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