import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-success" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-end py-3 d-flex h-50vh maxh-600 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-4 pb-2">
                    <Col xs={10} lg={6} className="mx-auto p-0 d-flex align-items-center">
                        <div className="p-5 text-lg-start text-center">
                            <h1 className="display-4 text-white fw-bold text-uppercase text-shadow">
                                Aloe Vera 
                            </h1>
                            <h1 className="display-3 text-white fw-bold text-uppercase text-shadow">
                                Cosmetics
                            </h1>
                            <p className="text-success lead">
                                Because everything feels much better when the sun shines, let’s 
                                fast forward to summer so we can wear our new arrivals.
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto text-dark p-0 d-flex align-items-end text-end">
                        <img alt="about"
                            className="img-fluid mx-auto ms-lg-start w-50"
                            src="img/home/home-img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;