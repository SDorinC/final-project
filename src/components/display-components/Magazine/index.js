import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation, useOutletContext} from "react-router";
import Article from "../../aux-components/Article";
import {Paper} from "@mui/material";

const Magazine = () => {
    const savedArticles = localStorage.getItem("articles");
    const savedArray = JSON.parse(savedArticles);
    const {loggedUser} = useOutletContext();
    const [articlesArray, setArticlesArray] = useState(savedArray);
    const showArticlesArray = [];
    const [visibleAddContent, setVisibleAddContent] = useState(false);
    const [viewArticle, setViewArticle] = useState();
    const [viewTitle, setViewTitle] = useState();
    const [visibleArticle, setVisibleArticle] = useState(false);
    const [visibleBorder, setVisibleBorder] = useState(false);
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

    useEffect(() => {
        if ((articlesArray !== undefined) && (articlesArray !== null)) {
            if (articlesArray.length > 0) {
                setVisibleBorder(true);
            } else {
                setVisibleBorder(false);
            }
        }
    }, [articlesArray])

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
                    if (articlesArray === null) {
                        setArticlesArray([tempObj]);
                    } else {
                        setArticlesArray([...articlesArray, tempObj]);
                    }
                }
            }
        } else {
            for (let i = 0; i < articlesArray.length; i++) {
                if (articlesArray[i].title === editItem) {
                    title.value = articlesArray[i].title;
                    content.value = articlesArray[i].content;
                    bttn.innerText = "Editare articol";
                    bttn.onclick = function () {
                        newItem.title = title.value;
                        newItem.content = content.value;
                        articlesArray[i] = newItem;
                        setEditItem(undefined);
                        title.value = "";
                        content.value = "";
                        bttn.innerText = "Adăugare articol";
                        localStorage.setItem("articles", JSON.stringify(articlesArray));
                    }
                }
            }
        }
    }

    if ((articlesArray !== null) && (articlesArray.length > 0)) {
        articlesArray.forEach(element => {
            showArticlesArray.push(<Article key={Math.random()} title={element.title} content={element.content}
                                            loggedUser={loggedUser} setDeleteItem={setDeleteItem}
                                            setEditItem={setEditItem}
                                            setViewArticle={setViewArticle} setViewTitle={setViewTitle}/>)
        })
        articlesArray.forEach(element => {
            if (element.title === deleteItem) {
                articlesArray.splice(articlesArray.indexOf(element), 1);
                setDeleteItem(undefined);
            }
        })
        localStorage.setItem("articles", JSON.stringify(articlesArray));
    }

    const goBack = () => {
        setVisibleArticle(false);
        setViewArticle(undefined);
        setViewTitle(undefined);
    }

    useEffect(() => {
        if (viewArticle !== undefined) {
            setVisibleArticle(true);
        } else {
            setVisibleArticle(false);
        }
    }, [viewArticle])

    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="main-display-magazine"
                 style={{
                     display: visibleArticle ? "none" : "inline-flex",
                     border: visibleBorder ? "5px solid #34495e" : "none"
                 }}>
                <div className="editor-container" style={{display: visibleAddContent ? "inline-flex" : "none"}}>
                <textarea className="title-add" placeholder="Titlu...">
                </textarea>
                    <textarea className="content-add" placeholder="Conținut...">
                </textarea>
                    <button className="button-add">
                        Adăugare articol
                    </button>
                </div>
                <div className="show-articles">
                    {showArticlesArray}
                </div>
            </div>
            <div className="show-article-true" style={{display: visibleArticle ? "inline-block" : "none"}}>
                <Paper elevation={3}>
                    <p onClick={goBack} className="back-button">Înapoi</p>
                    <p className="title-styling">{viewTitle}</p>
                    <p className="article-styling">{viewArticle}</p>
                </Paper>
            </div>
        </>
    );
};

export default Magazine;