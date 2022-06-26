import "./styles.css";
import image from "../../../resources/placeholder.png";

const TeacherInfo = ({name, subject}) => {

    return (
        <>
            <figure className="figure">
                <img className="teacher-img" src={image}/>
                <div className="teacher-name">{name}</div>
                <div className="teacher-subject">{subject}</div>
            </figure>
        </>
    );
};

export default TeacherInfo;