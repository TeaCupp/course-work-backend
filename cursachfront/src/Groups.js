import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

class Groups extends Component {
    state = {
        isLoading : true,
        groups : []
    }



    render() {
        const title = <h2>Add Group </h2>
        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label htmlFor="title">Group name</label>
                        <input type="text" name="group" id="name" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="course">Course</Label>
                        <Input type="text" neme="course" id="course"
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

export default Groups;