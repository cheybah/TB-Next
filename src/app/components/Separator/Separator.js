import React from 'react';
import './separator.css';

const Separator = () => {
return (
<section id="cta" className="cta">
    {/* Background video is placed here */}
    <video
    autoPlay
    loop
    muted
    playsInline
    className="cta-video"
    >
    <source src="/tunisiebooking.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
</section>
);
};

export default Separator;
