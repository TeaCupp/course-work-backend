import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Students from "./Students";






class Teachers extends Component {
    state = {
        isLoading : true,
        teachers : []
    }


    render() {
        const title = <h2>Add Teacher </h2>
        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label htmlFor="title">Teacher name</label>
                        <input type="text" name="teacher" id="name" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="title">Email</label>
                        <input type="text" name="teacher" id="email" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="title">Phone number</label>
                        <input type="text" name="teacher" id="phone_number" onChange={this.handleChange}/>
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

export default Teachers;