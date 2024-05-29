import CaseHistory from "./case/case-history";
import Documents from "./case/documents";
import Proceedings from "./case/proceedings";
import NavBar from "./navbar";
import Sidebar from "./case/sidebar";
import { useState } from "react";
import Order from "./case/order";
import Communication from "./case/communication";

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
      Documents: <Documents id={id}/>,
      Proceedings: <Proceedings id={id}/>,
      Order: <Order id={id}/>,
      Communication:<Communication id={id}/>
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