import React,{Component} from "react";
import BasketContent from "../components/basket_content";

class Basket extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">     
                <BasketContent/>
            </main>
        );
    }
}

export default Basket;