import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation, useOutletContext} from "react-router";
import {useForm} from "react-hook-form";

const Login = () => {
    let userIsLogged = false;

    const {setLogin, loggedUser} = useOutletContext();
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState({});

    if (Object.keys(loggedUser).length > 0) {
        userIsLogged = true;
    }

    useEffect(() => {
        setLogin(data);
    }, [data.name, data.pass])


    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="login-container" style={{display: userIsLogged ? "none" : "inline-block"}}>
                <form onSubmit={handleSubmit(setData)}>
                    <label>Utilizator</label>
                    <input {...register("name", {required: true})} placeholder=" introduceți numele utilizatorului"
                           className="input-field"/>
                    <label>Parolă</label>
                    <input type="password" {...register("pass", {required: true})}
                           placeholder=" introduceți parola"
                           className="input-field"/>
                    <input type="submit" value="Autentificare" className="input-button"/>
                </form>
            </div>
            <div className="message" style={{display: userIsLogged ? "inline-block" : "none"}}>
                <p>BINE AI VENIT,</p>
                <p>{data.name}</p>
            </div>
        </>
    );
};

export default Login;