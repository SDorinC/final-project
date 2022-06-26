import "./styles.css";
import {useEffect, useState} from "react";
import Table from "../Table";

const StudentRegistry = ({loggedUser}) => {
    const [subjectsArray, setSubjectsArray] = useState([]);

    useEffect(() => {
        const tempArray = [];
        if (loggedUser._loginLevel === 4) {
            loggedUser._grades.forEach(element => {
                tempArray.push(element.split("_"));
            })
            loggedUser.absences.forEach(element => {
                tempArray.push(element.split("_"));
            })
        }
        const subjectsSet = new Set();
        tempArray.forEach(element => {
            subjectsSet.add(element[0]);
        })
        subjectsSet.forEach(element => {
            setSubjectsArray(subjectsArray => [...subjectsArray, element])
        })
    }, [])

    return (
        <div className="student-registry">
            <p className="student-registry-text">Bine ai venit,</p>
            <p className="student-registry-name">{loggedUser._name}</p>
            <Table subjectsArray={subjectsArray} loggedUser={loggedUser}/>
        </div>
    );
};

export default StudentRegistry;