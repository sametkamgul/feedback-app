import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>About This Project</h1>
            <p>This is a React App to leave feedback for a product service</p>
            <p>version 1.0</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
    );
}

export default AboutPage;
