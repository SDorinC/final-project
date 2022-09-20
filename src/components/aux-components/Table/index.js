import "./styles.css";
import {useEffect, useState} from "react";

const Table = ({subjectsArray, loggedUser}) => {
    const studentRegistryArray = [];
    const completeStudentData = [];
    const [finalArray, setFinalArray] = useState([]);

    if ((subjectsArray !== undefined)) {
        const tempArr = []
        tempArr.push(subjectsArray.sort(function (a, b) {
            const nameA = a.toUpperCase();
            const nameB = b.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }))
    }

    useEffect(() => {
        if (loggedUser._loginLevel === 4) {
            const gradesArray = [];
            const absencesArray = [];
            if ((loggedUser._grades !== undefined) && (loggedUser._grades !== null)) {
                loggedUser._grades.forEach(el => {
                    gradesArray.push(el.split("_"))
                })
            }
            if ((loggedUser._absences !== undefined) && (loggedUser._absences !== null)) {
                loggedUser._absences.forEach(el => {
                    absencesArray.push(el.split("_"))
                })
            }
            const studentDataArr = [];
            subjectsArray.forEach(element => {
                const tempGradesArr = [];
                const tempAbsencesArr = [];
                gradesArray.forEach(el => {
                    if (element === el[0]) {
                        tempGradesArr.push(el[1]);
                    }
                })
                absencesArray.forEach(el => {
                    if (element === el[0]) {
                        tempAbsencesArr.push(el[1]);
                    }
                })
                studentDataArr.push({name: element, grades: tempGradesArr, absences: tempAbsencesArr});
            })
            completeStudentData.push(studentDataArr);
            setFinalArray(completeStudentData[0]);
        }
    }, [subjectsArray])

    if ((finalArray !== undefined) && (finalArray.length > 0)) {
        finalArray.forEach(element => {
            studentRegistryArray.push(<tr className="table-row" key={Math.random()}>
                <td>{element.name}</td>
                <td className="data-row">{element.grades}</td>
                <td className="data-row">{element.absences}</td>
            </tr>)
        })
    }

    return (
        <div>
            <table className="student-table">
                <thead>
                <tr>
                    <th>Materie</th>
                    <th>Note</th>
                    <th>Absențe</th>
                </tr>
                </thead>
                <tbody>
                {studentRegistryArray}
                </tbody>
            </table>
        </div>
    );
};

export default Table;