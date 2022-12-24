import React from "react";
import Moment from "react-moment";
import {Button} from "reactstrap";

const ReadOnlyRow = ({ department, handleSubmit, remove }) => {
    return (
        <tr className="trExpense">
            <td className="tdExpense">{department.name}</td>
            <td className="tdExpense">{department.short_name}</td>



            <td className="tdExpense">
                <button
                    type="button"
                    onClick={(event) => handleSubmit(event, department)}
                >
                    Edit
                </button>

                <Button size="sm" color="danger" onClick={ () => remove(department.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;