import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import HourInput from './HourInput';

class HoursOfOperation extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isCancel: false,
            isEdit: false
        };
    }

    handleEditClick = () => {
        this.setState((state) => ({
            isCancel: false,
            isEdit: true
        }));
    }

    handleSaveClick = () => {
        this.setState((state) => ({
            isCancel: false,
            isEdit: false
        }));
    }

    handleCancelClick = () => {
        this.setState(() => ({
            isCancel: true,
            isEdit: false
        }));
    }

    renderDayRows = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days.map((day) => (
            <HourInput day={day} isEdit={this.state.isEdit} isCancel={this.state.isCancel} />
        ));
    }

    renderButtons = () => {
        const buttons = [];

        if(this.state.isEdit) {
            buttons.push(
                <>
                    <Button variant="link" onClick={this.handleCancelClick}>Cancel</Button>
                    <Button variant="primary" onClick={this.handleSaveClick}>Save</Button>
                </>
            );
        } else {
            buttons.push(
                <>
                    <Button variant="link" onClick={this.handleEditClick}>Edit</Button>
                </>
            );
        }

        return buttons;
    }

    render(){
        return(
            <Container fluid>
                <Row className="text-left">
                    <Col xs={4}>
                        <h3>Hours of Operation</h3>
                        <p>
                            Manage standard hours of operation when providers are available to provide care.
                            Patients will be informed if they submit an exam outside of these hours.
                        </p>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }}>
                        {this.renderButtons()}
                    </Col>
                </Row>
                {this.renderDayRows()}
            </Container>
        );
    }
}

export default HoursOfOperation;
