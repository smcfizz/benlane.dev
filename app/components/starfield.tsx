'use client';

import {useEffect, useRef} from "react";

export default function Starfield() {
    const executed = useRef(false);

    useEffect(() => {
        if (executed.current) return;
        executed.current = true;
        import('@smcfizz/starfield.js').then((module) => {
            const Starfield = module.default;
            const sf = new Starfield({});
        });
    }, []);

    return <></>;
}