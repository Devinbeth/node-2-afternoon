import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            name: "",
            description: "",
            price: 0,
            imageurl: "",
            editBool: false,
            addBool: false
        };
        this.choose = this.choose.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.editFields = this.editFields.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
            this.setState({product: res.data[0]});
        });
    }

    choose() {
        if (this.state.addBool) {
            this.add();
        } else if (this.state.editBool) {
            this.edit();
        }
    }

    add() {
        if (window.confirm('Are you sure you want to add this product?')) {
            let newProduct = {
                "name": this.state.name,
                "description": this.state.description,
                "price": this.state.price,
                "imageurl": this.state.image_url
            };
            axios.post('/api/product', newProduct).then(res => {
                this.setState({product: res.data});
                this.props.history.push(`/product/${this.state.product.product_id}`);
            });
        }
        this.setState({editBool: false, addBool: false});
    }

    remove() {
        if (window.confirm(`Are you sure you want to delete the ${this.state.product.name}, Product ID: ${this.state.product.product_id}?`)) {
            axios.delete(`/api/product/${this.state.product.product_id}`).then(res => {
                this.setState({product: res.data});
            });
        }
    }

    edit() {
        let changes = {
            "name": this.state.name || this.state.product.name,
            "description": this.state.description || this.state.product.description,
            "price": this.state.price || this.state.product.price,
            "imageurl": this.state.image_url || this.state.product.image_url
        };
        axios.put(`/api/product/${this.state.product.product_id}`, changes).then(res => {
            this.setState({product: res.data});
        });
        this.setState({editBool: false, addBool: false});
    }

    editFields() {
        if(this.state.editBool || this.state.addBool) {
            return (
                <div>
                    <p>Name: <input onChange={(e) => this.setState({name: e.target.value})}/></p>
                    <p>Description: <input onChange={(e) => this.setState({description: e.target.value})}/></p>
                    <p>Price: <input onChange={(e) => this.setState({price: e.target.value})}/></p>
                    <p>Image URL: <input onChange={(e) => this.setState({image_url: e.target.value})}/></p>
                    <button onClick={() => this.setState({editBool: false, addBool: false})}>Cancel</button>
                    <button onClick={() => this.choose()}>Save</button>
                </div>
            );
        }
        else if (this.state.product) {
            return (
                <div>
                    <button onClick={() => this.setState({addBool: true})}>Add</button>
                    <button onClick={() => this.setState({editBool: true})}>Edit</button>
                    <button onClick={() => this.remove()}>Delete</button>
                </div>
            );
        }
        else {
            return <button onClick={() => this.setState({addBool: true})}>Add</button>;
        }
    }

    render() {
        let productInfo;
        if (this.state.product) {
            productInfo = <p> Product ID: {this.state.product.product_id} | Name: {this.state.product.name} | Description: {this.state.product.description} | Price: {`$${this.state.product.price}`} | Image URL: {this.state.product.image_url}</p>;
        }
        return (
            <div>
                <Link to='/'><h3> Home </h3></Link>
                <Link to='/products'><h3> Products </h3></Link>
                <h1>Product Table Updates</h1>
                {productInfo}
                {this.editFields()}
            </div>
        )
    }
}