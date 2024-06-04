import CaseHistory from "./case/case-history";
import Documents from "./case/documents";
import Proceedings from "./case/proceedings";
import NavBar from "./navbar";
import Sidebar from "./case/sidebar";
import { useState } from "react";
import Order from "./case/order";
import Communication from "./case/communication";
import { useParams } from "react-router-dom";

export default function Dashboard(){


    const [activeComponent, setActiveComponent] = useState("CaseHistory");
    const { id } = useParams();    
    
    const toggleComponent = (component) => {
      debugger;
      console.log(component);
      setActiveComponent(component);
    };

    const updateData = (component) => {
      debugger;
      setId(component);
    };
  
    const componentMapping = {
      CaseHistory: <CaseHistory id={id} toggleComponent={toggleComponent}/>,
      Documents: <Documents id={id} toggleComponent={toggleComponent}/>,
      Proceedings: <Proceedings id={id} toggleComponent={toggleComponent}/>,
      Order: <Order id={id} toggleComponent={toggleComponent}/>,
      Communication:<Communication id={id} toggleComponent={toggleComponent}/>
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