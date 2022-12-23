import React, {Component, Fragment} from "react";



class Classroom extends Component {
    state = {
        isLoading : true,
        Classrooms : []
    }


    async componentDidMount(){
        const response=await fetch('/api/classrooms')
        const body = await response.json();
        this.setState({Classrooms :body , isLoading: false});
    }



    render() {
        const {Classrooms, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>);



        return (
            <div>
                <h2>Classrooms</h2>
                {
                    Classrooms.map( (classroom) =>
                        <option value={classroom.id} key={classroom.id}>
                            {classroom.name}
                        </option>)
                }
            </div>
        );
    }
}

export default Classroom;