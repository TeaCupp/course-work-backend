import React, {Component} from "react";
import AppNav from "./AppNav";
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Container, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";


class Students extends Component {
    state = {
        isLoading : true,
        students : []
    }

    render() {
        const title = <h2>Add Student </h2>
        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label htmlFor="title">Student name</label>
                        <input type="text" name="student" id="name" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="title">Email</label>
                        <input type="text" name="email" id="email" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="title">Phone number</label>
                        <input type="text" name="phone_number" id="phone_number" onChange={this.handleChange}/>
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

export default Students;