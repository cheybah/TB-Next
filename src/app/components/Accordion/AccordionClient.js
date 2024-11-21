"use client";

import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

const AccordionClient = ({ title, content, index }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Accordion style={{ marginLeft: '15px', marginRight: '15px' }} open={open === index} animate={CUSTOM_ANIMATION}>
            <AccordionHeader onClick={() => handleOpen(index)} className="text-md font-regular text-gray-700 flex items-center relative">
                <span className="flex-grow">{title}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-300 ${open === index ? 'rotate-180' : 'rotate-0'}`}
                />
            </AccordionHeader>
            <AccordionBody className="pr-4">
                {content}
            </AccordionBody>
        </Accordion>
    );
};

export default AccordionClient;
