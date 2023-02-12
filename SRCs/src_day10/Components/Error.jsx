import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
            <h1>404 page not found</h1>
            <Link to='/'>Go to Home</Link>
        </div>
    )
}

export default Error