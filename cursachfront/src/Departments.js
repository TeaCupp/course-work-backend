import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import ReadOnlyRow from "./DepartmentComponents/ReadOnlyRow";
import EditableRow from "./DepartmentComponents/EditableRow";






export default class Departments extends Component {

    emptyItem = {
        name: '',
        short_name: ''
    }

    handleEdit = (event, department) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editDepartmentId: department.id
            }
        ));
    }

    cancelEdit = () => {
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
            item: this.emptyItem,
            editDepartmentsId: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.remove = this.remove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    async handleSubmit(event) {

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
        const responseExp = await fetch('/api/departments');
        const bodyExp = await responseExp.json();
        this.setState({Expenses: bodyExp, isLoading: false});

    }

    async remove(id) {
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
        const title = <h3>Add Department</h3>;
        const {isLoading} = this.state;

        if (isLoading)
            return (<div>Loading....</div>)






        return (


            <div>

                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" required="required"
                                   placeholder="Enter name...." id="name"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>




                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="ShortName">ShortName</Label>
                                <Input type="text" name="ShortName" required="required"
                                       placeholder="Enter ShortName...." id="ShortName" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>



                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>{' '}
                        </FormGroup>

                    </Form>
                </Container>

                <Container>
                    <h3>Filters</h3>
                    <select onChange={this.filterCategoryChange}>
                        <option value="All" key={-1}>
                            All expenses
                        </option>
                        {optionsFilter}
                    </select>

                    <FormGroup>
                        <Label for="city">Date Start</Label>
                        <DatePicker selected={this.state?.startdate} onChange={this.handleStartDateChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Date End</Label>
                        <DatePicker selected={this.state?.enddate} onChange={this.handleEndDateChange}/>
                    </FormGroup>
                </Container>



                {''}
                <Container>
                    <Table className="app-container">
                        <thead>
                        <tr className="trHead">
                            <th className="thHead">Description</th>
                            <th className="thHead">Location</th>
                            <th className="thHead"> Date</th>
                            <th className="thHead"> Option</th>
                            <th className="thHead"> Category</th>
                            <th className="thHead"> Expenses</th>
                            <th className="thHead"> Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.FilteredExpenses.map((expense, k) => (
                            <Fragment key={k}>
                                {
                                    this.state.editExpenseId === expense.id ? (
                                        <EditableRow handleSubmit={this.handleSubmit}
                                                     optionList1={optionList1}
                                                     optionList2={optionList2}
                                                     cancelEdit={this.cancelEdit}
                                                     expense={expense}
                                                     categories={this.state.Categories}
                                                     options={this.state.Options}/>
                                    ) : (
                                        <ReadOnlyRow expense={expense} handleSubmit={this.handleEdit}
                                                     remove={this.remove}/>
                                    )
                                }
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
                </Container>
                }
                <Helmet>
                    <style>{'body { background-color: lightcyan; }'}</style>
                </Helmet>
            </div>

        )
    }
}