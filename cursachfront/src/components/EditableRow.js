import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const EditableRow = ({
                         handleSubmit,
                         handleCategoryChange,
                         optionList1,
                         handleOptionChange,
                         optionList2,
                         handleDateChange,
                         handleChange,
                        handleItemChange,
                        cancelEdit
                     }) => {



    return (
        <tr className="trExpense">
            <td className="tdExpense">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="description" name="description" required="required" placeholder="Enter description...." id="description"
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                </Form>
            </td>
            <td className="tdExpense">
                <div className="row">
                    <FormGroup className={"col-md-4 mb-3"}>
                        <Label for="location">Location</Label>
                        <Input style={{width: 200}} type="text" name="location" required="required" placeholder="Enter location...." id="location" onChange={handleChange} />
                    </FormGroup>
                </div>
            </td>
            <td className="tdExpense">
                <FormGroup>
                    <Label for="city">Date</Label>
                    <DatePicker  onChange={handleDateChange}/>
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
                        <Input style={{width: 200}} type="text" name="sum" required="required" placeholder="Enter expense sum...." id="expenses" onChange={handleChange}/>
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
