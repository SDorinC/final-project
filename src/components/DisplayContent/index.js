import "./styles.css";
import {Outlet} from "react-router";

const DisplayContent = ({data}) => {
    let {setLogin, setNewUser, loggedUser, teachersArray, studentsArray} = data;

    return (
        <div className="display-content">
            <Outlet context={{setLogin, setNewUser, loggedUser, teachersArray, studentsArray}}/>
        </div>
    );
};

export default DisplayContent;