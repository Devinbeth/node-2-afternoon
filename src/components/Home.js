import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Databases: Products Table</h1>
            <Link to='/'> Home </Link>
            <br/>
            <Link to='/products'> Products </Link>
            <br/>
            <Link to='/update'> Updates </Link>
        </div>
    );
}