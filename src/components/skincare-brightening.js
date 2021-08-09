import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class SkincareBrightening extends Component{
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
            <Container fluid className={"bg-brightening p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-success "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center text-white">
                        <div>
                            <h2 className="mb-3 mt-5 fw-bold text-shadow">
                                Brightening
                            </h2>
                            <p className="lead text-dark-green">
                                A cult fave skincare product, this creamy mask is packed with 
                                botanicals and rich antioxidants that soothe, protect, and 
                                rejuvenate skin. Your complexion will immediately look brighter 
                                after just 15 minutes, and any redness and irritation will be 
                                reduced (we can attest). Plus, this product is so gentle that 
                                anyone can use it—even those who have just had a professional 
                                procedure like microdermabrasion.                     
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={6} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/skincare/brightening-img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default SkincareBrightening;