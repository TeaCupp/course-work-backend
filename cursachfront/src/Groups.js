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
        Groups : [],
        Courses : []
    }

    async componentDidMount() {
        const response = await fetch('/api/courses');
        const body = await response.json();
        this.setState({Courses : body, isLoading : false});
    }




    render() {
        const title = <h2>Add Group </h2>
        const {Courses} = this.setState();
        const {isLoading} = this.state;

        if(isLoading)
            return(<div>Loading....</div>)

        let optionList5 =
            Courses.map((course) =>
                <option value={course.id} key={course.id}>
                    {course.name}
                </option>
            );

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
                        <select onChange={this.handleCategoryChange}>
                        {optionList5}
                        </select>
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