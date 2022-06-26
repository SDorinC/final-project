import "./styles.css";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {useEffect, useState} from "react";
import {Card} from "@mui/material";

const Activity = ({title, content, loggedUser, setDeleteItem, setEditItem}) => {
    const [visibleButtons, setVisibleButtons] = useState(false);
    const editButton = () => {
        setEditItem(title);
    }
    const deleteButton = () => {
        setDeleteItem(title);
    }

    useEffect(() => {
        if (loggedUser._loginLevel === 2) {
            setVisibleButtons(true);
        } else {
            setVisibleButtons(false);
        }
    }, [loggedUser])

    return (
        <div className="activity-container-wrapper">
            <Card className="activity-container">
                <p className="activity-title">{title}</p>
                <p className="activity-content">{content}</p>
            </Card>
            <div style={{display: visibleButtons ? "inline-block" : "none"}}>
                <AiFillEdit onClick={editButton} className="editor-button edit-button"/>
                <AiFillDelete onClick={deleteButton} className="editor-button delete-button"/>
            </div>
        </div>
    );
};


export default Activity;