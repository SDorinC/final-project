import "./styles.css";
import {useEffect} from "react";
import {useLocation, useOutletContext} from "react-router";
import {useForm} from "react-hook-form";
import {useState} from "react";

const AddUser = () => {
    const {setNewUser} = useOutletContext();
    const {register, handleSubmit, reset} = useForm();
    const [data, setData] = useState({});
    const [isTeacher, setIsTeacher] = useState(false);
    const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setNewUser(data);
            setIsTeacher(false);
            setIsStudent(false);
            setTimeout(() => {
                if (!window.duplicate) {
                    reset();
                }
            }, 500)
        }
    }, [data])

    useLocation();

    useEffect(() => {
        let teacherListener = document.querySelector("#selected-teacher")
        teacherListener.addEventListener("change", () => {
            setIsStudent(false);
            setIsTeacher(true);
        })
        let studentListener = document.querySelector("#selected-student")
        studentListener.addEventListener("change", () => {
            setIsTeacher(false);
            setIsStudent(true);
        })
        let editorListener = document.querySelector("#selected-editor")
        editorListener.addEventListener("change", () => {
            setIsTeacher(false);
            setIsStudent(false);
        })
        window.scrollTo(0, 0);
    });

    return (
        <div className="add-container">
            <form onSubmit={handleSubmit(setData)}>
                <div className="input-fields">
                    <div className="text-fields">
                        <div className="submit-div1">
                            <label className="add-label">Nume</label>
                            <input {...register("name", {required: true})} placeholder=" Nume"
                                   className="input-field-add"/>
                        </div>
                        <div className="submit-div2">
                            <label className="add-label">Parolă</label>
                            <input {...register("pass", {required: true})}
                                   placeholder=" Parolă"
                                   className="input-field-add"/>
                        </div>
                        <div className="hidden-submit-div" style={{display: isTeacher ? "inline-flex" : "none"}}>
                            <label className="add-label">Materie</label>
                            <input {...register("subject")}
                                   placeholder=" Materie Predată"
                                   className="input-field-add"/>
                        </div>
                        <div className="hidden-submit-div" style={{display: isStudent ? "inline-flex" : "none"}}>
                            <label className="add-label">Clasa</label>
                            <input {...register("schoolCl")}
                                   placeholder=" Clasa"
                                   className="input-field-add"/>
                        </div>
                    </div>
                    <div className="radio-submit">
                        <p className="access">Nivel de acces</p>
                        <div className="radio-button">
                            <input type="radio" id="selected-editor" value="2"
                                   name="acces" {...register("loginLevel", {required: true})}/>
                            <label>Editor</label>
                        </div>
                        <div className="radio-button">
                            <input type="radio" value="3" id="selected-teacher"
                                   name="acces" {...register("loginLevel", {required: true})}/>
                            <label>Profesor</label>
                        </div>
                        <div className="radio-button">
                            <input type="radio" id="selected-student" value="4"
                                   name="acces" {...register("loginLevel", {required: true})}/>
                            <label>Elev</label>
                        </div>
                        <input type="submit" value="Adăugare Utilizator" className="input-button"
                               id="add-user-button"/>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddUser;