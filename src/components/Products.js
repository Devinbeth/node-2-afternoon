import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            console.log(res.data);
            this.setState({products: res.data});
        });
    }

    render() {
        let buttonList = this.state.products.map((e, i) => {
            return (
                <div key={i}>
                    <Link to='/'>
                        {e.name}
                    </Link>
                </div>
            );
        });

        return (
            <div>
                <h1>Products</h1>
                <Link to='/'> Home </Link>
                <div>
                    {buttonList}
                </div>
            </div>
        );
    }
}