import React from "react";
import Moment from "react-moment";
import {Button} from "reactstrap";

const ReadOnlyRow = ({ expense, handleSubmit, remove }) => {
    return (
        <tr className="trExpense">
            <td className="tdExpense">{expense.description}</td>
            <td className="tdExpense">{expense.location}</td>
            <td className="tdExpense"><Moment date={expense.expensedate} foemat="YYYY/MM/DD"/></td>
            <td className="tdExpense">{expense.option.name}</td>
            <td className="tdExpense">{expense.category.name}</td>
            <td className="tdExpense">{expense.sum}</td>


            <td className="tdExpense">
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