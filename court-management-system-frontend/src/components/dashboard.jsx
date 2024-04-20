import CaseHistory from "./case-history";
import Documents from "./documents";
import Proceedings from "./proceedings";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";
import Order from "./order";

export default function Dashboard(){


    const [activeComponent, setActiveComponent] = useState("CaseHistory");
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
      CaseHistory: <CaseHistory/>,
      Documents: <Documents />,
      Proceedings: <Proceedings />,
      Order: <Order />,
    };



    return(<>
    <div className="dashboard-main-wrapper">
        <div style={{position:"fixed", zIndex:"1"}}>
            <NavBar/>
        </div>
        <div>
            <Sidebar toggleComponent={toggleComponent}/>
        </div>
        <div className="dashboard-wrapper">
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