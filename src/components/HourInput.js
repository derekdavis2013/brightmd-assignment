import React from 'react';
import { Row, Col } from 'react-bootstrap';

class HourInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            open: "12:00 AM",
            closed: "11:59 PM"
        };
    }

    renderRead() {
        return (
            <>
                <Col xs={4}>
                    toggle
                </Col>
                <Col xs={4}>
                    {this.state.open} - {this.state.closed}
                </Col>
            </>
        );
    }

    renderEdit() {
        return (
            <>
                editing
            </>
        );
    }

    render() {
        return (
            <Row className="text-left">
                <Col xs={4}>
                    {this.props.day}
                </Col>
                {!this.props.isEdit && this.renderRead()}
                {this.props.isEdit && this.renderEdit()}
            </Row>
        );
    }
}

export default HourInput;
