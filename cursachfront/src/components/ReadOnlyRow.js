import React from "react";
import Moment from "react-moment";
import {Button} from "reactstrap";

const ReadOnlyRow = ({ expense, handleSubmit, remove }) => {
    return (
        <tr>
            <td>{expense.description}</td>
            <td>{expense.location}</td>
            <td><Moment date={expense.expensedate} foemat="YYYY/MM/DD"/></td>
            <td>{expense.option.name}</td>
            <td>{expense.category.name}</td>
            <td>{expense.sum}</td>


            <td>
                <button
                    type="button"
                    onClick={(event) => handleSubmit(event, expense)}
                >
                    Edit
                </button>

                <Button size="sm" color="danger" onClick={ () => remove(expense.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;