import NavBar from "./navbar";
import Footer from "./footer";

export default function Conciliation(){
    return(<>
        <NavBar></NavBar>
        <div className="container" style={{marginTop:"8%", marginBottom:"5%"}}>
            <h1>Conciliation</h1>
            <p>
                Conciliation shares similarities with mediation but typically involves a more active role for the conciliator in proposing solutions and encouraging compromise. Similar to mediation, conciliation aims to resolve disputes amicably and without resorting to litigation. It often proves beneficial in cases where emotions are high, and parties may need additional guidance to find resolution            
            </p>
        </div>
        <Footer></Footer>
    </>);
}