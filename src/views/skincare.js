import React,{Component} from "react";
import SkincareBodyWash from "../components/skincare-body-wash";
import SkincareMask from "../components/skincare-mask";
import SkincareNaturalMask from "../components/skincare-natural-mask";
import SkincareBrightening from "../components/skincare-brightening";

class Skincare extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <SkincareBodyWash/>
                <SkincareMask/>
                <SkincareBrightening/>
                <SkincareNaturalMask/>
            </main>
        );
    }
}

export default Skincare;