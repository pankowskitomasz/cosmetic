import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class SkincareNaturalMask extends Component{
    render(){
        return(        
            <Container fluid className={"bg-natural-mask p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/skincare/mask.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2 text-white">
                        <div>
                            <h2 className="mb-3 mt-5 text-shadow">
                                Natural Mask
                            </h2>
                            <p className="lead text-dark-green">
                                Most of us grew up knowing about the nutritional benefits of yogurt. 
                                You’ve probably even incorporated it into your diet through smoothies 
                                or fruit-laden afternoon snacks. And that’s great, but did you know 
                                yogurt can also be applied topically as part of a skin care routine 
                                to help you find the youthful skin you’ve been searching for? It’s 
                                true!                    
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default SkincareNaturalMask;