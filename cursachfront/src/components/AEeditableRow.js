import React, {useState} from "react";
import {Button, Input, Label} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const EditableRow = ({
                         optionList1,
                         optionList2,
                         optionList3,
                         optionList4,
                         cancelEdit,

                         cancelEditDiscipline,
                         cancelEditFaculty,
                         cancelEditGroup,
                         cancelEditSchedule,
                         cancelEditStudent,
                         cancelEditTeacher,
                         expense,

                         discipline,
                         faculty,
                         group,
                         schedule,
                         student,
                         teacher,
                         categories,
                         options,
                         classrooms,
                         courses
                     }) => {










    /*handle Form Change */

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










    const handleEditFormChangeDiscipline = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataDiscipline};
        item[name] = value;
        setEditFormDataDiscipline(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditFormChangeFaculty = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataFaculty};
        item[name] = value;
        setEditFormDataFaculty(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditFormChangeGroup = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataGroup};
        item[name] = value;
        setEditFormDataGroup(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditFormChangeSchedule = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataSchedule};
        item[name] = value;
        setEditFormDataSchedule(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditFormChangeStudent = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataStudent};
        item[name] = value;
        setEditFormDataStudent(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };


    const handleEditFormChangeTeacher = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...editFormDataTeacher};
        item[name] = value;
        setEditFormDataTeacher(item);
        console.log(name);
        console.log(value);
        console.log(item);
    };



    /*handle Form Change */








    /*handle Edit Submit*/

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












    const handleEditSubmitDiscipline = async () => {

        await fetch(`/api/disciplines/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.disciplines}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditDiscipline();
    }


    const handleEditSubmitFaculty = async () => {

        await fetch(`/api/faculties/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.faculties}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditFaculty();
    }


    const handleEditSubmitGroup = async () => {

        await fetch(`/api/groups/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.groups}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditGroup();
    }


    const handleEditSubmitSchedule = async () => {

        await fetch(`/api/schedules/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.schedules}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditSchedule();
    }


    const handleEditSubmitStudent = async () => {

        await fetch(`/api/students/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.students}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditStudent();
    }

    const handleEditSubmitTeacher= async () => {

        await fetch(`/api/teachers/${editFormData.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...editFormData,name: editFormData.teachers}),
        });

        console.log("Edit request is sent!!!");
        window.location.reload();
        cancelEditTeacher();
    }
    /*handle Edit Submit*/















    /*Options*/
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

    const handleClassroomChange = (event) => {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = editFormData;
        const classroom = classrooms.find(classroom => classroom.id === value);
        item['classroom'] = {id: value, name: classroom.name};
        setEditFormData(item);
        console.log(editFormData);
    }

    const handleCourseChange = (event) => {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = editFormData;
        const course = courses.find(course => course.id === value);
        item['course'] = {id: value, name: course.name};
        setEditFormData(item);
        console.log(editFormData);
    }

    /*Options*/









    /*handle Date Change*/
    const handleDateChange= (date) => {
        let item = {...editFormData};
        item.expensedate = date;
        setEditFormData(item);
        console.log(editFormData);
    }

    const handleScheduleDateChange= (date) => {
        let item = {...editFormData};
        item.schedule_date = date;
        setEditFormData(item);
        console.log(editFormData);
    }
    /*handle Date Change*/









    /*editFormData, setEditFormData*/
    const [editFormData, setEditFormData] = useState({
        id: expense.id,
        description: expense.description,
        expensedate: new Date(expense.expensedate),
        location: expense.location,
        option: expense.option,
        category: expense.category,
        expenses: expense.sum,
    });







    const [editFormDataDiscipline, setEditFormDataDiscipline] = useState({
        id: discipline.id,
        name: discipline.name,
    });

    const [editFormDataFaculty, setEditFormDataFaculty] = useState({
        id: faculty.id,
        name: faculty.name,
        short_name: faculty.short_name
    });

    const [editFormDataGroup, setEditFormDataGroup] = useState({
        id: group.id,
        name: group.name,
        course: group.course
    });

    const [editFormDataSchedule, setEditFormDataSchedule] = useState({
        id: schedule.id,
        name: schedule.name,
        schedule_date: new Date(faculty.schedule_date),
        classroom: faculty.classroom
    });

    const [editFormDataStudent, setEditFormDataStudent] = useState({
        id: student.id,
        name: student.name,
        email: student.email,
        phone: student.phone
    });

    const [editFormDataTeacher, setEditFormDataTeacher] = useState({
        id: teacher.id,
        name: teacher.name,
        surname: teacher.surname,
        email: teacher.email,
        phone: teacher.phone
    });
    /*editFormData, setEditFormData*/









    return (
        <div>





            <div className="tableExpense">
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
            </div>




























            <div className="tableDiscipline">
                <tr className="trDiscipline">
                    <td className="tdDiscipline">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataDiscipline.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeDiscipline}
                               autoComplete="name"
                        />
                    </td>



                    <td className="tdDiscipline">
                        <Button color="primary" onClick={handleEditSubmitDiscipline}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>
















            <div className="tableFaculty">
                <tr className="trFaculty">
                    <td className="tdFaculty">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataFaculty.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeFaculty}
                               autoComplete="name"
                        />
                    </td>
                    <td className="tdFaculty">
                        <Label for="short_name">Short name</Label>
                        <Input value={editFormDataFaculty.short_name}
                               style={{width: 100}}
                               type="text"
                               name="short_name"
                               required="required"
                               placeholder="Enter short name...."
                               id="short_name"
                               onChange={handleEditFormChangeFaculty}
                        />
                    </td>



                    <td className="tdFaculty">
                        <Button color="primary" onClick={handleEditSubmitFaculty}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>





















            <div className="tableGroup">
                <tr className="trGroup">
                    <td className="tdGroup">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataGroup.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeGroup}
                               autoComplete="name"
                        />
                    </td>


                    <td className="tdGroup">
                        <Label for="course">Course</Label>
                        <select onChange={handleCourseChange}>
                            {optionList4}
                        </select>
                    </td>


                    <td className="tdGroup">
                        <Button color="primary" onClick={handleEditSubmitGroup}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>


















            <div className="tableSchedule">
                <tr className="trSchedule">
                    <td className="tdSchedule">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataSchedule.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeSchedule}
                               autoComplete="name"
                        />
                    </td>

                    <td className="tdSchedule">
                        <Label for="city">Date</Label>
                        <DatePicker selected={editFormDataSchedule.schedule_date}
                                    onChange={handleScheduleDateChange}/>
                    </td>

                    <td className="tdSchedule">
                        <Label for="classroom">Classroom</Label>
                        <select onChange={handleClassroomChange}>
                            {optionList3}
                        </select>
                    </td>



                    <td className="tdSchedule">
                        <Button color="primary" onClick={handleEditSubmitSchedule}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>



















            <div className="tableStudent">
                <tr className="trStudent">
                    <td className="tdStudent">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataStudent.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeStudent}
                               autoComplete="name"
                        />
                    </td>

                    <td className="tdStudent">
                        <Label for="email">Email</Label>
                        <Input value={editFormDataStudent.email}
                               type="email"
                               name="email"
                               required="required"
                               placeholder="Enter email...."
                               id="email"
                               onChange={handleEditFormChangeStudent}
                               autoComplete="email"
                        />
                    </td>


                    <td className="tdStudent">
                        <Label for="phone">phone</Label>
                        <Input value={editFormDataStudent.phone}
                               type="phone"
                               name="phone"
                               required="required"
                               placeholder="Enter phone...."
                               id="phone"
                               onChange={handleEditFormChangeStudent}
                               autoComplete="phone"
                        />
                    </td>






                    <td className="tdStudent">
                        <Button color="primary" onClick={handleEditSubmitStudent}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>













            <div className="tableTeacher">
                <tr className="trTeacher">
                    <td className="tdTeacher">
                        <Label for="name">Name</Label>
                        <Input value={editFormDataTeacher.name}
                               type="name"
                               name="name"
                               required="required"
                               placeholder="Enter name...."
                               id="name"
                               onChange={handleEditFormChangeTeacher}
                               autoComplete="name"
                        />
                    </td>


                    <td className="tdTeacher">
                        <Label for="surname">Surname</Label>
                        <Input value={editFormDataTeacher.surname}
                               type="surname"
                               name="surname"
                               required="required"
                               placeholder="Enter surname...."
                               id="surname"
                               onChange={handleEditFormChangeTeacher}
                               autoComplete="surname"
                        />
                    </td>



                    <td className="tdTeacher">
                        <Label for="email">Email</Label>
                        <Input value={editFormDataTeacher.email}
                               type="email"
                               name="email"
                               required="required"
                               placeholder="Enter email...."
                               id="email"
                               onChange={handleEditFormChangeTeacher}
                               autoComplete="email"
                        />
                    </td>


                    <td className="tdTeacher">
                        <Label for="phone">phone</Label>
                        <Input value={editFormDataTeacher.phone}
                               type="phone"
                               name="phone"
                               required="required"
                               placeholder="Enter phone...."
                               id="phone"
                               onChange={handleEditFormChangeTeacher}
                               autoComplete="phone"
                        />
                    </td>






                    <td className="tdTeacher">
                        <Button color="primary" onClick={handleEditSubmitTeacher}>Save</Button>{' '}
                        <Button onClick={cancelEdit} color="secondary">Cancel</Button>{' '}
                    </td>
                </tr>
            </div>





        </div>

    );
};

export default EditableRow;
