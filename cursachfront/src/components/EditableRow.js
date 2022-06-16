import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const EditableRow = ({
                         handleSubmit,
                         optionList1,
                         optionList2,
                         cancelEdit,
                         expense,
                         categories,
                         options
                     }) => {

    const handleEditFormChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormData};
        item[name] = value;
        setEditFormData(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };

    const handleExpenseFormChange = (event) => {
        const target = event.target;
        const value = target.value;
        let item = {...editFormData};
        item['expenses'] = value;
        setEditFormData(item);
        console.log(value);
        console.log(item);
    };


    const handleCategoryChange = (event) => {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = editFormData;
        const category = categories.find(category => category.id === value);
        item['category'] = {id: value, name: category.name};
        setEditFormData(item);
        console.log(editFormData);
    }

    const handleOptionChange = (event) => {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = editFormData;
        const option = options.find(option => option.id === value);
        item['option'] = {id: value, name: option.name};
        setEditFormData(item);
        console.log(editFormData);
    }

    const handleDateChange= (date) => {
        let item = {...editFormData};
        item.expensedate = date;
        setEditFormData(item);
        console.log(editFormData);
    }


    const [editFormData, setEditFormData] = useState({
            id: expense.id,
            description: expense.description,
            expensedate: new Date(expense.expensedate),
            location: expense.location,
            option: expense.option,
            category: expense.category,
            expenses: expense.sum,
        });

    return (
        <tr className="trExpense">
            <td className="tdExpense">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input value={editFormData.description}
                               type="description"
                               name="description"
                               required="required"
                               placeholder="Enter description...."
                               id="description"
                               onChange={handleEditFormChange}
                               autoComplete="name"
                        />
                    </FormGroup>
                </Form>
            </td>
            <td className="tdExpense">
                <div className="row">
                    <FormGroup className={"col-md-4 mb-3"}>
                        <Label for="location">Location</Label>
                        <Input value={editFormData.location}
                               style={{width: 200}}
                               type="text"
                               name="location"
                               required="required"
                               placeholder="Enter location...."
                               id="location"
                               onChange={handleEditFormChange}
                        />
                    </FormGroup>
                </div>
            </td>
            <td className="tdExpense">
                <FormGroup>
                    <Label for="city">Date</Label>
                    <DatePicker selected={editFormData.expensedate}
                                onChange={handleDateChange}/>
                </FormGroup>
            </td>
            <td className="tdExpense">
                <FormGroup>
                    <Label for="option">Purchase or receipt</Label>
                    <select onChange={handleOptionChange}>
                        {optionList2}
                    </select>
                </FormGroup>
            </td>
            <td className="tdExpense">
                <FormGroup>
                    <Label for="category">Category</Label>
                    <select onChange={handleCategoryChange}>
                        {optionList1}
                    </select>
                </FormGroup>
            </td>
            <td className="tdExpense">
                <div className="row">
                    <FormGroup className={"col-md-4 mb-3"}>
                        <Label for="expenses">Expense</Label>
                        <Input style={{width: 200}}
                               value={editFormData.expenses}
                               type="number"
                               name="sum"
                               required="required"
                               placeholder="Enter expense sum...."
                               id="expenses"
                               onChange={handleExpenseFormChange}
                        />
                    </FormGroup>
                </div>
            </td>
            <td className="tdExpense">
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                </FormGroup>
            </td>
        </tr>
    );
};

export default EditableRow;
