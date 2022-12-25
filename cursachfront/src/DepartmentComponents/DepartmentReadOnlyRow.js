import React from "react";
import Moment from "react-moment";
import {Button} from "reactstrap";


const DepartmentReadOnlyRow = ({  department, handleSubmitDepartment, removeDepartment  }) => {

    return (
        <div className="tableDepartment">
            <tr className="trDepartment">
                <td className="tdDepartment">{department.name}</td>
                <td className="tdDepartment">{department.short_name}</td>

                <td className="tdDepartment">
                    <button
                        type="button"
                        onClick={(event) => handleSubmitDepartment(event, department)}
                    >
                        Edit
                    </button>

                    <Button size="sm" color="danger" onClick={ () => removeDepartment(department.id)}>Delete</Button>
                </td>
            </tr>
        </div>

    );
};

export default DepartmentReadOnlyRow;