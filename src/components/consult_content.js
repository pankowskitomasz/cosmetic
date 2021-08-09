import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

class ConsultContent extends Component{
    render(){
        return(        
            <Container fluid className={"align-items-end py-3 d-flex h-50vh maxh-600 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-4 pb-2">
                    <Col xs={10} lg={6} className="mx-auto p-0 d-flex align-items-center">
                        <div className="p-5 text-lg-start text-center">
                            <h1 className="display-6 text-white fw-bold text-uppercase text-shadow">
                                Find the best
                            </h1>
                            <h1 className="display-3 text-white fw-bold text-uppercase text-shadow">
                                Product
                            </h1>
                            <p className="text-dark-green lead">
                                Don't know which product is the best for you? Don't wait!
                                Call us now, our consultants are always ready to help
                                you.
                            </p>
                            <div className="text-success lead fw-bold text-center p-3">
                                <span class="px-3 py-2 border border-success rounded-pill">
                                    0-900 876 543
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto text-dark p-0 d-flex align-items-end text-end">
                        <img alt="about"
                            className="img-fluid mx-auto ms-lg-start w-50"
                            src="img/consult/consult-img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ConsultContent;