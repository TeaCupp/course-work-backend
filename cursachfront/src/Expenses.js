import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";






export default class Expenses extends Component {

    emptyItem = {
        description: '',
        expensedate: new Date(),
        startdate: null,
        enddate: null,
        location: '',
        option: {id: 1, name: 'Purchase'},
        category: {id: 1, name: 'Travel'},
        expenses: 124,
        sum: 0
    }

    handleEdit = (event, expense) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editExpenseId: expense.id
        }
        ));
    }

    cancelEdit = () => {
        this.setState(state => ({
            ...state,
            editExpenseId: null
        }));
    }


    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            Categories: [],
            Expenses: [],
            FilteredExpenses: [],
            Options: [],
            date: new Date(),
            startdate: null,
            enddate: null,
            item: this.emptyItem,
            editExpenseId: null,
            filterCategory: 'All',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.remove = this.remove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    async handleSubmit(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
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

    handleCategoryChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Categories);
        const category = this.state.Categories.find(category => category.id === value);
        item['category'] = {id: value, name: category.name};
        this.setState({item});
    }

    handleOptionChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Options);
        const option = this.state.Options.find(option => option.id === value);
        item['option'] = {id: value, name: option.name};
        this.setState({item});
    }

    handleDateChange(date) {
        let item = {...this.state.item};
        item.expensedate = date;
        this.setState({...this.state, item: item});
    }

    handleStartDateChange(startdate) {
        console.log(startdate);
        this.state.startdate = startdate;
        console.log(this.state)
        this.updateFilteredExpenses();
    }

    handleEndDateChange(enddate) {
        this.state.enddate = enddate;
        this.updateFilteredExpenses();
    }

    updateFilteredExpenses()
    {
        let filteredExpenses = this.state.Expenses;
        if (this.state?.startdate) {
            filteredExpenses = filteredExpenses
                .filter(expense => new Date(expense.expensedate.toLocaleString()) >= this.state.startdate);
        }
        console.log(filteredExpenses);
        if (this.state?.enddate) {
            filteredExpenses = filteredExpenses
                .filter(expense => new Date(expense.expensedate.toLocaleString()) <= this.state.enddate);
        }
        console.log(this.state.filterCategory);
        if (this.state.filterCategory !== 'All') {
            filteredExpenses = filteredExpenses.filter(expense => expense.category.id === this.state.filterCategory);
        }
        this.setState({...this.state, FilteredExpenses: filteredExpenses})
    }


    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses: bodyExp, isLoading: false});
        const responseOpt = await fetch('/api/options');
        const bodyOpt = await responseOpt.json();
        this.setState({Options: bodyOpt, isLoading: false});
        this.setState({FilteredExpenses:bodyExp});
        this.setState({FilteredData:bodyExp});
    }

    async remove(id) {
        console.log(id);
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses: updatedExpenses});
        });
    }

    filterCategoryChange = (event) => {
        const target = event.target;
        console.log(target.value);
        if (target.value === 'All') {
            this.state.filterCategory = 'All';
            this.updateFilteredExpenses();
            return;
        }
        const value = parseInt(target.value, 10);
        this.state.filterCategory = value;

        this.updateFilteredExpenses();
    }


    render() {
        const title = <h3>Add Expense</h3>;
        const {Categories} = this.state;
        const {isLoading} = this.state;
        const {Options} = this.state;

        if (isLoading)
            return (<div>Loading....</div>)

        let optionList1 =
            Categories.map((category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            );

        let optionList2 =
            Options.map((option) =>
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            );

        let optionsFilter =
            Categories.map((category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
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
                                <Input type="description" name="description" required="required"
                                       placeholder="Enter title...." id="description"
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
                                    <Input type="text" name="location" required="required"
                                           placeholder="Enter location...." id="location" onChange={this.handleChange}/>
                                </FormGroup>
                            </div>

                            <div className="row">
                                <FormGroup className={"col-md-4 mb-3"}>
                                    <Label for="expenses">Expense</Label>
                                    <Input type="text" name="sum" required="required"
                                           placeholder="Enter expense sum...." id="expenses"
                                           onChange={this.handleChange}/>
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