import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation, useOutletContext} from "react-router";
import TeacherRegistry from "../../aux-components/TeacherRegistry";
import StudentRegistry from "../../aux-components/StudentRegistry";

const Registry = () => {
    const {loggedUser, studentsArray,setAddModifiedUser} = useOutletContext();
    const [isTeacher, setIsTeacher] = useState(null);

    studentsArray.sort(function (a, b) {
        const nameA = a._name.toUpperCase();
        const nameB = b._name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })

    useEffect(() => {
        if (loggedUser._loginLevel === 3) {
            setIsTeacher(true);
        } else {
            setIsTeacher(false);
        }
    }, [loggedUser])

    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            {isTeacher ? (<TeacherRegistry loggedUser={loggedUser} studentsArray={studentsArray} setAddModifiedUser={setAddModifiedUser}/>) : (
                <StudentRegistry loggedUser={loggedUser}/>)}
        </>
    );
};

export default Registry;