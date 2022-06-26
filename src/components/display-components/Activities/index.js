import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation, useOutletContext} from "react-router";
import Activity from "../../aux-components/Activity";

const Activities = () => {
        const savedActivities = localStorage.getItem("activities");
        const savedArray = JSON.parse(savedActivities);
        const {loggedUser} = useOutletContext();
        const [activitiesArray, setActivitiesArray] = useState(savedArray);
        const showActivitiesArray = [];
        const [visibleAddContent, setVisibleAddContent] = useState(false);
        const [deleteItem, setDeleteItem] = useState();
        const [editItem, setEditItem] = useState();
        let newItem = {};
        let title;
        let content;
        let bttn;

        useEffect(() => {
            if (loggedUser._loginLevel === 2) {
                setVisibleAddContent(true);
            } else {
                setVisibleAddContent(false);
            }
        }, [loggedUser])

        if (loggedUser._loginLevel === 2) {
            title = document.querySelector(".title-add");
            content = document.querySelector(".content-add");
            bttn = document.querySelector(".button-add");
        }

        if ((bttn !== null) && (bttn !== undefined)) {
            if (editItem === undefined) {
                bttn.onclick = function () {
                    let tempObj = ({title: title.value, content: content.value});
                    title.value = "";
                    content.value = "";
                    if ((tempObj.title === "") || tempObj.content === "") {
                        return;
                    } else {
                        if (activitiesArray === null) {
                            setActivitiesArray([tempObj]);
                        } else {
                            setActivitiesArray([...activitiesArray, tempObj]);
                        }
                    }
                }
            } else {
                for (let i = 0; i < activitiesArray.length; i++) {
                    if (activitiesArray[i].title === editItem) {
                        title.value = activitiesArray[i].title;
                        content.value = activitiesArray[i].content;
                        bttn.innerText = "Editare activitate";
                        bttn.onclick = function () {
                            newItem.title = title.value;
                            newItem.content = content.value;
                            activitiesArray[i] = newItem;
                            setEditItem(undefined);
                            title.value = "";
                            content.value = "";
                            bttn.innerText = "Adăugare activitate";
                            localStorage.setItem("activities", JSON.stringify(activitiesArray));
                        }
                    }
                }
            }
        }

        if ((activitiesArray !== null) && (activitiesArray.length > 0)) {
            activitiesArray.forEach(element => {
                showActivitiesArray.push(<Activity key={Math.random()} title={element.title} content={element.content}
                                                   loggedUser={loggedUser} setDeleteItem={setDeleteItem}
                                                   setEditItem={setEditItem}/>)
            })
            activitiesArray.forEach(element => {
                if (element.title === deleteItem) {
                    activitiesArray.splice(activitiesArray.indexOf(element), 1);
                    setDeleteItem(undefined);
                }
            })
            localStorage.setItem("activities", JSON.stringify(activitiesArray));
        }

        useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        });

        return (
            <div className="main-display-activities">
                <div className="editor-container" style={{display: visibleAddContent ? "inline-flex" : "none"}}>
                <textarea className="title-add" placeholder="Titlu..." maxLength="100">
                </textarea>
                    <textarea className="content-add" placeholder="Conținut..." maxLength="200">
                </textarea>
                    <button className="button-add">
                        Adăugare activitate
                    </button>
                </div>
                <div className="show-activities">
                    {showActivitiesArray}
                </div>
            </div>
        );
    }
;

export default Activities;