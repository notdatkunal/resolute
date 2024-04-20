import "../assets/css/components/datepicker/style.css"
import "../assets/css/components/datepicker/classic.css"
import "../assets/css/components/datepicker/classic.date.css"


export default function DatePicker(){
    return(<>
    <div className="content">
        <div className="container text-left">
            <div className="row justify-content-end">
                <div className="col-lg-3">
                <form action="#">
                    <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control, date-input" 
                        id="pick-date"
                        placeholder="Pick A Date"/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </>);
}