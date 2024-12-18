"use client";
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
  // State to track which accordion is open
  const [open, setOpen] = React.useState(0);

  // Function to handle opening and closing accordion sections
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="hidden sm:block">
        <p className=" items-center" style={{ marginLeft: '80px', marginRight: '80px' }}>
          * : Les prix affichés ci-dessus étant les tarifs les moins chers de la saison. Veuillez noter svp que les prix varient selon les dates d’arrivée.
        </p>
        {/* Header section */}
        <div className="flex items-center">
          <hr className="flex-grow border-t border-gray-500" />
          <span className="px-3 text-gray-500">Pourquoi Choisir Tunisie Booking ?</span>
          <hr className="flex-grow border-t border-gray-500" />
        </div>

        {/* Title and Description */}
        <div>
          <h1 className="text-center font-bold text-2xl antialiased hidden1 mo">
            Agence de voyage Tunisie Booking : le N° 1 D&apos;Hôtel Tunisie
          </h1>
          <p style={{ marginLeft: '80px', marginRight: '80px' }}>
            La Tunisie, avec ses plages de rêve, son mythique désert du Sahara,
            ses innombrables souks, ses sites archéologiques, ainsi que bien
            d’autres encore, a énormément à offrir aux vacanciers. De plus, grâce
            aux services de Tunisie Booking, organiser un voyage dans ce beau pays
            n’a jamais été aussi facile. On peut, en effet, y réserver ses séjours en
            toute sécurité et à un prix alléchant.
          </p>
        </div>
      </div>
      <div className="hidden sm:block px-16">
        {/* Accordion Sections */}
        <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Pourquoi réserver vos vacances chez TunisieBooking ?
          </AccordionHeader>
          <AccordionBody style={{ textAlign: "left", "!important": "" }}>
            Avec la révolution internet, il est devenu très facile de faire la
            réservation de son voyage devant son écran d’ordinateur ou de son
            Smartphone. <br />
            Ainsi, on peut tout simplement voir les multiples offres en ligne sur la
            destination voulue et réserver un hôtel, ou Voyages à l&apos;étranger ou
            quelques activités à faire une fois sur place.  <br />
            On peut également passer par notre agence de voyage, Tunisie Booking. Cette dernière option signifie certes un prix moins cher.
            C’est la meilleure solution pour voyager tranquillement et à petit prix.
          </AccordionBody>
        </Accordion>

        <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Pourquoi choisir une agence de voyage ?
          </AccordionHeader>
          <AccordionBody style={{ textAlign: "left", "!important": "" }}>
            Un des principaux avantages non négligeables de choisir une agence de
            voyage pour réserver ses vacances c’est le professionnalisme et
            l’expérience de celle-ci. <br />
            Les professionnels du tourisme sauront vous guider et vous informer sur
            le pays de destination. Ils vous trouveront aussi des réductions auprès
            des compagnies aériennes et des hôtels qui ont déjà fait leurs preuves.
            <br /> Enfin, une agence de voyage peut vous mettre à l&apos;abri des
            aléas et vous accompagner à votre arrivée si jamais vous rencontrez des
            problèmes.
          </AccordionBody>
        </Accordion>

        <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 3} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Pourquoi choisir notre agence de voyage TunisieBooking ?
          </AccordionHeader>
          <AccordionBody style={{ textAlign: "left", "!important": "" }}>
            Notre agence Tunisie Booking est une agence de voyage en ligne. Donc,
            inutile de vous déplacer, vous pouvez réserver votre hôtel en Tunisie
            où que vous soyez, du moment que vous avez une connexion internet.
            <br />
            Les agents Tunisiebooking expérimentés étaient déjà là de nombreuses
            années, et sont encore là pour conseiller et aider les vacanciers à
            organiser leur voyage.
            <br />
            Nous sélectionnons les meilleurs établissements hôteliers de la Tunisie
            pour vous offrir es meilleurs séjours dans ce pays de rêve.
            <br />
            Vous pouvez en choisir un, en seulement quelques clics, selon la
            disponibilité de chacun d’eux et vos exigences.
            <br />
            Après, il ne vous reste plus qu’à remplir le questionnaire sur notre
            site, tout en choisissant le mode de paiement selon votre convenance.
            Pour faciliter le plus possible la vie des voyageurs, nous avons prévu
            plusieurs modes de paiement : par mandat postal, e-dinars, carte
            bancaire, versement bancaire, à domicile ou espèce à notre agence
            même.
            <br />
            Il est également possible de tout régler en une seule fois ou faire un
            paiement par tranches de deux : une lors de la réservation et une autre
            à l’arrivée à l’hôtel. <br />
            <br />
            Enfin, nous offrons toujours,
            à nos chers clients, des promotions sur les séjours en hôtel, non seulement en Tunisie, mais également dans le monde entier.
          </AccordionBody>
        </Accordion>


        <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === 4} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            Vos vacances de rêve soigneusement sélectionnées
          </AccordionHeader>
          <AccordionBody style={{ textAlign: "left", "!important": "" }}>
            <b> <a href="https://tn.tunisiebooking.com/sejour-tunisie.html" className="text-black">Un séjour </a></b> à prix réduit dans un hôtel 3,4 ou 5 étoiles, un hôtel all-inclusive à prix chétif, etc.
            Vous trouverez sur notre site Tunisiebooking.com toutes les formules possibles pour bénéficier d’un voyage inoubliable pas cher.
            <br />
            <br />
            <h3 className="leading-12 text-lg font-medium font-sans text-gray-900">• Nos voyages pas chers attractifs :</h3>
            Chez Tunisiebooking, le mot d’ordre c’est « la qualité à prix discount ». Nous testons pour vous les hôtels en Tunisie afin de ne vous proposer que les meilleurs d’entre eux.<br />
            Tunisiebooking.com met également à votre disposition les avis des voyageurs sur chaque établissement hôtelier si vous avez besoin de plus de garantie sur la qualité de celui-ci.<br />
            Par ailleurs, nous négocions les prix et nous publions chaque semaine des Ventes Flash sur une sélection d’hôtels. Ce qui vous épargnera le va-et-vient entre les multiples pages sur internet pour trouver le bon moyen de réduire le coût de votre voyage.<br />
            <br />
            <h3 className="leading-12 text-lg font-medium font-sans text-gray-900">• Nos meilleures offres d’hôtels Tunisiebooking : en Tunisie et à l’étranger </h3> <br />
            Besoin de savoir les offres promotionnelles sur les établissements hôteliers en dehors de la Tunisie ? 
            Notre agence de voyage Tunisie Booking n’œuvre pas seulement dans ce pays maghrébin, mais à travers le monde entier. 
            De plus, nous disposons des services clients en Tunisie et à l’étranger pour être le plus proche possible de la clientèle.<br />
            <br />
            <h3 className="leading-12 text-lg font-medium font-sans text-gray-900"> •	Notre comparateur de vol est et la garantie de billet d'avion pas chers</h3> <br />
            A part notre offre de réservation de séjours en ligne, nous avons également un comparateur de vol. Grâce à celui-ci, vous pouvez réserver votre siège d’avion au meilleur prix, qu’il s’agit d’un vol low cost ou d’un vol régulier, et peu importe la destination de votre choix.
            <br />
            <br />
          </AccordionBody>
        </Accordion>
      </div>

    </>
  );
};

export default AdTb;
