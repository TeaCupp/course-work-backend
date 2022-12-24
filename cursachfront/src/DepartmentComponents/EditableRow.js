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

    const handleDepartmentFormChange = (event) => {
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
            body: JSON.stringify({...editFormData,sum: editFormData.departments}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEdit();
    }


    const [editFormData, setEditFormData] = useState({
        id: department.id,
        name: department.name,
        short_name: department.short_name,
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
                <Label for="short_name">ShortName</Label>
                <Input value={editFormData.short_name}
                       style={{width: 100}}
                       type="text"
                       name="short_name"
                       required="required"
                       placeholder="Enter short_name...."
                       id="short_name"
                       onChange={handleEditFormChange}
                />
            </td>

            <td className="tdDepartment">
                <Button color="primary" onClick={handleEditSubmit}>Save</Button>{' '}
                <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
            </td>
        </tr>
    );
};

export default EditableRow;