import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class SkincareMask extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"bg-brightening-mask p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-success "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/skincare/natural-mask-img.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2 text-white">
                        <div>
                            <h2 className="mb-3 mt-5 text-shadow">
                                Brightening Mask
                            </h2>
                            <p className="lead text-dark-green">
                                Trust us on this one, because humble ingredients like yoghurt 
                                boasts exfoliating properties on par with heaps of skincare 
                                products, while honey is brilliant at busting spot-causing 
                                bacteria and cacao powder a great glow-booster - hello, 
                                supermodel skin.                                                      
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default SkincareMask;