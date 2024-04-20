import NavBar from "./navbar";
import Sidebar from "./sidebar";
import "../assets/css/components/case.css"



export default function CaseHistory(){
    return(
        <>
                                {/* <div class="card influencer-profile-data"> */}
                                    {/* <div class="card-body"> */}
                                        {/* <div class="row"> */}
                                            {/* <div class="col-xl-12 col-lg-8 col-md-8 col-sm-8 col-12"> */}
                                                {/* <div class="user-avatar-info"> */}
                                                    {/* <div class="m-b-20">
                                                        <div class="user-avatar-name">
                                                            <h2 class="mb-1">Case Type</h2>
                                                        </div>
                                                    </div>
                                                        <div class="user-avatar-address">
                                                            <span>SUMMARY CIVIL SUIT</span>
                                                        </div>
                                                    </div> */}
                                                    <table className="table table-bordered">
                                                        <thead className="table-active table-dark">
                                                            <tr>
                                                                <th colSpan={2} style={{textAlign:"center"}}>Case Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Case Type</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>SUMMARY CIVIL SUIT</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Filling Number</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>112150/2019</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Filling Date</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>08-11-2019</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Registration Number</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>100051/2021</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Registration Date</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>26-11-2019</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>CNR Number</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>MHCC010114862019</td>
                                                            </tr>
                                                        </tbody>
                                                        <thead className="table-active table-dark">
                                                            <th colSpan={2} style={{textAlign:"center"}}>Case Status</th>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>First Hearing Date</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>06-01-2020</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Next Hearing Date</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>07-05-2024</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Case Stage</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>Summons for judgement hearing</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" style={{textAlign:"center"}}>Court Number And Judge</th>
                                                                <td colSpan={2} style={{textAlign:"center"}}>83-Court 83 ADDL. SESSIONS JUDGE</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            {/* </div> */}
                                        {/* </div> */}
                                    {/* </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
}