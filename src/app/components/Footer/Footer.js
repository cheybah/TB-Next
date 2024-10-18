import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegram, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faMapPin, faPhone , faEnvelope, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container-fluid">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                <FontAwesomeIcon icon={faMapPin} className="text-lime-500" size='2x' />
                                                                        <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                <FontAwesomeIcon icon={faPhone}  className="text-lime-500" size='2x' />
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                <FontAwesomeIcon icon={faEnvelope}  className="text-lime-500" size='2x'/>                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="https://tn.tunisiebooking.com/images/icons-menu-moteur/logo-TunisieBooking1.svg" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Découvrez les meilleurs séjours en Tunisie avec TunisieBooking. Votre escapade parfaite est à portée de clic.</p>
                                    </div>
                                    <div className="footer-social-icon flex space-x-4">
                                    <span>Suivez-nous</span>
                                    <a href="https://www.facebook.com/Tunisiebookingcom" aria-label="Facebook" className="group">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white transform transition-transform duration-300 group-hover:rotate-180">
                                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/tunisiebooking/" aria-label="Instagram" className="group">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-400 text-white transform transition-transform duration-300 group-hover:rotate-180">
                                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                                        </div>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC71hBISp8WOPP8rEAeHb-rg" aria-label="Youtube" className="group">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white transform transition-transform duration-300 group-hover:rotate-180">
                                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Liens Utiles</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Accueil</a></li>
                                        <li><a href="#">À propos</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Offres</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>S'abonner</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Ne manquez pas de vous abonner à nos nouveaux flux, merci de bien vouloir remplir le formulaire ci-dessous.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Adresse Email" />
                                            <button><FontAwesomeIcon icon={faTelegram} className='text-stone-50' size='2x'/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright © {new Date().getFullYear()}, All Right Reserved <a href="">TunisieBooking
                                </a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
