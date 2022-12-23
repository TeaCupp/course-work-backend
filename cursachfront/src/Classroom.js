import React, {Component} from 'react';
import AppNav from "./AppNav";


class Classroom extends Component {
    state = {
        isLoading :true,
        Classrooms : []
    }

    async componentDidMount() {
        const response = await fetch('/api/classrooms');
        const body = await response.json();
        this.setState({Classrooms: body, isLoading: false});
    }

    render() {
        const {Classrooms, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>);


        return(
            <div>
                <AppNav/>
                <h2>Classroom</h2>
                {
                    Classrooms.map( classroom =>
                        <div id={classroom.id}>
                            {classroom.name}
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Classroom;