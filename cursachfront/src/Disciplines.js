import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

class Disciplines extends Component {
    state = {
        date: new Date(),
        isLoading : true,
        departments : []
    }

    async componentDidMount() {
        const response = await fetch('/api')
    }


    render() {
        const title = <h2>Add Discipline</h2>
        return (
            <div>
            <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label for="title">Discipline name</label>
                        <input type="text" name="discipline" id="name" onChange={this.handleChange}/>
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

export default Disciplines;