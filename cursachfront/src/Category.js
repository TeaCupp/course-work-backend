import React, {Component} from 'react';
import AppNav from "./AppNav";
import {Helmet} from "react-helmet";
import {Button, Input, Label, Container, Form, FormGroup, Table} from "reactstrap";


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


        let optionList1 =
            Categories.map( (category) =>
                <option value={category.id} key={category.id}>
                    {category.name}
                </option>
            );

        return(
                <div>
                    <AppNav/>
                    <Container>
                    <h2>Categories</h2>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleCategoryChange}>
                                {optionList1}
                            </select>
                        </FormGroup>
                    <Helmet>
                        <style>{'body { background-color: lavender; }'}</style>
                    </Helmet>
                    </Container>
                </div>
        );
    }
}

export default Category;