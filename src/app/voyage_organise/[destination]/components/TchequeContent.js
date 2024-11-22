import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";



export default function TchequeContent() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState("Descriptif");

  const handleOpen = () => setIsOpen(!isOpen);
  const handleImageDialogOpen = () => setIsImageDialogOpen(!isImageDialogOpen);



  return (
    <>
      <div className="mb-[3rem]">
        <h1>Découvrez la beauté de la République Tchèque</h1>
        <p>
          Découvrez la magie de Prague, le charme de Český Krumlov et l'histoire de Kutná Hora. Des châteaux médiévaux à la culture moderne, la République tchèque offre une expérience unique à chaque voyageur.
        </p>

        <div className="flex p-3 bg-white rounded-md w-full" style={{ fontFamily: "-apple-system, 'Roboto', Helvetica, Arial, sans-serif", boxShadow: "0px 4px 16px 0px rgba(38, 38, 38, 0.17)" }}>
          <div className="relative h-full max-h-80 w-1/3 mr-5">
            <img
              className="h-full w-full rounded-md object-cover cursor-pointer"
              src="https://image.resabooking.com/images/images_og/img_p_hotel_og_1295.jpg"
              alt="Your favorite destination"
              onClick={handleImageDialogOpen}

            />
            <span className="absolute top-2 left-3 p-2 rounded-xl bg-white text-pink-500 font-semibold text-lg" style={{ fontSize: "1rem" }}>
              Circuit
            </span>
          </div>

          <div className="w-3/4">
            <div className="grid gap-1">
              <span
                className="cursor-pointer font-bold text-xl"

              >
                Escapade au Cœur de l'Europe : Prague &amp; Bratislava &amp; Vienne
              </span>
              <span className="text-sm font-normal">
                8 Jours - Petit déjeuner
              </span>
            </div>

            <div id="hotel-container" className="mt-3">
              <div className="pb-2 flex items-center">
                <span className="text-gray-900 text-lg font-normal">Hotel Panorama</span>
                <img className="h-6 ml-4" src="https://tn.tunisiebooking.com/theme/images/star4.svg" alt="rating" />
              </div>
              <div className="pb-2 flex items-center">
                <span className="text-gray-900 text-lg font-normal">Hotel Fleming's Stadhalle</span>
                <img className="h-6 ml-4" src="https://tn.tunisiebooking.com/theme/images/star4.svg" alt="rating" />
              </div>
            </div>

            <div className="flex mt-16 items-center">
              <div
                className="w-3/5 flex items-center cursor-pointer"
                onClick={() => {
                  handleOpen();
                }}
              >
                <img className="w-6 mr-2" src="https://tn.tunisiebooking.com/voyage_organise/images/voirplus.svg" alt="description" />
                <span className="underline text-blue-500 font-medium">Voir Descriptif</span>
              </div>

              <div className="w-2/5 mt-2 flex items-center justify-center" >
                <div
                  className="flex rounded-l-md bg-gradient-to-r from-red-500 to-pink-500 text-white py-[0.7rem] px-4 cursor-pointer "
                  data-toggle="modal"
                  style={{ border: "2px solid #E91F62" }}
                  data-target="#myModal1295"
                  onClick={() => result_filtre('1295')}
                >
                  <div>
                    <span className="text-xs font-light">à partir de </span>
                    <span className="text-4xl font-bold">5590 </span>
                    <span className="text-sm">TND /pers</span>
                  </div>
                </div>
                <div
                  className="w-1/4 py-1 text-center text-pink-500 rounded-r-md"
                  style={{
                    border: "1px solid #E91F62",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="font-light text-sm">Payez en</span>
                  <span className="text-3xl font-bold">6X</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voir Descriptif Dialog */}

      <Dialog open={isOpen} size="xl" handler={handleOpen} className="backdrop">
        <DialogHeader className="text-[#F40091] font-semibold text-2xl">Escapade au Cœur de l’Europe</DialogHeader>
        <DialogBody className="overflow-y-auto max-h-[400px] text-gray-800 space-y-4">
          <p>
            <strong>Dates : 29-12-2024 au 05-01-2025</strong>
          </p>
          <p className="mb-4">
            Un voyage axé sur la découverte et le shopping à la fois...
          </p>

          <p className="text-[#85B919] font-semibold">Votre itinéraire :</p>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>Jour 1:</strong> Tunis - Vienne - Prague</li>
            <li><strong>Jour 2:</strong> Prague - City Tour</li>
            <li><strong>Jour 3:</strong> Prague - Château de Prague et Mala Strana - Dîner et Soirée Nouvel AN</li>
            <li><strong>Jour 4:</strong> Prague</li>
            <li><strong>Jour 5:</strong> Prague</li>
            <li><strong>Jour 6:</strong> Prague - Bratislava - Vienne</li>
            <li><strong>Jour 7:</strong> Vienne</li>
            <li><strong>Jour 8:</strong> Vienne - Tunis</li>
          </ul>

          <p className="text-[#85B919] font-semibold mt-6">Hébergement :</p>
          <p>
            Vous serez logés en <span className="font-medium">Logement Petit Déjeuner</span> :
            <br />
            - <strong>05 nuits</strong> à Prague : Panorama Hotel 4*
            <br />
            - <strong>02 nuits</strong> à Vienne : Fleming&apos;s Stadhalle 4*
          </p>

          <p className="text-[#85B919] font-semibold mt-6">Zoom sur votre programme :</p>

          <div className="space-y-4">
            <p className="text-[#F40091] font-semibold">JOUR 1 : 29-12-2024 / TUNIS – VIENNE - PRAGUE</p>
            <p>
              <strong>03h05 :</strong> Rassemblement à l’aéroport Tunis Carthage.
              <br />
              Enregistrement sur votre vol TU642. Embarquement à 07H05. Arrivée à l’aéroport de Vienne à 09H20.
              <br />
              Accueil, assistance et départ en direction de Prague. Installation et nuitée à l’hôtel.
            </p>

            <p className="text-[#F40091] font-semibold">JOUR 2 : 30-12-2024 / PRAGUE CITY TOUR</p>
            <p>
              Petit déjeuner à l’hôtel. Demi-journée de visite guidée de la Vieille Ville de Prague avec votre guide.
              <br />
              Après-midi libre pour la découverte personnelle et le shopping.
            </p>

            <p className="text-[#F40091] font-semibold">JOUR 3 : 31-12-2024 / PRAGUE - CHÂTEAU DE PRAGUE ET MALA STRANA - DÎNER & SOIRÉE NOUVEL AN</p>
            <p>
              Petit déjeuner à l’hôtel, départ en bus pour visiter l’extérieur du château de Prague.
              <br />
              <strong className="text-[#F40091]">Dîner du Nouvel An :</strong> Buffet, boissons, DJ et animation. Nuit à l’hôtel.
            </p>

            <p className="text-[#F40091] font-semibold">JOUR 4 & 5 : 01-02-2025 / PRAGUE</p>
            <p>Petit déjeuner à l’hôtel. Journées libres pour explorer ou faire du shopping.</p>

            <p className="text-[#85B919] font-semibold">En Extra :</p>
            <p>Excursion à Karlovy Vary et visite de la verrerie "Moser". Prix par personne : <strong>250 TND</strong></p>

            <p className="text-[#F40091] font-semibold">JOUR 6 : 03-01-2025 / PRAGUE - BRATISLAVA - VIENNE</p>
            <p>Départ en direction de Vienne avec une pause visite de 1h30 à Bratislava. Nuit à votre hôtel à Vienne.</p>

            <p className="text-[#F40091] font-semibold">JOUR 7 : 04-01-2025 / VIENNE</p>
            <p>Tour de ville de Vienne avec des arrêts aux points principaux. Après-midi libre. Nuitée à Vienne.</p>

            <p className="text-[#F40091] font-semibold">JOUR 8 : 05-01-2025 / VIENNE - TUNIS</p>
            <p>Petit déjeuner et départ vers l’aéroport pour le vol retour.</p>
          </div>

          <p className="text-[#85B919] font-semibold mt-6">Ce prix comprend :</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Transferts Aéroport / Hôtels / Aéroport</li>
            <li>05 nuits à Prague et 02 nuits à Vienne en LPD</li>
            <li>Visites selon le programme</li>
            <li>Dîner et soirée du Nouvel An</li>
            <li>Billet d’avion Tunis-Vienne-Tunis</li>
          </ul>

          <p className="text-[#85B919] font-semibold mt-4">Ce prix ne comprend pas :</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Frais de visa pour l’Autriche</li>
            <li>Assurance voyage</li>
            <li>Timbre de voyage et pourboires pour guides et chauffeur (3€/personne/jour)</li>
          </ul>

          <p className="text-[#85B919] font-semibold mt-4">En extra :</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Visite à l’opéra de Vienne : 90 TND</li>
            <li>Entrée au Schönbrunn Palace : 150 TND</li>
            <li>Croisière sur la Vltava à Prague : 110 TND</li>
            <li>Dîner croisière sur la Vltava : 265 TND</li>
            <li>Excursion d’une journée à Cesky Krumlov : 265 TND</li>
            <li>Excursion à Karlovy Vary : 250 TND</li>
          </ul>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpen}
            className="mr-1 text-[#a70000]"
          >
            <span>Fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Image Click Dialog */}
      <Dialog open={isImageDialogOpen} size="lg" handler={handleImageDialogOpen} className="backdrop">
      <DialogHeader className="text-[#F40091] font-semibold text-xl flex justify-center">
          <div className="flex space-x-4">
            <button
              className={`pb-2 ${activeTab === "Image" ? "border-b-2 border-[#F40091] text-[#F40091]" : "text-gray-600"}`}
              onClick={() => {
                setActiveTab("Image");
                handleImageDialogOpen();
              }}
            >
              Image
            </button>
            <button
              className={`pb-2 ${activeTab === "Descriptif" ? "border-b-2 border-[#F40091] text-[#F40091]" : "text-gray-600"}`}
              onClick={() => setActiveTab("Descriptif")}
            >
              Descriptif
            </button>
            <button
              className={`pb-2 ${activeTab === "DatePrix" ? "border-b-2 border-[#F40091] text-[#F40091]" : "text-gray-600"}`}
              onClick={() => setActiveTab("DatePrix")}
            >
              Date & Prix
            </button>
          </div>
        </DialogHeader>
        <DialogBody className="flex justify-center">
          <img
            src="https://image.resabooking.com/images/images_og/img_p_hotel_og_1295.jpg"
            alt="Your favorite destination"
            className="rounded-md object-cover"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleImageDialogOpen}
            className="mr-1 text-[#a70000]"
          >
            <span>Fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </>
  );
}
