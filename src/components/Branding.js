import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Branding extends React.PureComponent {
    render(){
        return(
            <Container className="text-left" fluid>
                <Row>
                    <Col xs={6}>
                        <h3>Branding</h3>
                        <p>
                            Set name, welcome page text, and other branding for your patients to see during an exam.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <h6>Display Name</h6>
                        <p>
                            Set name, welcome page text, and other branding for your patients to see during an exam.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h6>Full Name</h6>
                    </Col>
                    <Col xs={2}>
                        <h6>Bright.md Hospital</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h6>Short Name</h6>
                    </Col>
                    <Col xs={2}>
                        <h6>BMD</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h6>Welcome Text</h6>
                    </Col>
                    <Col xs={2}>
                        <h6>Get a quick diagnosis for many medication conditoins from your computer or mobile device.</h6>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Branding;
