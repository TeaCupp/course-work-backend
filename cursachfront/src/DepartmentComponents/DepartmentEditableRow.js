import React, {useState} from "react";
import {Button, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DepartmentEditableRow = ({
                                   cancelEditDepartment,
                                   department


}) => {

    const handleEditFormChangeDepartment = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataDepartment};
        item[name] = value;
        setEditFormDataDepartment(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditSubmitDepartment = async () => {

        await fetch(`/api/department/${editFormDataDepartment.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormDataDepartment}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditDepartment();
    }



    const [editFormDataDepartment, setEditFormDataDepartment] = useState({
        id: department.id,
        name: department.name,
        short_name: department.short_name
    });

    return (
        <tr className="trDepartment">
            <td className="tdDepartment">
                <Label for="name">Name</Label>
                <Input value={editFormDataDepartment.name}
                       type="name"
                       name="name"
                       required="required"
                       placeholder="Enter name...."
                       id="name"
                       onChange={handleEditFormChangeDepartment}
                       autoComplete="name"
                />
            </td>
            <td className="tdDepartment">
                <Label for="short_name">Short name</Label>
                <Input value={editFormDataDepartment.short_name}
                       style={{width: 100}}
                       type="text"
                       name="short_name"
                       required="required"
                       placeholder="Enter short name...."
                       id="short_name"
                       onChange={handleEditFormChangeDepartment}
                />
            </td>

            <td className="tdDepartment">
                <Button color="primary" onClick={handleEditSubmitDepartment}>Save</Button>{' '}
                <Button onClick={cancelEditDepartment} color="secondary">Cancel</Button>{' '}
            </td>
        </tr>
    );
};

export default DepartmentEditableRow;