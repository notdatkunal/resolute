import Footer from "./footer";
import NavBar from "./navbar";

export default function Faq(){
    return(
        <>
        <NavBar></NavBar>
        <div className="container" style={{marginTop:"7%", marginBottom:"5%"}}>
            <h1>FAQ</h1>
            <h2>Online Dispute Resolution through Arbitration System</h2>
            <h4>1. What is online dispute resolution (ODR) through arbitration?</h4>
            <p>   
                Online dispute resolution through arbitration is a method of resolving disputes using digital platforms and technology. Arbitration involves a neutral third party, known as an arbitrator, who reviews evidence and arguments presented by both parties and makes a binding decision to resolve the dispute.
            </p>
            <h4>2. How does online arbitration work?</h4>
            <p>   
                Online arbitration typically involves the parties submitting their case, materials, evidence, and arguments through a secure online platform. The arbitrator then reviews these materials remotely and conducts virtual hearings. Finally, the arbitrator renders a decision, which is legally binding on both parties.            
            </p>
            <h4>3. What are the advantages of online arbitration?</h4>
            <p>   
            - Convenience: Parties can participate in the arbitration process from anywhere with an internet connection, eliminating the need for physical attendance.
            - Efficiency: Online arbitration often proceeds more quickly than traditional methods, as there are no scheduling conflicts or delays associated with in-person hearings.
            - Cost-effectiveness: Without the need for travel or accommodation expenses, online arbitration can be more affordable for parties involved.
            - Accessibility: Online arbitration makes dispute resolution more accessible to individuals and businesses worldwide, regardless of geographic location.
            </p>
            <h4>4. Is online arbitration legally binding?</h4>
            <p>   
                Yes, the decision reached through online arbitration is legally binding on both parties, similar to traditional arbitration.             
            </p>
            <h4>5. How can I ensure a fair arbitration process online?</h4>
            <p>   
                - Choose a reputable ODR platform or arbitration service provider with established protocols for fairness and impartiality.

                  Participate actively in the process, providing all relevant information and cooperating with the arbitrator's requests.
            </p>
            <h4>6. Can online arbitration be used for all types of disputes?</h4>
            <p>   
                While online arbitration is suitable for many types of disputes, certain complex or sensitive matters may be better suited for traditional in-person arbitration. It's essential to assess the nature of the dispute and consult with legal professionals to determine the most appropriate method of resolution.            
            </p>
            <h4>7. How long does online arbitration take?</h4>
            <p>   
                The duration of online arbitration can vary depending on the complexity of the dispute, the availability of parties and arbitrators, and the efficiency of the chosen ODR platform. In general, online arbitration tends to be more expedient than traditional methods, with cases often resolved within a matter of weeks or months.
            </p>
            <h4>8. How can I get started with online arbitration?</h4>
            <p>   
                To initiate the online arbitration process, parties typically need to agree to arbitration in their contract or through a separate arbitration agreement. From there, they can choose a reputable ODR platform or arbitration service provider, review their options for arbitrators, and proceed according to the platform's guidelines and procedures.
            </p>
        </div>
        <Footer></Footer>
        </>);
}