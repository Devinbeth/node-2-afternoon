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
            this.setState({products: res.data});
        });
    }

    render() {
        this.state.products.sort((a, b) => a.product_id > b.product_id);
        let productList = this.state.products.map((e, i) => {
            return (
                <div key={i}>
                        <p><Link to={`/product/${e.product_id}`}> Product ID: {e.product_id}</Link> | Name: {e.name} | Description: {e.description} | Price: {`$${e.price}`} | Image URL: {e.image_url}</p>
                </div>
            );
        });

        return (
            <div>
                <Link to='/'><h3> Home </h3></Link>
                <h1>Products Table</h1>
                <div>
                    {productList}
                </div>
                <Link to='/product/0'><h3> Add New Item </h3></Link>
            </div>
        );
    }
}
