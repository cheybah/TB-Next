import React from "react";
import Image from "next/image";

export default function Mosaic() {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            {/* First Image (takes half of the space) */}
            <div className="col-span-2 lg:col-span-1 relative">
                <Image
                    src="/vol_djerba.jpg"
                    alt="Vols Djerba"
                    layout="fill" 

                    objectFit="cover"
                    className="rounded-md"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
                    <div>
                        <p className="text-lg">Vols</p>
                        <p className="font-bold text-xl text-uppercase underline">Djerba</p>
                    </div>
                </div>
            </div>

            {/* Additional Image Grid */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4">
                {/* Second Image */}
                <div className="w-full h-32 relative rounded-md">
                    <Image
                        src="/vol_tunis.jpg"
                        alt="Vols Tunis"
                        layout="fill" 

                        objectFit="cover"
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
                        <div>
                            <p className="text-lg">Vols</p>
                            <p className="font-bold text-xl text-uppercase underline">Tunis</p>
                        </div>
                    </div>
                </div>

                {/* Third Image */}
                <div className="w-full h-32 relative rounded-md">
                    <Image
                        src="/vol_tozeur.jpg"
                        alt="Vols Tozeur"
                        layout="fill" 

                        objectFit="cover"
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
                        <div>
                            <p className="text-lg">Vols</p>
                            <p className="font-bold text-xl text-uppercase underline">Tozeur</p>
                        </div>
                    </div>
                </div>

                {/* Fourth Image */}
                <div className="w-full h-32 relative rounded-md">
                    <Image
                        src="/vol_monastir.jpg"
                        alt="Vols Monastir"
                        layout="fill" 

                        objectFit="cover"
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
                        <div>
                            <p className="text-lg">Vols</p>
                            <p className="font-bold text-xl text-uppercase underline">Monastir</p>
                        </div>
                    </div>
                </div>

                {/* Fifth Image */}
                <div className="w-full h-32 relative rounded-md">
                    <Image
                        src="/vol_sfax.jpg"
                        alt="Vols Sfax"
                        layout="fill" 
                        objectFit="cover"
                        className="rounded-md"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
                        <div>
                            <p className="text-lg">Vols</p>
                            <p className="font-bold text-xl text-uppercase underline">Sfax</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
