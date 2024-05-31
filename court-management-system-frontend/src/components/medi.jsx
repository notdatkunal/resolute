import NavBar from "./navbar";
import Footer from "./footer";

export default function Medi(){
    return(<>
        <NavBar></NavBar>
        <div className="container" style={{marginTop:"8%", marginBottom:"5%"}}>
            <h1>Mediation</h1>
            <p>
                Mediation involves a neutral third party, the mediator, who facilitates communication and negotiation between disputing parties to help them reach a voluntary agreement. Unlike arbitration, the mediator does not impose a decision but rather assists the parties in finding common ground and crafting mutually acceptable solutions. Mediation is prized for its informality, cost-effectiveness, and ability to preserve relationships.            
            </p>
        </div>
        <Footer></Footer>
    </>);
}