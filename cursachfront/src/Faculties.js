import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


class Faculties extends Component {
    state = {
        isLoading : true,
        faculties : []
    }



    render() {
        const title = <h2>Add Faculty </h2>
        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <FormGroup>
                        <label for="title">Faculty name</label>
                        <input type="text" name="department" id="name" onChange={this.handleChange}/>
                    </FormGroup>


                    <FormGroup>
                        <label for="title">Faculty short name</label>
                        <input type="text" name="short_name" id="short_name" onChange={this.handleChange}/>
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

export default Faculties;