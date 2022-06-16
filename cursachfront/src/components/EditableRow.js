import React, {useState} from "react";
import {Button, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const EditableRow = ({
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

    const handleEditSubmit = async () => {

        await fetch(`/api/expenses/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,sum: editFormData.expenses}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEdit();
    }


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
            </td>
            <td className="tdExpense">
                <Label for="location">Location</Label>
                <Input value={editFormData.location}
                       style={{width: 100}}
                       type="text"
                       name="location"
                       required="required"
                       placeholder="Enter location...."
                       id="location"
                       onChange={handleEditFormChange}
                />
            </td>
            <td className="tdExpense">
                <Label for="city">Date</Label>
                <DatePicker selected={editFormData.expensedate}
                            onChange={handleDateChange}/>
            </td>
            <td className="tdExpense">
                <Label for="option">Purchase or receipt</Label>
                <select onChange={handleOptionChange}>
                    {optionList2}
                </select>
            </td>
            <td className="tdExpense">
                <Label for="category">Category</Label>
                <select onChange={handleCategoryChange}>
                    {optionList1}
                </select>
            </td>
            <td className="tdExpense">
                <Label for="expenses">Expense</Label>
                <Input style={{width: 80}}
                       value={editFormData.expenses}
                       type="number"
                       name="sum"
                       required="required"
                       placeholder="Enter expense sum...."
                       id="expenses"
                       onChange={handleExpenseFormChange}
                />
            </td>
            <td className="tdExpense">
                <Button color="primary" onClick={handleEditSubmit}>Save</Button>{' '}
                <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
            </td>
        </tr>
    );
};

export default EditableRow;
