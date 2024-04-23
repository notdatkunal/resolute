export default function Proceedings(){
    return(<>
    {/* <h1 style={{textAlign:"center"}}>Proceedings</h1> */}
    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>First Hearing Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>11/05/2024</th>
            </tr>
        </tbody>
    </table>

    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>Next Hearing Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colSpan={2} style={{textAlign:"center"}}>20/05/2024</th>
            </tr>
        </tbody>
    </table>
    <table className="table table-bordered">
        <thead className="table-active table-dark">
            <tr>
                <th style={{textAlign:"center"}}>Hearing Dates</th>
                <th style={{textAlign:"center"}}>Meeting Recordings</th>
                <th style={{textAlign:"center"}}>Minutes of Meetings</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" style={{textAlign:"center"}}>11/05/2024</th>
                <td style={{textAlign:"center"}}>View</td>
                <td style={{textAlign:"center"}}>View</td>
            </tr>
            <tr>
                <th scope="row" style={{textAlign:"center"}}>12/05/2024</th>
                <td style={{textAlign:"center"}}>View</td>
                <td style={{textAlign:"center"}}>View</td>
            </tr>
            <tr>
                <th scope="row" style={{textAlign:"center"}}>15/05/2024</th>
                <td style={{textAlign:"center"}}>View</td>
                <td style={{textAlign:"center"}}>View</td>
            </tr>
        </tbody>
    </table>
    </>);
}