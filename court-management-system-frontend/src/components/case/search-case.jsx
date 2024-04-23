import NavBar from "../navbar";
import "../../assets/css/components/search-case.css"
import DatePicker from "../datepicker";



export default function SearchCase(){
    return(<>
    <main>
    <div>
        <NavBar/>
    </div>
    <div className="container1">
        <h1>Find The Case</h1>
        {/* <h2>Try below!</h2> */}
        <div className="search-box">
            <div className="search-icon"><i className="fa fa-search search-icon"></i></div>
            <form action="" className="search-form">
                <input type="text" placeholder="Search" id="search" autoComplete="off"/>
            </form>
            <svg className="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style={{enableBackground: 'new 0 0 671 111'}}
                xmlSpace="preserve">
                <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
                <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/>
            </svg>
            <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
        </div>
    </div>
    <DatePicker></DatePicker>
    <div className="container">
        <table className="table">
            <thead>
                <th>Serial No.</th>
                <th>Case No.</th>
                <th>Case Type</th>
                <th>Filling Date</th>
                <th>Registration Number</th>
                <th>Registration Date</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    </main>
    </>);
}