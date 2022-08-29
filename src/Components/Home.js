import React from "react";
import {useNavigate} from "react-router-dom";
import "../Counter.css";

function Home(){
    const navigate = useNavigate()

    const handleclick = () => {
        navigate("/about")
    }
    return(
        <>
            <div className="main">
                <div className="content-home">
                    <h1>Hello to the new fun page</h1>
                    <h2>Here you will find counter that increases numbers when you perss on it it will count all the clicks you kan make!!</h2>
                    <div className="main-child">
                        <p> Go to the about page </p>
                        <button onClick={handleclick}> Click Me</button>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Home;