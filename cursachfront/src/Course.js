import React, {Component} from 'react';
import AppNav from "./AppNav";


class Course extends Component {
    state = {
        isLoading :true,
        Courses : []
    }

    async componentDidMount() {
        const response = await fetch('/api/courses');
        const body = await response.json();
        this.setState({Courses: body, isLoading: false});
    }

    render() {
        const {Courses, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>);


        return(
            <div>
                <AppNav/>
                <h2>Course</h2>
                {
                    Courses.map( course =>
                        <div id={course.id}>
                            {course.name}
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Course;