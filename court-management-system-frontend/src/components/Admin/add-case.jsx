import { useState } from "react";
import "../../assets/css/components/Admin/add-case.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addCase } from "../../services/adminServices";
import { toast } from "react-toastify";



export default function AddCase({toggleComponent}){

    const [caseData, setCaseData] = useState({
        state: "",
        zone: "",
        branch_name: "",
        customer_id: "",
        account_number: "",
        creditNumber: "",
        customer_name: "",
        actual_product: "",
        flag_product_group_co: "",
        nature_of_legal_action: "",
        total_tos_on_initiation_co: "",
        total_tos_on_initiation_co_in_cr: "",
        notice_date_lrn_co: null,
        reference_letter_issued_date: null,
        case_no: "",
        soc_filing_date: null,
        claim_amount_in_soc: "",
        date_of_1st_hearing: null,
        last_date_of_hearing: null,
        stages_of_last_hearing_date: "",
        next_date_of_hearing: null,
        stages_for_next_hearing: "",
        case_status: "",
        details_remark: "",
        award_date: null,
        award_amount: "",
        sec17_application_filing_date_co: null,
        sec17_order_date: null,
        sec17_status: "",
        court_name: "",
        place: "",
        arbitrator_judge_name: "",
        lawyer_name: "",
        lm_name: ""
    });


    // var [selectedFilter, setSelectedFilter] = useState("ADMIN");  
    // var [roles, setRoles] = useState([]);
    var [states, setStates] = useState(["Maharashtra"]);
    var [zones, setZones] = useState(["East", "West", "South1", "South2", "North"]);
    const [creditNumber, setCreditNumber] = useState("");

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date, fieldName) => {
        setCaseData({ ...caseData, [fieldName]: date });
    };

    const onTextChange = (args) =>{
        var copy = {...caseData};
        copy[args.target.name] = args.target.value;
        setUser(copy);
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
    



    const renderStates = () => {
    return states.map(state => (
        <option key={state} value={state}>
        {state}
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

      
    const formatCreditNumber = (input) => {
        let value = input.replace(/\D/g, '');
        if (value) {
            value = value.match(/.{1,4}/g).join(' ');
        }
        setCreditNumber(value);
    };


    const handleAccountNumberChange = (e) => {
        const maxLength = 12; // Set maximum length
        let value = e.target.value;
        
        // Enforce maximum length
        if (value.length > maxLength) {
            value = value.slice(0, maxLength);
        }

        setCaseData({ ...caseData, account_number: value });
    };

    //   const getRoles = async () => {
    //     var response = await getRolesAPI(authState);
    //     if(response.status == 200){
    //       if(response.data == "EXPIRED" || response.data == "INVALID"){
    //         navigate("/login");
    //         toast.warning("Session Time Expired");
    //       }
    //       else{
    //         setRoles(response.data);
    //       }    
    //     }else{
    //       toast.error("Failed To Load Roles");
    //     }
    //   }
  
  
      const Submit = async (event) =>{
        debugger;
        event.preventDefault();
      //   var role_name = selectedFilter;
      //   var data = authState;
        var sentData = {caseData}
        const response = await addCase(sentData);
        if(response.status == 200){
          // if(response.data == "EXPIRED" || response.data == "INVALID"){
          //   navigate("/login");
          //   toast.warning("Session Time Expired");
          // }
          // else{
            debugger;
            toggleComponent("Cases");
            toast.success("Case Added Successfully");
          // }  
        }else{
          toast.error("Failed To Add Case");
        }
      }  




    return(
    <div>
    <form onSubmit={Submit}>
    <div className="Auth-form-content col">
        <h1 className="Auth-form-title">Add Case</h1>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>State</label>
            <select className="form-control mt-1"
                    onChange={handleFilterChange}>
            {renderStates()}
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Zone</label>
            <select className="form-control mt-1"
                    onChange={handleFilterChange}>
            {renderZones()}
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Branch Name</label>
            <input
            type="text"
            name="branch_name"
            className="form-control mt-1"
            placeholder="e.g Sangli"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Customer Id</label>
            <input
            type="number"
            name="customer_id"
            className="form-control mt-1"
            placeholder="e.g 9923130244"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Account Number</label>
            <input
            type="text"
            name="account_number"
            className="form-control mt-1"
            placeholder="Account Number"
            value={caseData.account_number}
            onChange={handleAccountNumberChange}            
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Credit Card Number</label>
            <input
                type="tel"
                name="credit-number"
                className="form-control mt-1"
                placeholder="Credit Card Number"
                maxLength={19}
                value={creditNumber}
                onChange={(e) => formatCreditNumber(e.target.value)}
                required
                />
        </div>        
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Customer Name</label>
            <input
            type="text"
            name="customer_name"
            className="form-control mt-1"
            placeholder="Customer Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Actual Product</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Actual Product"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Flag-Product Group CO</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Flag-Product Group CO"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Nature of Legal Action</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Nature of Legal Action"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Total Tos On Initiation Co</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Nature of Legal Action"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Total Tos On Initiation Co In Cr.</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Nature of Legal Action"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Notice Date (LRN) Co</label>
            <div className="col">
            <DatePicker
                selected={caseData.notice_date_lrn_co}
                onChange={(date) => handleDateChange(date, "notice_date_lrn_co")}                
                className="form-control mt-1"
                placeholderText="Notice Date (LRN) Co"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Referance Later Issued Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.reference_letter_issued_date}
                onChange={(date) => handleDateChange(date, "reference_letter_issued_date")}                
                className="form-control mt-1"
                placeholderText="Reference Letter Issued Date"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Case No</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Nature of Legal Action"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>SOC Filing Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.soc_filing_date}
                onChange={(date) => handleDateChange(date, "soc_filing_date")}                
                className="form-control mt-1"
                placeholderText="Soc Filing Date"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Claim Amount in Soc</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Claim Amount in Soc"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Date of 1st Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.date_of_1st_hearing}
                onChange={(date) => handleDateChange(date, "date_of_1st_hearing")}                
                className="form-control mt-1"
                placeholderText="Date of 1st Hearing"
                required
                />        
            </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Last Date of Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.last_date_of_hearing}
                onChange={(date) => handleDateChange(date, "last_date_of_hearing")}                
                className="form-control mt-1"
                placeholderText="Last Date of Hearing"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Stages of Last Hearing Date</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Last Date of Hearing"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Next Date of Hearing</label>
            <div className="col">
            <DatePicker
                selected={caseData.next_date_of_hearing}
                onChange={(date) => handleDateChange(date, "next_date_of_hearing")}                
                className="form-control mt-1"
                placeholderText="Next Date of Hearing"
                required
                />        
            </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Stages for Next Hearing</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Last Date of Hearing"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Case Status</label>
            <select className="form-control mt-1"
                    onChange={handleFilterChange}>
                <option value="LRN Sent">LRN Sent</option>
                <option value="Award Passed">Award Passed</option>
                <option value="Referance Letter Issued">Referance Letter Issued</option>
                <option value="Filing Claim Statement">Filing Claim Statement</option>
            </select>
        </div>
        <div className="form-group mt-1 col">
            <label>Flag For Contested/Uncontested</label>
            <select className="form-control mt-1"
                    onChange={handleFilterChange}>
                <option value="contested">Contested</option>
                <option value="uncontested">Uncontested</option>
            </select>
        </div>
        </div>
        <div className="row">        
        <div className="form-group mt-1 col">
            <label>Details Remark</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Details Remark"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Award Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.award_date}
                onChange={(date) => handleDateChange(date, "award_date")}                
                className="form-control mt-1"
                placeholderText="Award Date"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Award Amount</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Award Amount"
            onChange={onTextChange}
            required
            />
        </div>
        </div>        
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Sec.17 - Application Filing Date Co</label>
            <div className="col">
            <DatePicker
                selected={caseData.sec17_application_filing_date_co}
                onChange={(date) => handleDateChange(date, "sec17_application_filing_date_co")}                
                className="form-control mt-1"
                placeholderText="sec17 Application Filing Date Co"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Sec.17 - Order Date</label>
            <div className="col">
            <DatePicker
                selected={caseData.sec17_order_date}
                onChange={(date) => handleDateChange(date, "sec17_order_date")}                
                className="form-control mt-1"
                placeholderText="Sec-17 order date"
                required
                />        
            </div>
        </div>
        <div className="form-group mt-1 col">
            <label>Sec.17 - Status</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Sec.17 - Status"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Court Name</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Court Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Place (Location of court)</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Place (Location of court)"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>Arbitrator / Judge Name</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Arbitrator / Judge Name"
            onChange={onTextChange}
            required
            />
        </div>
        </div>
        <div className="row">
        <div className="form-group mt-1 col">
            <label>Lawyer Name</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="Lawyer Name"
            onChange={onTextChange}
            required
            />
        </div>
        <div className="form-group mt-1 col">
            <label>LM Name</label>
            <input
            type="text"
            name="actual_product"
            className="form-control mt-1"
            placeholder="LM Name"
            onChange={onTextChange}
            required
            />
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