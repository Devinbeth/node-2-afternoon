import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Database:</h1>
            <Link to='/people'><h3> People Table </h3></Link>
            <Link to='/products'><h3> Products Table </h3></Link>
            <Link to='/purchases'><h3> Purchases Table </h3></Link>
        </div>
    );
}