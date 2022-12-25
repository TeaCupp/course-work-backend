import React from "react";
import Moment from "react-moment";
import {Button} from "reactstrap";

const ReadOnlyRow = ({ expense,
                                      discipline, faculty, group, schedule, student, teacher,
                         handleSubmit,  handleSubmitDiscipline,
                         handleSubmitFaculty, handleSubmitGroup, handleSubmitSchedule,
                         handleSubmitStudent, handleSubmitTeacher,
                         removeFaculty , removeDiscipline,
                         removeSchedule, removeGroup, removeStudent, removeTeacher}) => {
    return (
        <div>
            <div className="tableExpense">
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
            </div>












            <div className="tableDiscipline">
                <tr className="trDiscipline">
                    <td className="tdDiscipline">{discipline.name}</td>

                    <td className="tdDiscipline">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitDiscipline(event, discipline)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeDiscipline(discipline.id)}>Delete</Button>
                    </td>
                </tr>
            </div>




            <div className="tableFaculty">
                <tr className="trFaculty">
                    <td className="tdFaculty">{faculty.name}</td>
                    <td className="tdFaculty">{faculty.short_name}</td>

                    <td className="tdFaculty">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitFaculty(event, faculty)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeFaculty(faculty.id)}>Delete</Button>
                    </td>
                </tr>
            </div>


            <div className="tableGroup">
                <tr className="trGroup">
                    <td className="tdGroup">{group.name}</td>
                    <td className="tdGroup">{group.course.name}</td>


                    <td className="tdGroup">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitGroup(event, group)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeGroup(group.id)}>Delete</Button>
                    </td>
                </tr>
            </div>




            <div className="tableSchedule">
                <tr className="trSchedule">
                    <td className="tdSchedule">{schedule.name}</td>
                    <td className="tdExpense"><Moment date={schedule.schedule_date} foemat="YYYY/MM/DD"/></td>
                    <td className="tdSchedule">{schedule.classroom.name}</td>


                    <td className="tdSchedule">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitSchedule(event, schedule)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeSchedule(schedule.id)}>Delete</Button>
                    </td>
                </tr>
            </div>



            <div className="tableStudent">
                <tr className="trStudent">
                    <td className="tdStudent">{student.name}</td>
                    <td className="tdStudent">{student.surname}</td>
                    <td className="tdStudent">{student.email}</td>


                    <td className="tdStudent">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitStudent(event, student)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeStudent(student.id)}>Delete</Button>
                    </td>
                </tr>
            </div>


            <div className="tableTeacher">
                <tr className="trTeacher">
                    <td className="tdTeacher">{teacher.name}</td>
                    <td className="tdTeacher">{teacher.surname}</td>
                    <td className="tdTeacher">{teacher.email}</td>
                    <td className="tdTeacher">{teacher.phone}</td>



                    <td className="tdTeacher">
                        <button
                            type="button"
                            onClick={(event) => handleSubmitTeacher(event, teacher)}
                        >
                            Edit
                        </button>

                        <Button size="sm" color="danger" onClick={ () => removeTeacher(teacher.id)}>Delete</Button>
                    </td>
                </tr>
            </div>



        </div>


    );
};

export default ReadOnlyRow;