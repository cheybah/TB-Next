import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegram, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
        <div>
        <footer className="footer-section" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container-fluid">
            <div className="footer-cta pt-5 pb-5">
            <div className="row px-5">
                
                <div className="col-xl-3 col-md-3 mb-30">
                    <div className="single-cta">
                        <img src="/phone2.png" className="cta-img" alt="img_phone" />
                        <div className="cta-text" style={{ color: 'white' }}>
                            <h4 style={{ color: 'white' }}>Besoin d'aide?</h4>
                            <span style={{ color: 'white' }}>71124124</span>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-xl-2 col-md-2 mb-30">
                    <div className="single-cta">
                        <img src="/prix_garanti.svg" className="cta-img" alt="img_prix_garanti" />
                        <div className="cta-text">
                            <h4 style={{ color: 'white' }}>Meilleur prix garanti</h4>
                        </div>
                    </div>
                </div>

                
                <div className="col-xl-3 col-md-3 mb-30">
                    <div className="single-cta">
                        <img src="/agence_tunisie.svg" className="cta-img" alt="img_agence_tunisie" />
                        <div className="cta-text">
                            <h4 style={{ color: 'white' }}>31 Agences en Tunisie</h4>
                        </div>
                    </div>
                </div>

                
                <div className="col-xl-2 col-md-2 mb-30">
                    <div className="single-cta">
                        <img src="/paiement_sec.svg" className="cta-img" alt="img_paiement_sec" />
                        <div className="cta-text">
                            <h4 style={{ color: 'white' }}>Paiement 100% sécurisé</h4>
                        </div>
                    </div>
                </div>

               
                <div className="col-xl-2 col-md-2 mb-30">
                    <div className="single-cta">
                        <img src="/client_satisfait.svg" className="cta-img" alt="img_client_satisfait" />
                        <div className="cta-text">
                            <h4 style={{ color: 'white' }}>+200000 clients satisfaits</h4>
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
                            <a href="index.html">
                                <img src="/logo-TunisieBooking1.svg" className="img-fluid" alt="Tunisiebooking Logo" />
                            </a>
                        </div>
                       
                        <div className="footer-social-icon flex space-x-4">
                            
                            <a href="https://www.facebook.com/Tunisiebookingcom" aria-label="Facebook" className="group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white transform transition-transform duration-300 group-hover:rotate-180">
                                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/tunisiebooking/" aria-label="Instagram" className="group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-400 text-white transform transition-transform duration-300 group-hover:rotate-180" style={{ backgroundColor: "blueviolet" }}>
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
            </div>
        </div>
    </div>
</footer>

        </div>
    
</>
    );
};

export default Footer;
