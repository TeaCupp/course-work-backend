import React, {useState, Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {Helmet} from "react-helmet";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";




export default class Expenses extends Component {

    emptyItem = {
        description : '',
        expensedate : new Date(),
        location : '',
        option: {id:1, name: 'Purchase'},
        category : {id:1 , name:'Travel'},
        expenses:124,
        sum: 0
    }


    constructor(props){
        super(props)

        this.state = {
            isLoading : false,
            Categories : [],
            Expenses : [],
            Options: [],
            date : new Date(),
            item : this.emptyItem
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);

    }



    async handleSubmit(event){

        const item = this.state.item;

        await fetch('/api/expenses', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(item),
            });

            event.preventDefault();
            this.props.history.push("/expenses");
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item={...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
    }

    handleCategoryChange(event){
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item={...this.state.item};
        console.log(this.state.Categories);
        const category = this.state.Categories.find(category => category.id === value);
        item['category'] = {id: value, name: category.name};
        this.setState({item});
    }

    handleOptionChange(event){
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item={...this.state.item};
        console.log(this.state.Options);
        const option = this.state.Options.find(option => option.id === value);
        item['option'] = {id: value, name: option.name};
        this.setState({item});
    }

    handleDateChange(date){
        let item={...this.state.item};
        item.expensedate = date;
        this.setState({item});
    }


    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories : body, isLoading : false});

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses : bodyExp, isLoading : false});
        const responseOpt = await fetch('/api/options');
        const bodyOpt = await responseOpt.json();
        this.setState({Options : bodyOpt, isLoading : false});
    }


    async remove(id){
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
            }).then(() => {
                let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
                this.setState({Expenses : updatedExpenses});
            });
    }




    render() {
        const title= <h3>Add Expense</h3>;
        const {Categories} = this.state;
        const {isLoading} = this.state;
        const {Expenses} = this.state;
        const {Options} = this.state;

        if(isLoading)
            return(<div>Loading....</div>)

        let optionList1 =
            Categories.map( (category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            );

        let optionList2 =
            Options.map( (option) =>
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            );

        let optionList3 =
            Expenses.map( (expense) =>
                <option value={expense.id} key={expense.id}>
                    {expense.expensedate} {expense.description}  {expense.location} {expense.option.name} {expense.category} {expense.sum}
                </option>
            );



        return (


            <div>

                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" required="required" placeholder="Enter location...." id="description"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleCategoryChange}>
                                {optionList1}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <Label for="option">Purchase or receipt</Label>
                            <select onChange={this.handleOptionChange}>
                                {optionList2}
                            </select>
                        </FormGroup>



                        <FormGroup>
                            <Label for="city">Date</Label>
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}/>
                        </FormGroup>

                        <div className="row">
                        <FormGroup className={"col-md-4 mb-3"}>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" required="required" placeholder="Enter location...." id="location" onChange={this.handleChange}/>
                        </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="expenses">Expense</Label>
                                <Input type="text" name="sum" required="required" placeholder="Enter expense sum...." id="expenses" onChange={this.handleChange}/>
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
                <form>
                    <Table className="app-container">
                        <thead>
                            <tr>
                                <th width="30%">Description</th>
                                <th width="10%">Location</th>
                                <th> Date</th>
                                <th> Option </th>
                                <th> Category</th>
                                <th> Expenses </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            { Expenses.map((expense) => (
                                <Fragment>
                                    <EditableRow handleSubmit={this.handleSubmit}/>
                                    <ReadOnlyRow expense={expense} handleSubmit={this.handleSubmit}/>
                                </Fragment>
                            ))}
                        </tbody>
                    </Table>
                </form>

                </Container>
                }
                <Helmet>
                    <style>{'body { background-color: lightcyan; }'}</style>
                </Helmet>
            </div>

        )
    }
}