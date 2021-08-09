import React,{Component} from "react";
import ConsultContent from "../components/consult_content";

class Consult extends Component{
    render(){
        return(          
            <main className="minh-footer-adj d-flex align-items-center bg-consult">     
                <ConsultContent/>
            </main>
        );
    }
}

export default Consult;