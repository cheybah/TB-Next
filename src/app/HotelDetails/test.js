import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Test =() =>{

return(
<div className="max-w-6xl mx-auto px-4 py-8">
{/* Equipment Section */}
<h2 className="text-2xl font-bold mb-6">Équipements</h2>
<div className="space-y-8">

  {/* Section: Chambres */}
<div className="grid grid-cols-8 items-start gap-4">
{/* Icon and Vertical Separator */}
<div className="col-span-1 flex items-start space-x-2">
    <img src="/chambre.svg" className="h-8 w-8" alt="Icon" />
</div>
<div className="w-[1px] bg-gray-300 h-full"></div> {/* Vertical Separator */}

{/* Title and Items */}
<div className="text-left col-span-6">
    <div className="text-xl font-semibold mb-2">Chambres</div>
    <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
    <li className="flex items-center">
    <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
    Chauffage
    </li>
    <li className="flex items-center">
        <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
        Climatisation
    </li>
    <li className="flex items-center">
        <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
        Mini bar
    </li>
    <li className="flex items-center">
        <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
        Chambre Bloc Central
    </li>
    </ul>
</div>
</div>
<div className="w-full h-[2px] bg-gray-500 mt-2"></div> {/* this is the horizontal seperator */}



{/* Section: Internet */}
<div className="grid grid-cols-8 items-start gap-4">
{/* Icon and Vertical Separator */}
<div className="col-span-1 flex items-start space-x-2">
    <img src="/wifi.svg" className="h-8 w-8" alt="Icon" />
</div>
<div className="w-[1px] bg-gray-300 h-full"></div> {/* Vertical Separator */}

{/* Title and Items */}
<div className="text-left col-span-6">
    <div className="text-xl font-semibold mb-2">Internet</div>
    <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
    <li className="flex items-center">
    <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
    Wi-Fi gratuit
    </li>
    </ul>
</div>
</div>
<div className="w-full h-[2px] bg-gray-500 mt-2"></div> {/* this is the horizontal seperator */}



{/* Section: Restauration */}
<div className="grid grid-cols-8 items-start gap-4">
{/* Icon and Vertical Separator */}
<div className="col-span-1 flex items-start space-x-2">
    <img src="/restauration.svg" className="h-8 w-8" alt="Icon" />
</div>
<div className="w-[1px] bg-gray-300 h-full"></div> {/* Vertical Separator */}

{/* Title and Items */}
<div className="text-left col-span-6">
    <div className="text-xl font-semibold mb-2">Restauration</div>
    <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
    <li className="flex items-center">
    <FontAwesomeIcon icon={faCheck} className="text-black mr-2 w-4 h-4" />
    Restaurant (Buffet)
    </li>
    </ul>
</div>
</div>
<div className="w-full h-[2px] bg-gray-500 mt-2"></div> {/* this is the horizontal seperator */}
</div>
</div>

);
}

export default Test;