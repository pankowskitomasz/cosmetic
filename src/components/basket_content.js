import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class BasketContent extends Component{
    render(){
        return(          
            <Container fluid className="minh-footer-adj bg-basket">     
                <Row className="mx-0 w-100">

                </Row>
            </Container>
        );
    }
}

export default BasketContent;