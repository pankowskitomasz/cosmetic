import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class SkincareBodyWash extends Component{
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
            <Container fluid className={"bg-body-wash p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-success "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center text-white">
                        <div>
                            <h2 className="mb-3 mt-5 fw-bold text-shadow">
                                Body Wash
                            </h2>
                            <p className="lead text-dark-green">
                                Wash away the day by cleansing your skin and de-stressing your mind. 
                                Infused with antioxidants, hyaluronic acid, plant extracts, coconut 
                                water and our signature plant-powered aromatherapy. Make your shower 
                                or bathing ritual your time to let all your stress wash away.                                                         
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={6} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/skincare/body-wash-img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default SkincareBodyWash;