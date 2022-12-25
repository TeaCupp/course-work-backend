import React, {Component, Fragment} from "react";
import AppNav from "./AppNav";
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";






export default class Expenses extends Component {










    /*Empty item*/

    emptyItem = {
        description: '',
        expensedate: new Date(),
        startdate: null,
        enddate: null,
        location: '',
        option: {id: 1, name: 'Purchase'},
        category: {id: 1, name: 'Travel'},
        expenses: 124,
        sum: 0
    }





    emptyItemDiscipline = {
        name: ''
    }

    emptyItemFaculty = {
        name: '',
        short_name: ''
    }

    emptyItemGroup = {
        name: '',
        course: {id: 1, name: '1'},
    }

    emptyItemSchedule = {
        name: '',
        course: {id: 1, name: 'A'},
    }

    emptyItemStudent = {
        name: '',
        email: '',
        phone: ''
    }

    emptyItemTeacher = {
        name: '',
        surname: '',
        email: '',
        phone: ''
    }
    /*Empty item*/
















    /*handle Edit*/

    handleEdit = (event, expense) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editExpenseId: expense.id
            }
        ));
    }











    handleEditDiscipline = (event, discipline) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editDisciplineId: discipline.id
            }
        ));
    }

    handleEditFaculty = (event, faculty) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editFacultyId: faculty.id
            }
        ));
    }

    handleEditGroup = (event, group) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editGroupId: group.id
            }
        ));
    }

    handleEditSchedule = (event, schedule) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editScheduleId: schedule.id
            }
        ));
    }

    handleEditStudent = (event, student) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editStudentId: student.id
            }
        ));
    }

    handleEditTeacher = (event, teacher) => {
        event.preventDefault();
        this.setState(state => ({
                ...state,
                editTeacherId: teacher.id
            }
        ));
    }

    /*handle Edit*/



















    /*cancelEdit*/
    cancelEdit = () => {
        this.setState(state => ({
            ...state,
            editExpenseId: null
        }));
    }




    cancelEditDiscipline = () => {
        this.setState(state => ({
            ...state,
            editDisciplineId: null
        }));
    }

    cancelEditFaculty = () => {
        this.setState(state => ({
            ...state,
            editFacultyId: null
        }));
    }

    cancelEditGroup = () => {
        this.setState(state => ({
            ...state,
            editGroupId: null
        }));
    }

    cancelEditSchedule = () => {
        this.setState(state => ({
            ...state,
            editScheduleId: null
        }));
    }

    cancelEditStudent = () => {
        this.setState(state => ({
            ...state,
            editStudentId: null
        }));
    }


    cancelEditTeacher = () => {
        this.setState(state => ({
            ...state,
            editTeacherId: null
        }));
    }
    /*cancelEdit*/


















    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,

            Categories: [],
            Classrooms: [],
            Courses: [],

            Expenses: [],

            Disciplines: [],
            Faculties: [],
            Groups: [],
            Schedules: [],
            Students: [],
            Teachers: [],

            FilteredExpenses: [],
            Options: [],
            scheduledate: new Date(),
            date: new Date(),
            startdate: null,
            enddate: null,

            item: this.emptyItem,

            itemDiscipline: this.emptyItemDiscipline,
            itemFaculty: this.emptyItemFaculty,
            itemGroup: this.emptyItemGroup,
            itemSchedule: this.emptyItemSchedule,
            itemStudent: this.emptyItemStudent,
            itemTeacher: this.emptyItemTeacher,


            editExpenseId: null,

            editDisciplineId: null,
            editFacultyId: null,
            editGroupId: null,
            editScheduleId: null,
            editStudentId: null,
            editTeacherId: null,

            filterCategory: 'All',
        }

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSubmitDiscipline = this.handleSubmitDiscipline.bind(this);
        this.handleSubmitFaculty = this.handleSubmitFaculty.bind(this);
        this.handleSubmitGroup = this.handleSubmitGroup.bind(this);
        this.handleSubmitSchedule = this.handleSubmitSchedule.bind(this);
        this.handleSubmitStudent = this.handleSubmitStudent.bind(this);
        this.handleSubmitTeacher = this.handleSubmitTeacher.bind(this);

        this.handleChange = this.handleChange.bind(this);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleScheduleDateChange = this.handleScheduleDateChange.bind(this);

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleClassroomChange = this.handleClassroomChange.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);


        this.remove = this.remove.bind(this);

        this.removeDiscipline = this.removeDiscipline.bind(this);
        this.removeFaculty = this.removeFaculty.bind(this);
        this.removeGroup = this.removeGroup.bind(this);
        this.removeSchedule = this.removeSchedule.bind(this);
        this.removeStudent = this.removeStudent.bind(this);
        this.removeTeacher = this.removeTeacher.bind(this);


        this.handleEdit = this.handleEdit.bind(this);

        this.handleEditDiscipline = this.handleEditDiscipline.bind(this);
        this.handleEditFaculty = this.handleEditFaculty.bind(this);
        this.handleEditGroup = this.handleEditGroup.bind(this);
        this.handleEditSchedule = this.handleEditSchedule.bind(this);
        this.handleEditStudent = this.handleEditStudent.bind(this);
        this.handleEditTeacher = this.handleEditTeacher.bind(this);

    }














    /*handle Submit*/
    async handleSubmit(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }





    async handleSubmitDiscipline(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/disciplines', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }



    async handleSubmitFaculty(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/faculties', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }



    async handleSubmitGroup(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/groups', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }



    async handleSubmitSchedule(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/schedules', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }



    async handleSubmitStudent(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/students', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }



    async handleSubmitTeacher(event) {

        const item = this.state.item;

        console.log('POST');
        console.log(item);
        await fetch('/api/teachers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        this.props.history.push("/expenses");
    }

    /*handle Submit*/




















    /*handle change*/
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
    }

    handleCategoryChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Categories);
        const category = this.state.Categories.find(category => category.id === value);
        item['category'] = {id: value, name: category.name};
        this.setState({item});
    }

    handleOptionChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Options);
        const option = this.state.Options.find(option => option.id === value);
        item['option'] = {id: value, name: option.name};
        this.setState({item});
    }

    handleClassroomChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Classrooms);
        const classroom = this.state.Classrooms.find(classroom => classroom.id === value);
        item['classroom'] = {id: value, name: classroom.name};
        this.setState({item});
    }

    handleCourseChange(event) {
        const target = event.target;
        const value = parseInt(target.value, 10);
        let item = {...this.state.item};
        console.log(this.state.Courses);
        const course = this.state.Courses.find(course => course.id === value);
        item['course'] = {id: value, name: course.name};
        this.setState({item});
    }

    /*handle change*/












    /*handle Date Change*/
    handleDateChange(date) {
        let item = {...this.state.item};
        item.expensedate = date;
        this.setState({...this.state, item: item});
    }

    handleStartDateChange(startdate) {
        console.log(startdate);
        this.state.startdate = startdate;
        console.log(this.state)
        this.updateFilteredExpenses();
    }

    handleEndDateChange(enddate) {
        this.state.enddate = enddate;
        this.updateFilteredExpenses();
    }


    handleScheduleDateChange(scheduledate) {
        let item = {...this.state.item};
        item.schedule_date = scheduledate;
        this.setState({...this.state, item: item});
    }
    /*handle Date Change*/










    updateFilteredExpenses()
    {
        let filteredExpenses = this.state.Expenses;
        if (this.state?.startdate) {
            filteredExpenses = filteredExpenses
                .filter(expense => new Date(expense.expensedate.toLocaleString()) >= this.state.startdate);
        }
        console.log(filteredExpenses);
        if (this.state?.enddate) {
            filteredExpenses = filteredExpenses
                .filter(expense => new Date(expense.expensedate.toLocaleString()) <= this.state.enddate);
        }
        console.log(this.state.filterCategory);
        if (this.state.filterCategory !== 'All') {
            filteredExpenses = filteredExpenses.filter(expense => expense.category.id === this.state.filterCategory);
        }
        this.setState({...this.state, FilteredExpenses: filteredExpenses})
    }






    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});

        const responseExp = await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expenses: bodyExp, isLoading: false});







        const responseDiscp = await fetch('/api/disciplines');
        const bodyDiscp = await responseExp.json();
        this.setState({Disciplines: bodyDiscp, isLoading: false});

        const responseGroup = await fetch('/api/groups');
        const bodyGroup = await responseExp.json();
        this.setState({Groups: bodyGroup, isLoading: false});

        const responseFac = await fetch('/api/faculties');
        const bodyFac = await responseExp.json();
        this.setState({Faculties: bodyFac, isLoading: false});

        const responseSched = await fetch('/api/schedules');
        const bodySched = await responseSched.json();
        this.setState({Schedules: bodySched, isLoading: false});

        const responseStud = await fetch('/api/students');
        const bodyStud = await responseStud.json();
        this.setState({Students: bodyStud, isLoading: false});

        const responseTeach = await fetch('/api/teachers');
        const bodyTeach = await responseTeach.json();
        this.setState({Teachers: bodyTeach, isLoading: false});






        const responseOpt = await fetch('/api/options');
        const bodyOpt = await responseOpt.json();
        this.setState({Options: bodyOpt, isLoading: false});

        const responseClass = await fetch('/api/classrooms');
        const bodyClass = await responseClass.json();
        this.setState({Classrooms: bodyClass, isLoading: false});

        const responseCrs = await fetch('/api/courses');
        const bodyCrs = await responseOpt.json();
        this.setState({Courses: bodyCrs, isLoading: false});


        this.setState({FilteredExpenses:bodyExp});
        this.setState({FilteredData:bodyExp});
    }










    /*Remove*/

    async remove(id) {
        console.log(id);
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses: updatedExpenses});
        });
    }







    async removeDiscipline(id) {
        console.log(id);
        await fetch(`/api/discilpines/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedDiscilpines = [...this.state.Discilpines].filter(i => i.id !== id);
            this.setState({Disciplines: updatedDiscilpines});
        });
    }


    async removeFaculty(id) {
        console.log(id);
        await fetch(`/api/faculties/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedFaculties = [...this.state.Faculties].filter(i => i.id !== id);
            this.setState({Faculties: updatedFaculties});
        });
    }


    async removeGroup(id) {
        console.log(id);
        await fetch(`/api/groups/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGroups = [...this.state.Groups].filter(i => i.id !== id);
            this.setState({Groups: updatedGroups});
        });
    }

    async removeSchedule(id) {
        console.log(id);
        await fetch(`/api/schedules/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedSchedules = [...this.state.Schedules].filter(i => i.id !== id);
            this.setState({Schedules: updatedSchedules});
        });
    }

    async removeStudent(id) {
        console.log(id);
        await fetch(`/api/students/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.Students].filter(i => i.id !== id);
            this.setState({Students: updatedStudents});
        });
    }

    async removeTeacher(id) {
        console.log(id);
        await fetch(`/api/teachers/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedTeachers = [...this.state.Teachers].filter(i => i.id !== id);
            this.setState({Teachers: updatedTeachers});
        });
    }

    /*Remove*/














    filterCategoryChange = (event) => {
        const target = event.target;
        console.log(target.value);
        if (target.value === 'All') {
            this.state.filterCategory = 'All';
            this.updateFilteredExpenses();
            return;
        }
        const value = parseInt(target.value, 10);
        this.state.filterCategory = value;

        this.updateFilteredExpenses();
    }











    render() {
        const title = <h3>Add Expense</h3>;
        const {Categories} = this.state;

        const {Disciplines} = this.state;
        const {Faculties} = this.state;
        const {Groups} = this.state;
        const {Schedules} = this.state;
        const {Students} = this.state;
        const {Teachers} = this.state;

        const {isLoading} = this.state;
        const {Options} = this.state;
        const {Classrooms} = this.state;
        const {Courses} = this.state;

        if (isLoading)
            return (<div>Loading....</div>)







        let optionList1 =
            Categories.map((category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            );

        let optionList2 =
            Options.map((option) =>
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            );


        let optionList3 =
            Classrooms.map((classroom) =>
                <option value={classroom.id} key={classroom.id}>
                    {classroom.name}
                </option>
            );


        let optionList4 =
            Courses.map((course) =>
                <option value={course.id} key={course.id}>
                    {course.name}
                </option>
            );







        let optionsFilter =
            Categories.map((category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            );

        return (

            <div>
            <div>

                <AppNav/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" required="required"
                                   placeholder="Enter title...." id="description"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleCategoryChange}>
                                {optionList1}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <Label for="option">Purchase or receipt</Label>
                            <select onChange={this.handleOptionChange}>
                                {optionList2}
                            </select>
                        </FormGroup>


                        <FormGroup>
                            <Label for="city">Date</Label>
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}/>
                        </FormGroup>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" required="required"
                                       placeholder="Enter location...." id="location" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="expenses">Expense</Label>
                                <Input type="text" name="sum" required="required"
                                       placeholder="Enter expense sum...." id="expenses"
                                       onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>{' '}
                        </FormGroup>

                    </Form>
                </Container>

                <Container>
                    <h3>Filters</h3>
                    <select onChange={this.filterCategoryChange}>
                        <option value="All" key={-1}>
                            All expenses
                        </option>
                        {optionsFilter}
                    </select>

                    <FormGroup>
                        <Label for="city">Date Start</Label>
                        <DatePicker selected={this.state?.startdate} onChange={this.handleStartDateChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Date End</Label>
                        <DatePicker selected={this.state?.enddate} onChange={this.handleEndDateChange}/>
                    </FormGroup>
                </Container>



                {''}
                <Container>
                    <Table className="app-container">
                        <thead>
                        <tr className="trHead">
                            <th className="thHead">Description</th>
                            <th className="thHead">Location</th>
                            <th className="thHead"> Date</th>
                            <th className="thHead"> Option</th>
                            <th className="thHead"> Category</th>
                            <th className="thHead"> Expenses</th>
                            <th className="thHead"> Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.FilteredExpenses.map((expense, k) => (
                            <Fragment key={k}>
                                {
                                    this.state.editExpenseId === expense.id ? (
                                        <EditableRow handleSubmit={this.handleSubmit}
                                                     optionList1={optionList1}
                                                     optionList2={optionList2}
                                                     cancelEdit={this.cancelEdit}
                                                     expense={expense}
                                                     categories={this.state.Categories}
                                                     options={this.state.Options}/>
                                    ) : (
                                        <ReadOnlyRow expense={expense} handleSubmit={this.handleEdit}
                                                     remove={this.remove}/>
                                    )
                                }
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
                </Container>





                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" required="required"
                                   placeholder="Enter title...." id="description"
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleCategoryChange}>
                                {optionList1}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <Label for="option">Purchase or receipt</Label>
                            <select onChange={this.handleOptionChange}>
                                {optionList2}
                            </select>
                        </FormGroup>


                        <FormGroup>
                            <Label for="city">Date</Label>
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange}/>
                        </FormGroup>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" required="required"
                                       placeholder="Enter location...." id="location" onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className={"col-md-4 mb-3"}>
                                <Label for="expenses">Expense</Label>
                                <Input type="text" name="sum" required="required"
                                       placeholder="Enter expense sum...." id="expenses"
                                       onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>{' '}
                        </FormGroup>

                    </Form>
                </Container>

                <Container>
                    <h3>Filters</h3>
                    <select onChange={this.filterCategoryChange}>
                        <option value="All" key={-1}>
                            All expenses
                        </option>
                        {optionsFilter}
                    </select>

                    <FormGroup>
                        <Label for="city">Date Start</Label>
                        <DatePicker selected={this.state?.startdate} onChange={this.handleStartDateChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Date End</Label>
                        <DatePicker selected={this.state?.enddate} onChange={this.handleEndDateChange}/>
                    </FormGroup>
                </Container>



                {''}
                <Container>
                    <Table className="app-container">
                        <thead>
                        <tr className="trHead">
                            <th className="thHead">Description</th>
                            <th className="thHead">Location</th>
                            <th className="thHead"> Date</th>
                            <th className="thHead"> Option</th>
                            <th className="thHead"> Category</th>
                            <th className="thHead"> Expenses</th>
                            <th className="thHead"> Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.FilteredExpenses.map((expense, k) => (
                            <Fragment key={k}>
                                {
                                    this.state.editExpenseId === expense.id ? (
                                        <EditableRow handleSubmit={this.handleSubmit}
                                                     optionList1={optionList1}
                                                     optionList2={optionList2}
                                                     cancelEdit={this.cancelEdit}
                                                     expense={expense}
                                                     categories={this.state.Categories}
                                                     options={this.state.Options}/>
                                    ) : (
                                        <ReadOnlyRow expense={expense} handleSubmit={this.handleEdit}
                                                     remove={this.remove}/>
                                    )
                                }
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
                </Container>

                }
                <Helmet>
                    <style>{'body { background-color: lightcyan; }'}</style>
                </Helmet>










            </div>
            </div>














        )
    }
}