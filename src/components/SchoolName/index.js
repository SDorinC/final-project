import "./styles.css";
import image from "../../resources/home-image.jpg";

const SchoolName = () => {
    return (
        <div className="school-name">
            <img src={image}/>
            <p>ȘCOALA NR 200 GALAȚI</p>
        </div>
    );
};

export default SchoolName;