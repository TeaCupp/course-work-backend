import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import DepartmentReadOnlyRow from "./DepartmentComponents/DepartmentReadOnlyRow";
import DepartmentEditableRow from "./DepartmentComponents/DepartmentEditableRow";



class Departments extends Component {



    emptyItemDepartment = {
        name: '',
        short_name: ''
    }



    handleEditDepartment = (event, department) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editDepartmentId: department.id
            }
        ));
    }


    cancelEditDepartment = () => {
        this.setState(state => ({
            ...state,
            editDepartmentId: null
        }));
    }




    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            Departments: [],
            itemDepartment: this.emptyItemDepartment,
            editDepartmentId: null,
        }

        this.handleSubmitDepartment = this.handleSubmitDepartment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeDepartment = this.removeDepartment.bind(this);
        this.handleEditDepartment = this.handleEditDepartment.bind(this);
    }




    async handleSubmitDepartment(event) {
        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/departments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/departments");
    }



    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
    }




    async componentDidMount() {
        const responseDep = await fetch('/api/departments');
        const bodyDep = await responseDep.json();
        this.setState({Departments: bodyDep, isLoading: false});

    }




    async removeDepartment(id) {
        console.log(id);
        await fetch(`/api/departments/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedDepartments = [...this.state.Departments].filter(i => i.id !== id);
            this.setState({Departments: updatedDepartments});
        });
    }





    render() {
        const title = <h3>Add Expense</h3>;
        const {isLoading} = this.state;


        if (isLoading)
            return (<div>Loading....</div>)

        return (


            <div>

                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmitDepartment}>
                        <FormGroup>
                            <Label for="name">Title</Label>
                            <Input type="name" name="name" required="required"
                                   placeholder="Enter name...." id="name"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>


                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="short_name">Location</Label>
                                <Input type="short_name" name="short_name" required="required"
                                       placeholder="Enter short_name...." id="short_name" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>


                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>{' '}
                        </FormGroup>
                    </Form>
                </Container>



                {''}
                <Container>
                    <Table className="app-container">
                        <thead>
                        <tr className="trHead">
                            <th className="thHead">Name</th>
                            <th className="thHead">Short name</th>
                            <th className="thHead"> Actions</th>
                        </tr>
                        </thead>
                        <tbody>


                        {this.state.Departments.map((department, k) => (
                            <Fragment key={k}>
                                {
                                    this.state.editDepartmentId === department.id ? (
                                        <DepartmentEditableRow handleSubmit={this.handleSubmitDepartment()}
                                                     cancelEdit={this.cancelEditDepartment()}
                                                     department={department}/>
                                    ) : (
                                        <DepartmentReadOnlyRow department={department} handleSubmit={this.handleEditDepartment()}
                                                     remove={this.removeDepartment()}/>
                                    )
                                }
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
                </Container>





                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmitDepartment}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" required="name"
                                   placeholder="Enter name...." id="name"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>




                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="short_name">Short name</Label>
                                <Input type="short_name" name="short_name" required="required"
                                       placeholder="Enter short name...." id="short_name" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>


                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>{' '}
                        </FormGroup>

                    </Form>
                </Container>
                }
                <Helmet>
                    <style>{'body { background-color: lightcyan; }'}</style>
                </Helmet>

            </div>
        )
    }
}

export default Departments;