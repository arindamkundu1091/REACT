import React from 'react'
import { Link } from "react-router-dom";

export default function ShowResult() {
    return (
        <div>
            <div className="submitdiv">
                <Link className="submit" role='button' to='/result'>Show Results</Link>
            </div>
        </div>
    )
}
