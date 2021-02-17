import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HourInput from './HourInput';

class HoursOfOperation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };
    }
    renderDayRows = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days.map((day) => (
            <HourInput day={day} isEdit={this.state.isEdit} />
        ));
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col xs={4}>Hours of Operation</Col>
                    <Col xs={{ span: 4, offset: 4 }}>Buttons go here</Col>
                </Row>
                {this.renderDayRows()}
            </Container>
        );
    }
}

export default HoursOfOperation;
