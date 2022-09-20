import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation, useOutletContext} from "react-router";
import TeacherInfo from "../../aux-components/TeacherInfo";

const Teachers = () => {
    const {teachersArray} = useOutletContext();
    const [visibleBorder, setVisibleBorder] = useState(false);
    const teachersInfo = [];

    useEffect(() => {
        if (teachersArray.length > 0) {
            setVisibleBorder(true);
        } else {
            setVisibleBorder(false);
        }
    }, [teachersArray])

    teachersArray.forEach(element => {
            teachersInfo.push(<TeacherInfo key={element._name + element._password} name={element._name}
                                           subject={"Profesor de " + element._subject} photo={element._photo}/>)
        }
    )

    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="teacher-info-container" style={{border: visibleBorder ? "5px solid #34495e" : "none"}}>
            {teachersInfo}
        </div>
    );
};

export default Teachers;