import { useEffect, useState } from "react";
import "../../assets/css/components/Admin/add-case.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addCase, getAllArbitratorsAPI, getAllBanksAPI, getCaseAPI, getCaseTypesAPI, updateCaseAPI } from "../../services/adminServices";
import { toast } from "react-toastify";



export default function UpdateCase({id, toggleComponent}){

    const [caseData, setCaseData] = useState({
        state: "",
        zone: "",
        branchName: "",
        customerId: "",
        accountNumber: "",
        creditCardNumber: "",
        customerName: "",
        actualProduct: "",
        flagProductGroup: "",
        natureOfLegalAction: "",
        totalTos: "",
        totalTosInCr: "",
        noticeDate: null,
        refLetter: null,
        caseNo: "",
        socFillingDate: null,
        claimAmountInSOC: "",
        firstHearingDate: null,
        lastHearingDate: null,
        stagesOfLastHearingDate: "",
        nextHearingDate: null,
        stagesOfNextHearingDate: "",
        caseStatus: "",
        flagForContested:"",
        detailsRemark: "",
        awardDate: null,
        awardAmount: "",
        sec17AppFillingDate: null,
        sec17OrderDate: null,
        sec17AppStatus: "",
        courtName: "",
        place: "",
        bankId: 0,
        arbitratorId: 0,
        lawyerName: "",
        lmName: ""
    });


    // var [selectedFilter, setSelectedFilter] = useState("ADMIN");  
    // var [roles, setRoles] = useState([]);
    var [states, setStates] = useState(["Maharashtra"]);
    var [caseTypes, setCaseTypes] = useState([]);
    var [zones, setZones] = useState(["East", "West", "South1", "South2", "North"]);
    var [banks, setBanks] = useState([]);
    var [arbitrators, setArbitrators] = useState([]);
    const [creditNumber, setCreditNumber] = useState("");

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date, fieldName) => {
        setCaseData({ ...caseData, [fieldName]: date });
    };

    const onTextChange = (args) =>{
        var copy = {...caseData};
        copy[args.target.name] = args.target.value;
        setCaseData(copy);
    }


    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setCaseData({ ...caseData, [name]: value });
    };
  
  
    // const renderOption = () => {
    // return roles.map(role => (
    //     <option key={role} value={role}>
    //     {role}
    //     </option>
    // ));
    // }
    

    const renderCaseTypes = () => {
        debugger;
        return caseTypes.map(caseType => (
            <option key={caseType} value={caseType}>
            {caseType}
            </option>
        ));
    }


    const renderStates = () => {
    return states.map(state => (
        <option key={state} value={state}>
        {state}
        </option>
    ));
    }


    const renderBanks = () => {
        return banks.map(bank => (
            <option key={bank.bankId} value={bank.bankId}>
            {bank.bankName}
            </option>
        ));
    }
    
    const renderArbitrators = () => {
        debugger;
        return arbitrators.map(arbitrator => (
            <option key={arbitrator.arbitratorId} value={arbitrator.arbitratorId}>
            {arbitrator.arbitratorName}
            </option>
        ));
    }


    const renderZones = () => {
    return zones.map(zone => (
        <option key={zone} value={zone}>
        {zone}
        </option>
    ));
    }



    const getCaseTypes = async() => {
        debugger;
        const response = await getCaseTypesAPI();
        if(response.status == 200){
              const caseTypeData = response.data;
              setCaseTypes(caseTypeData)
        }else{
            toast.error('Error while calling get banks api')
        }
    }   



      
    const formatCreditNumber = (input) => {
        let value = input.replace(/\D/g, '');
        if (value) {
            value = value.match(/.{1,4}/g).join(' ');
        }
        setCreditNumber(value);
        setCaseData({ ...caseData, creditCardNumber: value });
    };


    const handleAccountNumberChange = (e) => {
        const maxLength = 12; // Set maximum length
        let value = e.target.value;
        
        // Enforce maximum length
        if (value.length > maxLength) {
            value = value.slice(0, maxLength);
        }

        setCaseData({ ...caseData, accountNumber: value });
    };

  
    const getBanks = async() => {
        debugger;
        const response = await getAllBanksAPI();
        if(response.status == 200){
              const bankData = response.data;
              setBanks(bankData)
        }else{
            toast.error('Error while calling get banks api')
        }
        }   


    const getCase = async(id) => {
        debugger;
        const response = await getCaseAPI(id);
        if(response.status == 200){
                setCaseData(response.data);
                // }
            }else{
                toast.error('Error while calling get bank api')
            }
    }
    
    





    const getAllArbitrators = async() => {
        debugger;
        const response = await getAllArbitratorsAPI();
        if(response && response.status == 200){
          debugger;
            const arbitratorsData = response.data;
            setArbitrators(arbitratorsData);
        }else{
          toast.error('Error while calling get arbitrators api')
        }
      }
    

  
      const Submit = async (event) =>{
        debugger;
        event.preventDefault();
        const response = await updateCaseAPI(caseData, id);
        if(response.status == 200){
            debugger;
            toggleComponent("Cases");
            toast.success("Case Updated Successfully");
          // }  
        }else{
          toast.error("Failed To Update Case");
        }
      }  


    useEffect(() =>{
        getCase(id);
        getBanks();
        getAllArbitrators();
        getCaseTypes();
    }, [])  



    return(
    <div>
    <form onSubmit={Submit}>
    <div className="Auth-form-content col">
        <h1 className="Auth-form-title">Add Case</h1>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>State</label>
            <select className="form-control mt-1"
                    name="state"
                    value={caseData.state}
                    onChange={handleFilterChange}>
            {renderStates()}
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Zone</label>
            <select className="form-control mt-1"
                    name="zone"
                    value={caseData.zone}
                    onChange={handleFilterChange}>
            {renderZones()}
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Branch Name</label>
            <input
            type="text"
            name="branchName"
            className="form-control mt-1"
            placeholder="e.g Sangli"
            onChange={onTextChange}
            value={caseData.branchName}
            />
        </div>
        </div>        
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Customer Id</label>
            <input
            type="number"
            name="customerId"
            className="form-control mt-1"
            placeholder="e.g 9923130244"
            onChange={onTextChange}
            value={caseData.customerId}            
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Account Number</label>
            <input
            type="text"
            name="accountNumber"
            className="form-control mt-1"
            placeholder="Account Number"
            value={caseData.accountNumber}
            onChange={handleAccountNumberChange}            
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Credit Card Number</label>
            <input
                type="tel"
                name="creditNumber"
                className="form-control mt-1"
                placeholder="Credit Card Number"
                maxLength={19}
                value={creditNumber}
                onChange={(e) => formatCreditNumber(e.target.value)}
                />
        </div>        
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Customer Name</label>
            <input
            type="text"
            name="customerName"
            className="form-control mt-1"
            placeholder="Customer Name"
            onChange={onTextChange}
            value={caseData.customerName}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Actual Product</label>
            <input
            type="text"
            name="actualProduct"
            className="form-control mt-1"
            placeholder="Actual Product"
            onChange={onTextChange}
            value={caseData.actualProduct}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Flag-Product Group CO</label>
            <input
            type="text"
            name="flagProductGroup"
            className="form-control mt-1"
            placeholder="Flag-Product Group CO"
            onChange={onTextChange}
            value={caseData.flagProductGroup}
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Nature of Legal Action</label>
            <input
            type="text"
            name="natureOfLegalAction"
            className="form-control mt-1"
            placeholder="Nature of Legal Action"
            onChange={onTextChange}
            value={caseData.natureOfLegalAction}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Total Tos On Initiation Co</label>
            <input
            type="text"
            name="totalTos"
            className="form-control mt-1"
            placeholder="Total Tos On Initiation Co"
            value={caseData.totalTos}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Total Tos On Initiation Co In Cr.</label>
            <input
            type="text"
            name="totalTosInCr"
            className="form-control mt-1"
            placeholder="Total Tos On Initiation Co In Cr."
            value={caseData.totalTosInCr}
            onChange={onTextChange}
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Notice Date (LRN) Co</label>
            <div className="col">
            <DatePicker
                selected={caseData.noticeDate}
                onChange={(date) => handleDateChange(date, "noticeDate")}                
                className="form-control mt-1"
                placeholderText="Notice Date (LRN) Co"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Referance Later Issued Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.refLetter}
                onChange={(date) => handleDateChange(date, "refLetter")}                
                className="form-control mt-1"
                placeholderText="Reference Letter Issued Date"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Case Type</label>
            <select className="form-control mt-1"
                    name="type"
                    value={caseData.type}
                    onChange={handleFilterChange}>
            {renderCaseTypes()}
            </select>
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Case No</label>
            <input
            type="text"
            name="caseNo"
            className="form-control mt-1"
            placeholder="Case No"
            onChange={onTextChange}
            value={caseData.caseNo}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>SOC Filing Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.socFillingDate}
                onChange={(date) => handleDateChange(date, "socFillingDate")}                
                className="form-control mt-1"
                placeholderText="Soc Filing Date"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Claim Amount in Soc</label>
            <input
            type="text"
            name="claimAmountInSOC"
            className="form-control mt-1"
            placeholder="Claim Amount in Soc"
            onChange={onTextChange}
            value={caseData.claimAmountInSOC}
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Date of 1st Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.firstHearingDate}
                onChange={(date) => handleDateChange(date, "firstHearingDate")}                
                className="form-control mt-1"
                placeholderText="Date of 1st Hearing"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Last Date of Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.lastHearingDate}
                onChange={(date) => handleDateChange(date, "lastHearingDate")}                
                className="form-control mt-1"
                placeholderText="Last Date of Hearing"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Stages of Last Hearing Date</label>
            <input
            type="text"
            name="stagesOfLastHearingDate"
            className="form-control mt-1"
            placeholder="Stages of Last Hearing Date"
            value={caseData.stagesOfLastHearingDate}
            onChange={onTextChange}
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Next Date of Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.nextHearingDate}
                onChange={(date) => handleDateChange(date, "nextHearingDate")}                
                className="form-control mt-1"
                placeholderText="Next Date of Hearing"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Stages for Next Hearing</label>
            <input
            type="text"
            name="stagesOfNextHearingDate"
            className="form-control mt-1"
            placeholder="Stages for Next Hearing"
            value={caseData.stagesOfNextHearingDate}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Case Status</label>
            <select className="form-control mt-1"
                    name="caseStatus"
                    value={caseData.caseStatus}
                    onChange={handleFilterChange}>
                <option value="LRN Sent">LRN Sent</option>
                <option value="Award Passed">Award Passed</option>
                <option value="Referance Letter Issued">Referance Letter Issued</option>
                <option value="Filing Claim Statement">Filing Claim Statement</option>
            </select>
        </div>
        </div>
        <div className="row">        
        <div className="form-group mt-1 col">
            <label>Flag For Contested/Uncontested</label>
            <select className="form-control mt-1"
                    name="flagForContested"
                    value={caseData.flagForContested}
                    onChange={handleFilterChange}>
                <option value="contested">Contested</option>
                <option value="uncontested">Uncontested</option>
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Details Remark</label>
            <input
            type="text"
            name="detailsRemark"
            className="form-control mt-1"
            placeholder="Details Remark"
            value={caseData.detailsRemark}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Award Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.awardDate}
                onChange={(date) => handleDateChange(date, "awardDate")}                
                className="form-control mt-1"
                placeholderText="Award Date"
                />        
            </div>
        </div>
        </div>        
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Award Amount</label>
            <input
            type="text"
            name="awardAmount"
            className="form-control mt-1"
            placeholder="Award Amount"
            value={caseData.awardAmount}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Sec.17 - Application Filing Date Co</label>
            <div className="col">
            <DatePicker
                selected={caseData.sec17AppFillingDate}
                onChange={(date) => handleDateChange(date, "sec17AppFillingDate")}                
                className="form-control mt-1"
                placeholderText="sec17 Application Filing Date Co"
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Sec.17 - Order Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.sec17OrderDate}
                onChange={(date) => handleDateChange(date, "sec17OrderDate")}                
                className="form-control mt-1"
                placeholderText="Sec-17 order date"
                />        
            </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Sec.17 - Status</label>
            <input
            type="text"
            name="sec17AppStatus"
            className="form-control mt-1"
            placeholder="Sec.17 - Status"
            value={caseData.sec17AppStatus}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Court Name</label>
            <input
            type="text"
            name="courtName"
            className="form-control mt-1"
            placeholder="Court Name"
            value={caseData.courtName}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Place (Location of court)</label>
            <input
            type="text"
            name="place"
            className="form-control mt-1"
            placeholder="Place (Location of court)"
            value={caseData.place}
            onChange={onTextChange}
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Lawyer Name</label>
            <input
            type="text"
            name="lawyerName"
            className="form-control mt-1"
            placeholder="Lawyer Name"
            value={caseData.lawyerName}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Arbitrator / Judge Name</label>
            <select className="form-control mt-1"
                    name="arbitratorId"
                    value={caseData.arbitratorId}
                    onChange={handleFilterChange}>
            {renderArbitrators()}
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>LM Name</label>
            <input
            type="text"
            name="lmName"
            className="form-control mt-1"
            placeholder="LM Name"
            value={caseData.lmName}
            onChange={onTextChange}
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Bank Name</label>
            <select className="form-control mt-1"
                    name="bankId"
                    value={caseData.bankId}
                    onChange={handleFilterChange}>
            {renderBanks()}
            </select>
        </div>
        </div>
        <div color="red" id="ErrorBox">
        </div>
        <div className="row mt-3">
            <div className="col"></div>        
            <div className="col">
                <button type="submit" className="btn btn-primary btn-block" onClick={Submit}>
                Submit
                </button>
            </div>
            <div className="col">
                <button type="submit" className="btn btn-danger btn-block" onClick={() => toggleComponent("Cases")}>
                Cancel
                </button>
            </div>
            <div className="col"></div>        
        </div>
        </div>
    <div className="col">
    </div>
    </form>
    </div>);
}