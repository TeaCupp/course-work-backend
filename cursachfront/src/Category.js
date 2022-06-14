import React, {Component} from 'react';
import AppNav from "./AppNav";
import {Helmet} from "react-helmet";


class Category extends Component {
    state = {
        isLoading :true,
        Categories : []
    }

    async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories: body, isLoading: false});
    }

    render() {
        const {Categories, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>);


        return(
                <div>
                    <AppNav/>
                    <h2>Categories</h2>
                    {
                        Categories.map( category =>
                            <div id={category.id}>
                                {category.name}
                            </div>
                        )
                    }
                    <Helmet>
                        <style>{'body { background-color: lavender; }'}</style>
                    </Helmet>

                </div>
        );
    }
}

export default Category;