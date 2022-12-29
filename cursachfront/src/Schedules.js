import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


class Schedules extends Component {
    state = {
        date: new Date(),
        isLoading : true,
        schedules : []
    }

    render() {
        const title = <h2>Add Schedule </h2>
        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label htmlFor="title">Schedule name</label>
                        <input type="text" name="schedule" id="name" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">Date</Label>
                        <DatePicker selected={this.state.date} onChange={this.handleDataChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="classroom">Classroom</Label>
                        <Input type="text" neme="classroom" id="classroom"
                               onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>

                </Container>
            </div>
        );
    }
}

export default Schedules;