import "./styles.css";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {HiOutlineMail, HiOutlineNewspaper, HiOutlinePhone} from "react-icons/hi";
import {useForm} from "react-hook-form";
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";

const Contact = () => {
    const {register, handleSubmit, reset} = useForm();
    const [data, setData] = useState({});

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            reset();
        }
    }, [data])


    useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <h1>CONTACT</h1>
            <div className="contact-info">
                <div className="individual-contact-info">
                    <HiOutlineMail className="contact-img"/>
                    <div className="contact-text-all">
                        <h4>Aveți întrebări?</h4>
                        <p className="contact-text">Ne puteți trimite un e-mail la adresa de mai jos.</p>
                        <a href="mailto:scoala200gl@invatamant.ro"
                           className="contact-href">scoala200gl@invatamant.ro</a>
                    </div>
                </div>
                <div className="individual-contact-info">
                    <HiOutlinePhone className="contact-img"/>
                    <div className="contact-text-all">
                        <h4>Ne puteți suna</h4>
                        <p className="contact-text">Ne puteți suna la numerele de mai jos</p>
                        <a href="tel:07123456789" className="contact-href">07123456789</a>
                        <a href="tel:07123456780" className="contact-href">07123456789</a>
                    </div>
                </div>
                <div className="individual-contact-info">
                    <HiOutlineNewspaper className="contact-img"/>
                    <div className="contact-text-all">
                        <h4>Fax</h4>
                        <p className="contact-text">Ne puteți trimite un fax la numărul de mai jos</p>
                        <a href="tel:0236123456789" className="contact-href">0236123456789</a>
                    </div>
                </div>
            </div>
            <div className="bottom-contact-info">
                <div className="additional-info">
                    <h2>Trimite-ne un mesaj</h2>
                    <p className="submit-message-par">Dacă aveți orice întrebare , vă rugăm
                        să nu ezitați să ne
                        trimiteți un mesaj. Vom răspunde în decursul a 24 h!</p>
                    <h3>Ne găsiți și pe social media</h3>
                    <div className="links-div">
                        <a className="contact-social" href="https://www.facebook.com"> <FaFacebook/></a>
                        <a className="contact-social" href="https://www.youtube.com"><FaYoutube/></a>
                        <a className="contact-social" href="https://www.linkedin.com"><FaLinkedin/></a>
                        <a className="contact-social" href="https://www.tiktok.com"><FaTiktok/></a>
                        <a className="contact-social" href="https://www.twitter.com"><FaTwitter/></a>
                        <a className="contact-social" href="https://www.instagram.com"><FaInstagram/></a>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit(setData)}>
                        <div className="contact-user-info">
                            <div className="contact-info-input">
                                <label className="contact-label">Nume:</label>
                                <input {...register("name", {required: true})} type="text"
                                       className="contact-info-text"/>
                            </div>
                            <div className="contact-info-input">
                                <label className="contact-label">E-mail:</label>
                                <input {...register("email", {required: true})} type="text"
                                       className="contact-info-text"/>
                            </div>
                            <div className="contact-info-input">
                                <label className="contact-label">Subiect:</label>
                                <input {...register("subject", {required: true})} type="text"
                                       className="contact-info-text"/>
                            </div>
                        </div>
                        <div className="text-area-container">
                            <label className="contact-label-text-area">Mesaj:</label>
                            <textarea className="contact-text-area"/>
                        </div>
                        <input type="submit" value="TRIMITE MESAJ" id="contact-button" className="input-button"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;