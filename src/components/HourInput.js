import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class HourInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            open: "12:00 AM",
            close: "11:30 PM",
            snapshot: {}
        };
    }

    componentDidUpdate(prevProp) {
        // Entering 'edit' mode
        if(!prevProp.isEdit && this.props.isEdit) {
            this.setState((state) => ({
                snapshot: Object.assign({}, state)
            }));
        }

        // Exiting 'edit' mode through 'cancel'
        if((!prevProp.isCancel && this.props.isCancel) && (prevProp.isEdit && !this.props.isEdit)) {
            this.setState((state) => {
                return Object.assign({}, state.snapshot, { snapshot: {} })
            });
        }

    }

    getTimes() {
        const times = [];
        const ampm = ['AM', 'PM'];

        // Start at 0 and increment by 30min
        for(let currentTime = 0; currentTime < 24*60; currentTime += 30) {
            const hour = Math.floor(currentTime/60); // calculate hour 0 - 24;
            const minute = Math.floor(currentTime%60).toLocaleString('en-US', {minimumIntegerDigits: 2}); // claculate minuter and convert to string for '00'
            times.push(`${hour%12 === 0 ? 12 : hour%12}:${minute} ${ampm[Math.floor(hour/12)]}`); // convert to 12hour system with AM/PM
        }

        return times;
    }

    handleSwitchChange = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    }

    handleOpenChange = (e) => {
        e.preventDefault();
        this.setState(() => ({
            open: e.target.value
        }));
    }

    handleCloseChange = (e) => {
        e.preventDefault();
        this.setState(() => ({
            close: e.target.value
        }));
    }

    renderRead() {
        const isOpen = this.state.isOpen ? 'OPEN' : 'CLOSED';
        return (
            <>
                <Col xs={2}>
                    {isOpen}
                </Col>
                {this.state.isOpen && 
                    <>
                        <Col xs={2}>
                            {this.state.open}
                        </Col>
                        <Col className="text-center" xs={1}>-</Col>
                        <Col xs={2}>
                            {this.state.close}
                        </Col>
                    </>
                }
            </>
        );
    }

    renderEdit() {
        const times = this.getTimes();
        const timeOptions = times.map((time) => (
            <option
                key={time}
                value={time}
            >
                {time}
            </option>
        ));

        return (
            <>
                <Col xs={2} >
                    <Form.Check 
                        type="switch"
                        checked={this.state.isOpen}
                        id={`isOpen-${this.props.day}`}
                        label={this.state.isOpen ?  'OPEN' : 'CLOSED'}
                        onChange={this.handleSwitchChange}
                    />
                </Col>
                {this.state.isOpen && 
                    <>
                        <Col xs={2}>
                            <Form.Group className="mb-0" controlId={`openTime-${this.props.day}`}>
                                <Form.Control
                                    as="select"
                                    size="sm"
                                    value={this.state.open}
                                    onChange={this.handleOpenChange}
                                >
                                    {timeOptions}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col className="text-center" xs={1}>
                            -
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-0" controlId={`closeTime-${this.props.day}`}>
                                <Form.Control
                                    as="select"
                                    size="sm"
                                    value={this.state.close}
                                    onChange={this.handleCloseChange}
                                >
                                    {timeOptions}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </>
                }
            </>
        );
    }

    render() {
        return (
            <Form className="text-left">
                <Row>
                    <Col xs={2}>
                        {this.props.day}
                    </Col>
                    {!this.props.isEdit && this.renderRead()}
                    {this.props.isEdit && this.renderEdit()}
                </Row>
            </Form>
        );
    }
}

export default HourInput;
