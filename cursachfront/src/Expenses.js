import React, { Component} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import Moment from "react-moment";


export default class Expenses extends Component {

// {
//     "id": 100,
//     "expensedate": "2019-06-16T17:00:00Z",
//     "description": "New York Trip",
//     "location": "New York",
//     "category": {
//         "id": 1,
//         "name": "Travel"
//     }
// },

    emptyItem = {
        description : '',
        expensedate : new Date(),
        id:104,
        location : '',
        option: {id:1, name: 'Purchase'},
        category : {id:1 , name:'Travel'},
        expenses:124,
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
    }

    handleCategoryChange(event){
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item={...this.state.item};
        console.log(this.state.Categories);
        const category = this.state.Categories.find(category => category.id === value);
        item['category'] = {id: value, name: category.name};
        this.setState({item});
        console.log('category change');
        console.log(target);
        console.log(value);
        console.log(item);
    }

    handleOptionChange(event){
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item={...this.state.item};
        console.log(this.state.Options);
        const option = this.state.Options.find(option => option.id === value);
        item['option'] = {id: value, name: option.name};
        this.setState({item});
        console.log('option change');
        console.log(target);
        console.log(value);
        console.log(item);
        console.log(target.name);
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
        console.log(bodyExp);
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
            )

        let optionList2 =
            Options.map( (option) =>
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            )

            let rows =
                Expenses.map(expense =>
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.location}</td>
                        <td><Moment date={expense.expensedate} foemat="YYYY/MM/DD"/></td>
                        <td>{expense.option.name}</td>
                        <td>{expense.category.name}</td>
                        <td>{expense.sum}</td>
                        <td><Button size="sm" color="danger" onClick={ () => this.remove(expense.id)}>Delete</Button></td>
                    </tr>

                );

        return (
            <div>
                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" id="description"
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
                            <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="expenses">Expense</Label>
                                <Input type="text" name="expenses" id="expenses" onChange={this.handleChange}/>
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

                    <h3>Expense List</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Description</th>
                                <th width="10%">Location</th>
                                <th> Date</th>
                                <th> Option </th>
                                <th> Category</th>
                                <th> Expenses </th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>

                </Container>
                }

            </div>

        )
    }
}