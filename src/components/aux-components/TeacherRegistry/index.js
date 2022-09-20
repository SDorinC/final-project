import "./styles.css";
import {useEffect, useState} from "react";

const TeacherRegistry = ({loggedUser, studentsArray}) => {
    const classesArray = [];
    const classStudents = [];
    const selectedClassArray = [];
    const [selectedClass, setSelectedClass] = useState();
    const [selectedStudent, setSelectedStudent] = useState({_name: ""});
    const [visibleRegistry, setVisibleRegistry] = useState(false);
    const [visibleStudentData, setVisibleStudentData] = useState(false);
    const [refreshComp, setRefreshComp] = useState(1);
    const [selectedRow, setSelectedRow] = useState();
    const rowsArray = document.querySelectorAll(".table-row");
    const [savedRow, setSavedRow] = useState();

    let selectedStudentNr = 0;
    let gradeInput;
    let absenceInput;

    if ((loggedUser._classes !== undefined) && (loggedUser._classes !== null)) {
        Object.values(loggedUser._classes).forEach(element => {
            classesArray.push(<option key={Math.random()} value={element.toString()}
                                      style={{textAlign: "center", fontSize: "1rem"}}>Clasa {element}</option>)
        })
    }
    useEffect(() => {
        if (selectedClass === undefined) {
            setVisibleRegistry(false);
        } else {
            setVisibleRegistry(true);
        }
    }, [selectedClass])

    useEffect(() => {
        if (selectedStudent._name === "") {
            setVisibleStudentData(false);
        } else {
            setVisibleStudentData(true);
            gradeInput.value = "";
            absenceInput.value = "";
        }
    }, [selectedStudent])

    rowsArray.forEach(element => {
        if (element.id === selectedRow) {
            element.style.backgroundColor = "#1abc9c";
        }
    })

    if (selectedStudent._name !== "") {
        gradeInput = document.querySelector("#grade");
        absenceInput = document.querySelector("#absence");
    }

    const currentValue = (e) => {
        setSelectedClass(e.target.value);
        setSelectedStudent({_name: ""});
    }

    const addGrade = () => {
        if (gradeInput.value !== "") {
            if (selectedStudent._grades.length === 0) {
                selectedStudent._grades.push(loggedUser._subject + "_" + gradeInput.value);
            } else {
                selectedStudent._grades.push(loggedUser._subject + "_, " + gradeInput.value);
            }
            setSelectedStudent(selectedStudent)
            gradeInput.value = "";
            let newObj = {
                name: selectedStudent._name,
                pass: selectedStudent._password,
                subject: selectedStudent._subject,
                schoolCl: selectedStudent._schoolCl,
                loginLevel: selectedStudent._loginLevel.toString(),
                absences: selectedStudent._absences,
                grades: selectedStudent._grades
            }
            localStorage.setItem(newObj.name.concat(newObj.pass), JSON.stringify(newObj));
            setRefreshComp(Math.random());
        }
    }

    const addAbsence = () => {
        if (absenceInput.value !== "") {
            if (selectedStudent._absences.length === 0) {
                selectedStudent._absences.push(loggedUser._subject + "_" + absenceInput.value);
            } else {
                selectedStudent._absences.push(loggedUser._subject + "_, " + absenceInput.value);
            }
            setSelectedStudent(selectedStudent)
            absenceInput.value = "";
            let newObj = {
                name: selectedStudent._name,
                pass: selectedStudent._password,
                subject: selectedStudent._subject,
                schoolCl: selectedStudent._schoolCl,
                loginLevel: selectedStudent._loginLevel.toString(),
                absences: selectedStudent._absences,
                grades: selectedStudent._grades
            }
            localStorage.setItem(newObj.name.concat(newObj.pass), JSON.stringify(newObj));
            setRefreshComp(Math.random());
        }
    }

    const selectStudent = (e) => {
        setSelectedRow(e.currentTarget.id)
        selectedStudentNr = e.currentTarget.id;
        setSelectedStudent(selectedClassArray[selectedStudentNr - 1]);
    }

    studentsArray.forEach(element => {
        if (element._absences === undefined) {
            element._absences = [];
        }
        if (element._grades === undefined) {
            element._grades = [];
        }
        if (selectedClass === element._schoolCl) {
            let absencesArr = [];
            let gradesArr = [];
            selectedClassArray.push(element);
            element._absences.forEach(el => {
                if (el.includes(loggedUser._subject)) {
                    absencesArr.push(el.split("_").pop());
                }
            })
            element._grades.forEach(el => {
                if (el.includes(loggedUser._subject)) {
                    gradesArr.push(el.split("_").pop());
                }
            })
            classStudents.push(<tr className="table-row" id={`${classStudents.length + 1}`} key={Math.random()}
                                   onClick={selectStudent}>
                <td>{element._name}</td>
                <td className="data-row">{gradesArr}</td>
                <td className="data-row">{absencesArr}</td>
            </tr>)
        }
    })

    return (
        <>
            <div className="teacher-registry">
                <div className="teacher-registry-info">
                    <p className="teacher-registry-name">Profesor: {loggedUser._name}</p>
                    <p className="teacher-registry-subject">Materie predată: {loggedUser._subject}</p>
                </div>
                <p className="teacher-registry-title">CATALOG</p>
                <div className="class-selector">
                    <p className="class-selector-title">Alegeți clasa</p>
                    <select defaultValue={'DEFAULT'} className="class-selector-items" onChange={currentValue}
                            value={selectedClass}>
                        <option hidden disabled value="DEFAULT">Alege clasa</option>
                        {classesArray}
                    </select>
                </div>
            </div>
            <div className="registry-container" style={{display: visibleRegistry ? "inline-flex" : "none"}}>
                <p className="selected-class-name">Clasa {selectedClass}</p>
                <div className="selected-student-data" style={{display: visibleStudentData ? "inline-flex" : "none"}}>
                    <p className="selected-student-name">Elev selectat: {`${selectedStudent._name}`}</p>
                    <div className="add-student-data">
                        <div className="student-data-input">
                            <button onClick={addGrade}>Adăugare notă</button>
                            <input type="text" id="grade"/>
                        </div>
                        <div className="student-data-input">
                            <button onClick={addAbsence}>Adăugare absență</button>
                            <input type="text" id="absence"/>
                        </div>
                    </div>
                </div>
                <table className="student-table">
                    <thead>
                    <tr>
                        <th>Elev</th>
                        <th>Note</th>
                        <th>Absențe</th>
                    </tr>
                    </thead>
                    <tbody>
                    {classStudents}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeacherRegistry;