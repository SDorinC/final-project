import './App.css';
import SchoolName from "./components/SchoolName";
import NavigationBar from "./components/NavigationBar";
import DisplayContent from "./components/DisplayContent";
import BackToTopBttn from "./components/BackToTopButton";
import {useEffect, useState} from "react";
import {User, Admin, Editor, Teacher, Student} from "./users.js";
import Footer from "./components/Footer";
import photo1 from "./resources/photo1.jpg";
import photo2 from "./resources/photo2.jpg";
import photo3 from "./resources/photo3.jpg";
import photo4 from "./resources/photo4.jpg";

const user1 = new Admin("Dorin Sterian", "1234");
const user2 = new Teacher("Alexandra Baciu", "1234", "Fizica", {1: "5A", 2: "5B", 3: "5C"}, photo1);
const user3 = new Teacher("Dan Gheorghe", "1234", "Chimie", {1: "5A", 2: "5B", 3: "5C"}, photo2);
const user4 = new Teacher("Daniela Ionescu", "1234", "Biologie", {1: "5A", 2: "5B", 3: "5C"}, photo3);
const user5 = new Teacher("Dorin Popescu", "1234", "Matematica", {1: "5A", 2: "5B", 3: "5C"}, photo4);

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
usersArray.push(user1, user2, user3, user4, user5);

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
            <Footer/>
        </div>
    );
}

export default App;
