import "./styles.css";
import {useEffect} from "react";
import {FaSpinner} from "react-icons/fa";

const Logout = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 500);
    })

    return (
        <div className="logout-div">
            <p className="text">Deconectare...</p>
            <FaSpinner className="spinner"/>
        </div>
    );
};

export default Logout;