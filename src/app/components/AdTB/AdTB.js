import React from "react";
import {
Accordion,
AccordionHeader,
AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
mount: { scale: 1 },
unmount: { scale: 0.9 },
};

const AdTb = () => {
const [open, setOpen] = React.useState(0);

const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <><div>
            <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="px-3 text-gray-500">
                    Pourquoi Choisir Tunisie Booking ?
                </span>
                <hr className="flex-grow border-t border-gray-500" />
            </div>
            <div>
                <h1 className="text-center font-bold text-2xl antialiased  hidden1 mo">
                    Agence de voyage Tunisie Booking : le N° 1 D'Hôtel Tunisie
                </h1>
                <p style={{ marginLeft: '80px', marginRight: '80px' }}>
                    La Tunisie, avec ses plages de rêve, son mythique désert du Sahara, ses innombrables souks, ses sites archéologiques, ainsi que bien d’autres encore, a énormément à offrir aux vacanciers. De plus, grâce aux services de Tunisie Booking, organiser un voyage dans ce beau pays n’a jamais été aussi facile. On peut, en effet, y réserver ses séjours en toute sécurité et à un prix alléchant.
                </p>
            </div>
        </div><>
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 1} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(1)}>Pourquoi réserver vos vacances chez TunisieBooking ?</AccordionHeader>
                    <AccordionBody>
                    Avec la révolution internet, il est devenu très facile de faire la réservation de son voyage devant son écran d’ordinateur ou de son Smartphone. <br />                    Ainsi, on peut tout simplement voir les multiples offres en ligne sur la destination voulue et réserver un hôtel, ou Voyages à l'étranger ou quelques activités à faire une fois sur place.
                    </AccordionBody>
                </Accordion >
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 2} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    Pourquoi choisir une agence de voyage ? 
                    </AccordionHeader>
                    <AccordionBody>
                    Un des principaux avantages non négligeables de choisir une agence de voyage pour réserver ses vacances c’est le professionnalisme et l’expérience de celle-ci.
                    <br />  Les professionnels du tourisme sauront vous guider et vous informer sur le pays de destination. Ils vous trouveront aussi des réductions auprès des compagnies aériennes et des hôtels qui ont déjà fait leurs preuves.
                    <br />  Enfin, une agence de voyage peut vous mettre à l'abri des aléas et vous accompagner à votre arrivée si jamais vous rencontrez des problèmes .
                    </AccordionBody>
                </Accordion>
                <Accordion style={{marginLeft: '15px' , marginRight: '15px'}} open={open === 3} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Pourquoi choisir notre agence de voyage TunisieBooking ?  
                    </AccordionHeader>
                    <AccordionBody>
                    Notre agence Tunisie Booking est une agence de voyage en ligne. Donc, inutile de vous déplacer, vous pouvez réserver votre hôtel en Tunisie où que vous soyez, du moment que vous avez une connexion internet. 
                    <br /> Les agents Tunisiebooking expérimentés étaient déjà là de nombreuses années, et sont encore là pour conseiller et aider les vacanciers à organiser leur voyage.
                    <br /> Nous sélectionnons les meilleurs établissements hôteliers de la Tunisie pour vous offrir es meilleurs séjours dans ce pays de rêve.
                    <br /> Vous pouvez en choisir un, en seulement quelques clics, selon la disponibilité de chacun d’eux et vos exigences. 
                    <br /> Après, il ne vous reste plus qu’à remplir le questionnaire sur notre site, tout en choisissant le mode de paiement selon votre convenance. Pour faciliter le plus possible la vie des voyageurs, nous avons prévu plusieurs modes de paiement : par mandat postal, e-dinars, carte bancaire, versement bancaire, à domicile ou espèce à notre agence même.
                    <br />  Il est également possible de tout régler en une seule fois ou faire un paiement par tranches de deux : une lors de la réservation et une autre à l’arrivée à l’hôtel. 
                    </AccordionBody>
                </Accordion>
            </></>
    );
};


export default AdTb;