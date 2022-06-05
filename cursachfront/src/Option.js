import React, {Component} from 'react';
import AppNav from "./AppNav";


class Option extends Component {
    state = {
        isLoading :true,
        Options : []
    }

    async componentDidMount() {
        const response = await fetch('/api/options');
        const body = await response.json();
        this.setState({Options: body, isLoading: false});
    }

    render() {
        const {Options, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>);


        return(
            <div>
                <AppNav/>
                <h2>Option</h2>
                {
                    Options.map( option =>
                        <div id={option.id}>
                            {option.name}
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Option;