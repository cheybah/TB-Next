import React from "react";


const VolFooter = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between items-center md:flex-row flex-col">
                <div className="text-center pt-[1.1rem] mb-4 md:mb-0">
                    <img
                        src="/footer1.png"
                        alt="Footer 1"
                        className="w-23 h-20 mx-auto mb-2"
                    />
                    <div className="mt-2">
                        <p className="mt-2 text-lg font-semibold mb-1.5">Besoin d'aide?</p>
                        <div className="flex items-center text-sm text-gray-400 font-semibold space-x-2 pl-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            <p>71124124</p>
                        </div>
                    </div>

                </div>
                <div className="text-center mb-4 md:mb-0">
                    <img
                        src="/footer2.svg"
                        alt="Footer 2"
                        className="w-23 h-20 mx-auto mb-2"
                    />
                    <p className="mt-2 text-lg font-semibold mb-1.5">Meilleur prix garanti</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                    <img
                        src="/footer3.svg"
                        alt="Footer 3"
                        className="w-23 h-20 mx-auto mb-2"
                    />
                    <p className="mt-2 text-lg font-semibold mb-1.5">31 Agences en Tunisie</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                    <img
                        src="/footer4.svg"
                        alt="Footer 4"
                        className="w-23 h-20 mx-auto mb-2"
                    />
                    <p className="mt-2 text-lg font-semibold mb-1.5">Paiement 100% sécurisé</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                    <img
                        src="/footer5.svg"
                        alt="Footer 5"
                        className="w-23 h-20 mx-auto mb-2"
                    />
                    <p className="mt-2 text-lg font-semibold mb-1.5">
                        +200000 clients satisfaits
                    </p>
                </div>
            </div>
            <div class="w-10/12 mx-auto border-t border-white opacity-20 my-6"></div>
            <div className="footer-content pt-5 pb-5 px-4 sm:px-[8rem]">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div className="footer-social-icon flex space-x-4 justify-center sm:justify-start">
                                <a href="https://www.facebook.com/Tunisiebookingcom" aria-label="Facebook" class="group">
                                    <div class="w-12 h-12 flex items-center justify-center rounded-full text-white transform transition-transform duration-300 group-hover:rotate-180">
                                        <svg class="svg-icon_face" viewBox="0 0 1000 1000">
                                            <g>
                                                <g transform="translate(0.000000,437.000000) scale(0.100000,-0.100000)">
                                                    <path fill="white" d="M5374.2,4245.3c-872.1-112.4-1438.5-640.6-1629.6-1515c-36-168.6-47.2-323.7-56.2-914.8l-13.5-714.8l-474.3-4.5l-474.3-6.7l-6.7-858.6l-4.5-860.9h483.3h483.3v-2450v-2450h1022.7h1022.7v2450v2450h685.5h685.5l9,51.7c6.7,27,42.7,368.6,80.9,757.5c38.2,388.8,76.4,755.2,83.2,815.9l13.5,105.6h-780h-779.9l6.7,591.1c6.7,669.8,18,712.5,182.1,820.4l89.9,60.7l627.1,6.7l624.9,6.8v842.9V4270l-869.9-2.2C5904.7,4265.5,5450.7,4256.5,5374.2,4245.3z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" aria-label="Instagram" class="group">
                                    <div class="w-12 h-12 flex items-center justify-center rounded-full text-white transform transition-transform duration-300 group-hover:rotate-180">
                                        <svg class="svg-icon_instagram" viewBox="0 0 1000 1000">
                                            <g>
                                                <path d="M990,196.5c-27.8,40.6-61.4,75.2-100.7,103.8c0.4,5.8,0.6,14.5,0.6,26.1c0,53.9-7.9,107.7-23.6,161.4c-15.8,53.7-39.7,105.2-71.8,154.5c-32.1,49.3-70.4,93-114.7,130.9c-44.4,37.9-97.8,68.2-160.4,90.8S389.7,898,318.4,898c-112.3,0-215.2-30.1-308.4-90.2c14.5,1.7,30.7,2.5,48.5,2.5c93.3,0,176.4-28.6,249.4-85.8c-43.5-0.8-82.5-14.2-116.9-40.1c-34.4-25.9-58-59-70.9-99.2c13.7,2.1,26.3,3.1,37.9,3.1c17.8,0,35.4-2.3,52.9-6.8c-46.4-9.5-84.9-32.6-115.3-69.3C65,475.4,49.8,432.8,49.8,384.3v-2.5c28.2,15.8,58.5,24.3,90.8,25.5c-27.4-18.2-49.1-42.1-65.3-71.5C59.1,306.4,51,274.5,51,240.1c0-36.5,9.1-70.3,27.4-101.4c50.2,61.8,111.2,111.2,183.1,148.3c71.9,37.1,148.9,57.7,231,61.9c-3.3-15.8-5-31.1-5-46c0-55.5,19.6-102.9,58.8-142.1c39.2-39.2,86.5-58.8,142.1-58.8c58,0,107,21.1,146.8,63.4c45.2-8.7,87.7-24.9,127.5-48.5c-15.3,47.7-44.8,84.6-88.3,110.7C912.9,223.5,951.4,213.1,990,196.5L990,196.5z" fill="white"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default VolFooter;
