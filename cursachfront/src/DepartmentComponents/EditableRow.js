import React, {useState} from "react";
import {Button, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const EditableRow = ({
                         cancelEdit,
                         department
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
        item['departments'] = value;
        setEditFormData(item);
        console.log(value);
        console.log(item);
    };

    const handleEditSubmit = async () => {

        await fetch(`/api/departments/${editFormData.id}`, {
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


    const [editFormData, setEditFormData] = useState({
        id: department.id,
        name: department.name,
        shortName: department.shortName,
    });




    return (
        <tr className="trDepartment">
            <td className="tdDepartment">
                <Label for="name">Name</Label>
                <Input value={editFormData.name}
                       type="name"
                       name="name"
                       required="required"
                       placeholder="Enter name...."
                       id="name"
                       onChange={handleEditFormChange}
                       autoComplete="name"
                />
            </td>
            <td className="tdDepartment">
                <Label for="shortName">ShortName</Label>
                <Input value={editFormData.shortName}
                       style={{width: 100}}
                       type="text"
                       name="shortName"
                       required="required"
                       placeholder="Enter shortName...."
                       id="shortName"
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