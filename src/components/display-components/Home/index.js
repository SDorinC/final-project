import "./styles.css";
import {useEffect} from "react";
import {useLocation} from "react-router";
import image1 from "../../../resources/homeImage1.jpg";
import image2 from "../../../resources/homeImage2.jpg";
import image3 from "../../../resources/homeImage3.jpg";
import image4 from "../../../resources/homeImage4.jpg";
import image5 from "../../../resources/homeImage5.jpg";
import image6 from "../../../resources/homeImage6.jpg";

const Home = () => {
    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="home-component">
            <div className="first-container">
                <img className="first-image" src={image1}/>
                <p className="first-text">Odată ce ai învățat să citești, vei fi liber pentru totdeauna<br/>-Frederick
                    Douglas</p>
            </div>
            <div className="second-container">
                <div className="second-text">
                    <p className="home-title">Despre noi</p>
                    <p className="home-text">&emsp;&emsp;Școala numărul 200 din Galați își propune să ofere copiilor o
                        atmosferă propice
                        dezvoltării personale,
                        încurajându-i să se auto-descopere prin antrenarea lor în cursuri interactive, precum și
                        participarea la o multitudine de
                        activități extrașcolare corespunzătoare aptitudinilor lor.<br/>&emsp;&emsp; Misiunea noastră
                        este resușita
                        copiilor
                        dumneavoastră și succesul
                        generațiilor anterioare de elevi reprezintă garanția unui mediu atent construit pentru ca
                        micuții să
                        se transforme în adolescenți
                        bine pregătiți pentru o viață și carieră pline de realizări.<br/>&emsp;&emsp; Ne mândrim cu
                        dotări moderne,
                        învățători și profesori ce aplică
                        metode inovative de învățare și vă punem la dispoziție numeroase facilități pentru o evoluție
                        armonioasă și completă a
                        copiilor dumneavoastră.<br/><br/>&emsp;&emsp;Elevii noștri beneficiază
                        de:<br/>&emsp;&emsp;&emsp;-calculatoare de ultimă generație
                        <br/>&emsp;&emsp;&emsp;-laboratoare de fizică și chimie<br/>&emsp;&emsp;&emsp;-cantină cu
                        prețuri accesibile<br/>&emsp;&emsp;&emsp;-două
                        terenuri de
                        fotbal<br/>
                        &emsp;&emsp;&emsp;-piscină acoperită<br/>&emsp;&emsp;&emsp;-cursuri de dans si
                        karate<br/>&emsp;&emsp;&emsp;-programe
                        after-school<br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Vă așteptăm cu
                        drag!</p>
                </div>
                <img className="second-image" src={image2}/>
            </div>
            <div className="third-container">
                <div className="images-container">
                    <div className="images-subcontainer">
                        <img className="group-image" src={image3}/>
                        <img className="group-image" src={image4}/>
                    </div>
                    <div className="images-subcontainer">
                        <img className="group-image" src={image5}/>
                        <img className="group-image" src={image6}/>
                    </div>
                </div>
                <div className="last-text-container">
                    <p className="last-title">Strategia școlii</p>
                    <p className="last-text">&emsp;&emsp;Creșterea calității procesului instructiv-educativ în vederea
                        dezvoltării
                        armonioase a personalității elevilor prin formarea și dezvoltarea competențelor acestora, în
                        spiritul educației inclusive și a valorilor democrației.<br/><br/>&emsp;&emsp;Asigurarea
                        condițiilor optime
                        de studiu și de siguranță necesare desfășurării unui învățământ de
                        calitate.<br/><br/>&emsp;&emsp;Reconsiderarea
                        managementului la nivelul școlii<br/> și al clasei în scopul eficientizării activităților și al
                        adecvării la nevoile exprimate de beneficiari.<br/><br/>&emsp;&emsp;Dezvoltarea dimensiunii
                        europene a
                        școlii prin derularea de proiecte și parteneriate locale, naționale și europene.</p>
                </div>
            </div>
            <div className="newsletter">
                <p>Abonează-te la newsletter</p>
                <p>Pentru a fi la curent cu noutățile din școală, cu activitățile părinților, elevilor și profesorilor
                    și cu cele mai recente evenimente la care copiii noștri participă activ.</p>
            </div>
        </div>
    );
};

export default Home;