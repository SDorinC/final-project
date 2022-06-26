import "./styles.css";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {useEffect, useState} from "react";
import {Paper} from "@mui/material";

const Article = ({title, content, loggedUser, setDeleteItem, setEditItem, setViewArticle, setViewTitle}) => {
    const [visibleButtonsArt, setVisibleButtonsArt] = useState(false);
    const editButton = () => {
        setEditItem(title);
    }
    const deleteButton = () => {
        setDeleteItem(title);
    }

    const viewArticle = () => {
        setViewArticle(content);
        setViewTitle(title);
    }

    useEffect(() => {
        if (loggedUser._loginLevel === 2) {
            setVisibleButtonsArt(true);
        } else {
            setVisibleButtonsArt(false);
        }
    }, [loggedUser])

    return (
        <div className="article-container-wrapper">
            <div className="article-container">
                <p onClick={viewArticle} className="article-title">{title}</p>
                <Paper elevation={3}>
                    <p className="article-content">{content}</p>
                </Paper>
            </div>
            <div style={{display: visibleButtonsArt ? "inline-block" : "none"}}>
                <AiFillEdit onClick={editButton} className="editor-button edit-button"/>
                <AiFillDelete onClick={deleteButton} className="editor-button delete-button"/>
            </div>
        </div>
    );
};

export default Article;