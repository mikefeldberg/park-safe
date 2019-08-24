import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    return (
        <Link to="/application">
            <div className="text-center">
                <h1>We strive to provide safe parking in the greater LA area</h1>
                <br></br>
                <br></br>
                <button className="btn btn-safepark-alt">Apply Now</button>
            </div>
        </Link>
    );
}

export default HomePage;