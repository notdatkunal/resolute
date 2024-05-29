import NavBar from "./navbar";
import Footer from "./footer";

export default function ARB(){
    return(<>
        <NavBar></NavBar>
        <div className="container" style={{marginTop:"8%", marginBottom:"5%"}}>
            <h1>ARB</h1>
            <h2>Specialization in Online Dispute Resolution</h2>
            <p>
                Arbitration is a method of resolving disputes outside of the court system. In arbitration, parties present their case to a neutral third party, known as an arbitrator, who then renders a decision that is binding on both parties.             
            </p>
            <p>
                This process is often chosen for its efficiency, confidentiality, and flexibility in selecting the arbitrator and procedural rules.            
            </p>
        </div>
        <Footer></Footer>
    </>);
}