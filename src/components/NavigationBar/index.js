import "./styles.css";
import {Link} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {useEffect, useState} from "react";

const NavigationBar = ({loginLevel}) => {
    const [visibleAdduser, setVisibleAddUser] = useState(false);
    const [visibleRegistry, setVisibleRegistry] = useState(false);
    const [visibleNone, setVisibleNone] = useState(false);

    useEffect(() => {
        if (loginLevel === 1) {
            setVisibleAddUser(true);
        } else {
            setVisibleAddUser(false);
        }

        if (loginLevel === 2) {
            setVisibleNone(true);
        } else {
            setVisibleNone(false);
        }

        if ((loginLevel === 3) || (loginLevel === 4)) {
            setVisibleRegistry(true);
        } else {
            setVisibleRegistry(false);
        }
    }, [loginLevel])

    return (
        <div className="navigation-bar">
            <Link className="btn" to="/">
                <ImHome className="home-bttn"/>
            </Link>
            <Link className="btn" to="/activitati">
                activități
            </Link>
            <Link className="btn" to="/revista-scolii">
                revistă
            </Link>
            <Link className="btn" to="/profesori">
                profesori
            </Link>
            <Link className="btn" to="/contact">
                contact
            </Link>
            <Link className="registry" to="/catalog"
                  style={{display: visibleRegistry ? "inline-block" : "none"}}>
                catalog
            </Link>
            <Link className="add-user" to="/adaugare-utilizator"
                  style={{display: visibleAdduser ? "inline-block" : "none"}}>
                adăugare utilizator
            </Link>
            <Link className="login" to="/autentificare"
                  style={{display: (loginLevel === undefined) ? "inline-block" : "none"}}>
                autentificare
            </Link>
            <div className="hidden-div" style={{display: visibleNone ? "inline-block" : "none"}}>
            </div>
            <Link className="logout" to="/deconectare"
                  style={{display: (loginLevel === undefined) ? "none" : "inline-block"}}>
                deconectare
            </Link>
        </div>
    );
};

export default NavigationBar;