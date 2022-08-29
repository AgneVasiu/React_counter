import React from "react";
import {useNavigate} from "react-router-dom";
import "../Counter.css";

function About(){
    const navigate = useNavigate()

    const handleclick = () => {
        navigate("/")
    }
    return(
        <>
            <div className="main">
                <div className="content-home">
                 <h1>This is about page</h1>
                 <h2>This page was created to start my first project with react!!!</h2>
                </div>
                    <div className="main-child">
                            <p> Go to the home page </p>
                            <button onClick={handleclick}> Click Me</button>
                    </div>
            </div>
        </>
    );
}

export default About;