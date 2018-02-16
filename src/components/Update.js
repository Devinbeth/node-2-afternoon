import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Update extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Update</h1>
                <Link to='/'> Home </Link>
            </div>
        )
    }
}