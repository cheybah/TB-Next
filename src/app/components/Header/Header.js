"use client" ;

import { useState } from 'react'
import {
Dialog,
DialogPanel,
Disclosure,
DisclosureButton,
DisclosurePanel,
Popover,
PopoverButton,
PopoverGroup,
PopoverPanel,
} from '@headlessui/react'
import {
Bars3Icon,
XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnkh, faMosque, faPersonHiking, faPlaceOfWorship, faSun, faPhone, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@headlessui/react'
import './Header.css'
import Cookies from 'js-cookie';

const products = [
{ name: 'Omra', description: 'Voyage spirituel pour accomplir le pèlerinage en toute sérénité', href: '#', icon: faMosque },
{ name: 'Circuit Sud', description: 'Découvrez les trésors du désert tunisien, entre dunes et oasis', href: '#', icon: faSun },
{ name: 'Circuit Nord', description: 'Explorez les sites historiques et côtiers du nord de la Tunisie', href: '#', icon: faPersonHiking },
{ name: 'Turquie', description: 'Plongez dans la richesse culturelle et historique de la Turquie', href: '#', icon: faPlaceOfWorship },
{ name: 'Egypte', description: 'Partez à la découverte des merveilles antiques de l`Égypte', href: '#', icon: faAnkh },
]
const callsToAction = [
{ name: 'Réservez', href: '#', icon: PlayCircleIcon },
{ name: 'Voir plus d`offres', href: '#', icon: PhoneIcon },
]

const topDestinations = [
    { name: "Hôtel Tunisie", region: "Tunisie" },
    { name: "Hôtel Hammamet", region: "Hammamet" },
    { name: "Hôtel Sfax", region: "Sfax" },
    { name: "Hôtel Monastir", region: "Monastir" },
    { name: "Hôtel Mahdia", region: "Mahdia" },
    { name: "Hôtel Djerba", region: "Djerba" },
    { name: "Hôtel Tunis", region: "Tunis" },
    { name: "Hôtel Tozeur", region: "Tozeur" },
    { name: "Hôtel Korbous", region: "Korbous" },
  ];
const autresHotels = [
{ name : "Hotel kelibia",region: "Kelibia"},
{ name : "Hotel Bizerte",region: "Bizerte"},
{ name : "Hotel Nabeul",region: "Nabeul" },
{ name : "Hotel El Jem",region: "El Jem" },
];

const offresSpeciales = [
{ name: "Early Booking", href: "#"},
{ name: "Hôtel avec Toboggan", href: "/hotel_avec_toboggan"},
{ name: "Spécial Couple", href: "#"},
{ name: "Spécial ÉTÉ", href: "#"},
// Add more items as needed
];


export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// Fonction pour définir le cookie avec js-cookie
const handleSetCookie = (region) => {
    Cookies.set('region', region, { expires: 7, path: '/' }); // Expires dans 7 jours
  };
return (
<header className="bg-white">
    <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
    <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
            alt="Tunisiebooking logo"
            src="/logo-TunisieBooking1.svg"
            className="h-8 w-auto"
        />
        </a>
    </div>
    <div className="flex lg:hidden">
        <button
        type="button"
        aria-label='Open main menu'
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
    </div>
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        
<Popover className="relative">
<PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
Hôtels Tunisie
<ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
</PopoverButton>

<PopoverPanel
transition
className="absolute -left-8 top-full z-10 mt-31 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
>
<div className="p-4 grid grid-cols-3 gap-4">
    {/* Column 1 */}
    <div className="col-span-1">
    <h3 className="text-base font-semibold text-gray-900">Top Destinations</h3>
    {topDestinations.map((item) => (
        <div
        key={item.name}
        className="relative flex items-start gap-x-4 rounded-lg pt-4 pl-4 pr-4 text-sm hover:bg-gray-50"
        >
        <div className="flex-auto">
            <a 
            key={item.region}
            href={`/hotels_${encodeURIComponent(item.region)}`}
            onClick={() => handleSetCookie(item.region)} // Utilisation de js-cookie
             className="block font-normal text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
        </div>
    ))}
    </div>

    {/* Column 2 */}
    <div className="col-span-1">
    <h3 className="text-base font-semibold text-gray-900">Autres Hôtels Tunisie</h3>
    {autresHotels.map((item) => (
        <div
        key={item.name}
         // Utilisation de js-cookie
        className="relative flex items-start gap-x-4 rounded-lg pt-4 pl-4 pr-4 text-sm hover:bg-gray-50"
        >
        <div className="flex-auto">
            <a 
            key={item.name}
            href={`/hotels_${encodeURIComponent(item.name.replace(/\s+/g, '_'))}`}
            onClick={() => handleSetCookie(item.name)} className="block font-normal text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
        </div>
    ))}
    </div>

    {/* Column 3 */}
    <div className="col-span-1">
    <h3 className="text-base font-semibold text-gray-900">Nos Offres Spéciales</h3>
    {offresSpeciales.map((item) => (
        <div
        key={item.name}
        className="relative flex items-start gap-x-4 rounded-lg pt-4 pl-4 pr-4 text-sm hover:bg-gray-50"
        >
        <div className="flex-auto">
            <a href={item.href} className="block font-normal text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
        </div>
    ))}
    </div>
</div>
</PopoverPanel>
</Popover>

        <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
        Voyages Organisés
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
        </PopoverButton>

        <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-31 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="p-4">
            {products.map((item) => (
                <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <FontAwesomeIcon icon={item.icon} aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                <FontAwesomeIcon icon={item.icon} aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                {item.name}
                </a>
            ))}
            </div>
        </PopoverPanel>
        </Popover>

       
    </PopoverGroup>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <button className="flex items-center justify-center gap-2 rounded bg-[#FFFFFF] py-3 px-6 text-xl text-black transition-all hover:bg-[#FFFFF] hover:gap-4 active:bg-[#6a940f]">
            <FontAwesomeIcon icon={faPhone} className="icon-hover" />
            71 124 124
            <FontAwesomeIcon icon={faCircleInfo} className="icon-hover1" />

        </button>
    </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
            alt="Tunisiebooking logo"
            src="/logo-TunisieBooking1.svg"
            className="h-8 w-auto"
            />
        </a>
        <button
            type="button"
            aria-label='Close main menu'
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        </div>
        <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
            <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Hôtels Tunisie
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                {[...topDestinations, ...callsToAction].map((item) => (
                    <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                    {item.name}
                    </DisclosureButton>
                ))}
                </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Voyages Organisés 
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                {[...products].map((item) => (
                    <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                    {item.name}
                    </DisclosureButton>
                ))}
                </DisclosurePanel>
            </Disclosure>
            <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
                Demande de Groupe
            </a>
            </div>
            <div className="py-6">
            <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
                Log in
            </a>
            </div>

        </div>
        </div>
    </DialogPanel>
    </Dialog>
</header>
)
}
