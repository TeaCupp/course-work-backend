import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";


class Schedules extends Component {
    state = {
        date: new Date(),
        isLoading : true,
        schedules : []
    }


    async componentDidMount() {
        const response = await fetch('/api/classrooms');
        const body = await response.json();
        this.setState({schedules : body, isLoading : false});
    }


    render() {
        const {isLoading} = this.setState();

        if(isLoading)
            return(<div>Loading....</div>)

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