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
import UpdateCase from "./update-case";
import UploadBankDocument from "./upload-bankDocuments";
import UploadBorrowerDocument from "./upload-borrowerDocuments";
import UploadMeetingRecordings from "./upload-meetingRecordings";
import UploadMinutesOfMeeting from "./upload-minutesOfMeeting";
import UploadScreenshot from "./upload-screenshot";
import AddHearingDate from "./add-hearingDate";
import HearingDates from "./hearingDates";
import UploadOrder from "./upload-order";
import UpdateHearingDate from "./update-hearingDate";
import Communication from "./communication";
import BankCases from "./bank-cases";
import CaseTypes from "./case-type";
import Enquiries from "./list-enquiries";
import LogInDetails from "./login-deails";

export default function AdminDashboard(){


    const [activeComponent, setActiveComponent] = useState("Banks");
    const [id, setId] = useState("1");
    const [hearingId, setHearingId] = useState("1");
    
    const toggleComponent = (component, id) => {
      debugger;
      console.log(component);
      setActiveComponent(component);
      setId(id);
    };

    const toggleHearing = (component, id, hearingId) => {
      debugger;
      console.log(component);
      console.log(id);
      setActiveComponent(component);
      setId(id);
      setHearingId(hearingId);
    };

    const updateData = (component) => {
      debugger;
      setId(component);
    };
  
    const componentMapping = {
        Cases: <AdminSearchCase toggleComponent={toggleComponent}/>,
        CaseTypes:<CaseTypes toggleComponent={toggleComponent}/>,
        // AllCases: <Cases/>,
        Banks: <Banks toggleComponent={toggleComponent}/>,
        Enquiries: <Enquiries toggleComponent={toggleComponent}/>,
        LogInDetails: <LogInDetails toggleComponent={toggleComponent}/>,
        BankCases: <BankCases id={id} toggleComponent={toggleComponent}/>,
        Arbitrators:<Arbitrators toggleComponent={toggleComponent}/> ,
        Borrowers: <Borrowers/>,
        DocumentUpload: <UploadDocuments/>,
        BankDocumentUpload: <UploadBankDocument/>,
        BorrowerDocumentUpload: <UploadBorrowerDocument/>,
        MeetingRecordingUpload: <UploadMeetingRecordings/>,
        MinutesOfMeetingUpload: <UploadMinutesOfMeeting/>,
        ScreenshotUpload: <UploadScreenshot/>,
        OrderUpload: <UploadOrder/>,
        AddCase: <AddCase toggleComponent={toggleComponent}/>,
        AddBank: <AddBank toggleComponent={toggleComponent}/>,
        UpdateBank: <UpdateBank id={id} toggleComponent={toggleComponent}/>,
        AddArbitrator: <AddArbitrator toggleComponent={toggleComponent}/>,
        UpdateArbitrator: <UpdateArbitrator id={id} toggleComponent={toggleComponent}/>,
        UpdateCase: <UpdateCase id={id} toggleComponent={toggleComponent}/>,
        AddHearingDate: <AddHearingDate id={id} toggleComponent={toggleComponent}/>,
        HearingDates: <HearingDates id={id} hearingId={hearingId} toggleComponent={toggleHearing}/>,
        UpdateHearingDate: <UpdateHearingDate id={id} hearingId={hearingId} toggleComponent={toggleHearing}/>,
        Communication: <Communication toggleComponent={toggleComponent}/>,
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