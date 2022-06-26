import "./styles.css";
import {useState} from "react";
import {IoIosArrowDropupCircle} from "react-icons/io";

const BackToTopBttn = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <IoIosArrowDropupCircle className="up-button" onClick={scrollToTop} style={{display: visible ? "inline" : "none"}}/>
        </>
    );
};

export default BackToTopBttn;