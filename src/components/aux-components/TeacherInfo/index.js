import "./styles.css";
import placeholder from "../../../resources/placeholder.png";

const TeacherInfo = ({name, subject, photo}) => {
    let placeholderPhoto;
    if (photo !== undefined) {
        placeholderPhoto = photo;
    } else {
        placeholderPhoto = placeholder;
    }

    return (
        <>
            <figure className="figure">
                <img className="teacher-img" src={placeholderPhoto}/>
                <div className="teacher-name">{name}</div>
                <div className="teacher-subject">{subject}</div>
            </figure>
        </>
    );
};

export default TeacherInfo;