'use client';

import Starfield from '@smcfizz/starfield.js';
import {useEffect, useRef} from "react";

export default function Starfield_r() {
    const executed = useRef(false);

    useEffect(() => {
        if (executed.current) return;
        executed.current = true;
        const sf = new Starfield({});
        console.log('sf', sf);
    }, []);

    return <></>;
}