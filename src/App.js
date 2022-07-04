import './App.css';
import SchoolName from "./components/SchoolName";
import NavigationBar from "./components/NavigationBar";
import DisplayContent from "./components/DisplayContent";
import BackToTopBttn from "./components/BackToTopButton";
import {useEffect, useState} from "react";
import {User, Admin, Editor, Teacher, Student} from "./users.js";

const user1 = new Admin("Dorin Sterian", "1234");
const user2 = new Editor("editorr", "1234");
const user3 = new Teacher("profesor", "1234");
const user4 = new Student("elev", "1234");


const createUser = (user) => {
    if (user.loginLevel === "2") {
        usersArray.push(new Editor(user.name, user.pass));
    } else if (user.loginLevel === "3") {
        usersArray.push(new Teacher(user.name, user.pass, user.subject, {1: "5A", 2: "5B", 3: "5C"}));
    } else if (user.loginLevel === "4") {
        usersArray.push(new Student(user.name, user.pass, user.schoolCl, user.grades, user.absences));
    }
}

const usersArray = [];
usersArray.push(user1, user2, user3, user4);

const savedUsers = {...localStorage};

const savedValuesArray = Object.values(savedUsers)
savedValuesArray.forEach(element => {
    let objElem = JSON.parse(element);
    if (objElem.name !== undefined) {
        createUser(objElem);
    }
})

const teachersArray = [];
usersArray.forEach((element) => {
    if (element instanceof Teacher) {
        teachersArray.push(element);
    }
})

teachersArray.sort(function (a, b) {
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

const studentsArray = [];
usersArray.forEach((element) => {
    if (element instanceof Student) {
        studentsArray.push(element);
    }
})

function App() {
    let navType = performance.getEntriesByType("navigation");
    let loggedUser = {};

    const [newUser, setNewUser] = useState({});
    const [login, setLogin] = useState({});

    useEffect(() => {
        if (Object.keys(newUser).length > 0) {
            for (let i = 0; i < usersArray.length; i++) {
                if ((newUser.name === usersArray[i]._name) && (newUser.pass === usersArray[i]._password)) {
                    window.duplicate = true;
                    return;
                }
            }
            createUser(newUser);
            if (newUser.subject.length > 0) {
                teachersArray.push(new Teacher(newUser.name, newUser.pass, newUser.subject));
                teachersArray.sort(function (a, b) {
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
            }
            localStorage.setItem(newUser.name.concat(newUser.pass), JSON.stringify(newUser));
            window.duplicate = false;
        }
    }, [newUser])

    usersArray.forEach(element => {
        if ((login.name === element._name) && (login.pass === element._password)) {
            loggedUser = element;
        }
    })

    if (navType[0].type === "reload") {
        window.location.href = "/";
    }

    return (
        <div className="main-container">
            <SchoolName/>
            <NavigationBar loginLevel={loggedUser._loginLevel}/>
            <DisplayContent data={{setLogin, setNewUser, loggedUser, teachersArray, studentsArray}}/>
            <BackToTopBttn/>
        </div>
    );
}

export default App;
