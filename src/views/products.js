import React,{Component} from "react";
import ProductsContent from "../components/products_content";

class Products extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-products">     
                <ProductsContent/>
            </main>
        );
    }
}

export default Products;