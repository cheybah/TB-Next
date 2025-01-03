const CardComponent = ({
    title,
    imageUrl,
    rating,
    tripAdvisorNote,
    tripAdvisorLabel,
    onButtonClick,
    showBadge = false,
}) => {
    return (
        <div
            className="flex flex-col lg:flex-row p-3 bg-white rounded-md w-full mb-3"
            style={{
                fontFamily: "-apple-system, 'Roboto', Helvetica, Arial, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(38, 38, 38, 0.17)",
            }}
        >
            {/* Left Section */}
            <div className="relative h-full max-h-80 lg:w-1/3 w-full lg:mr-5 mb-3 lg:mb-0">
                {/* Badge */}
                {showBadge && (
                    <div
                        className="absolute bg-white/80 shadow-sm rounded-md text-center px-3 py-2 text-sm font-medium text-gray-800"
                        style={{
                            top: "5%",
                            left: "32%",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.24)",
                        }}
                    >
                        <div className="flex items-center">
                            <img
                                className="w-5 h-5 mr-2"
                                src="https://www.resabooking.com/marketing/Categorie_promo/images/636d1975ba6329.83889505.svg"
                                alt="Promo Icon"
                            />
                            <span>1er Enfant -6 ans Gratuit</span>
                        </div>
                    </div>
                )}
                <img
                    className="h-full w-full rounded-md object-cover cursor-pointer"
                    src={imageUrl}
                    alt="Hotel"
                />
            </div>

            {/* Middle Section */}
            <div className="flex-grow flex flex-col justify-between">
                <div className="grid gap-1 mt-2">
                    <span className="cursor-pointer font-bold text-xl lg:text-2xl text-gray-800 underline w-full">
                        {title}
                    </span>

                    <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill={index < rating ? "currentColor" : "none"}
                                stroke={index < rating ? "none" : "#4B5563"}
                                viewBox="0 0 24 24"
                                className={`h-6 ${
                                    index < rating ? "text-gray-800" : "text-gray-400"
                                }`}
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-auto border-l mx-4"></div>

            {/* Right Section */}
            <div className="flex flex-col justify-between w-full lg:w-1/4 mt-4 lg:mt-0">
                {/* TripAdvisor Section */}
                <div className="flex items-center mb-4">
                    <img
                        className="w-10 h-10 mr-2"
                        src="https://tn.tunisiebooking.com/theme/images/icon_tripadvisor.svg"
                        alt="TripAdvisor Icon"
                    />
                    <span className="text-lg font-semibold">{tripAdvisorNote}</span>
                    <div className="text-lg font-semibold text-gray-900 ml-2">
                        {tripAdvisorLabel}
                    </div>
                </div>

                {/* Button Section */}
                <button
                    className="bg-gradient-to-r from-red-500 to-pink-600 w-full py-2 text-white text-md font-bold rounded-md hover:opacity-90 flex items-center justify-center"
                    onClick={onButtonClick}
                >
                    <img
                        className="w-5 h-5 mr-2"
                        src="https://tn.tunisiebooking.com/images/calendnew.svg"
                        alt="Calendar Icon"
                    />
                    Voir Dispo
                </button>
            </div>
        </div>
    );
};

export default CardComponent;
