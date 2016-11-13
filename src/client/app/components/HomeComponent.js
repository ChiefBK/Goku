import React from 'react';
import { Link } from 'react-router';

class HomeComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <Link to="exchange">Exchange</Link>
            </div>
        )
    }
}

export default HomeComponent;