import React,{Component} from "react";
import ProductsContent from "../components/products_content";
import TitleTextTableCenter from "../components/title-text-table-center"

class Products extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-products">     
                <TitleTextTableCenter/>
            </main>
        );
    }
}

export default Products;