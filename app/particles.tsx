'use client';

import React, { useEffect, useMemo } from 'react';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {Container} from "@tsparticles/engine";
import {loadSlim,} from "@tsparticles/slim";
import {loadEmittersPlugin} from "@tsparticles/plugin-emitters";

function Starfield() {
    const [init, setInit] = React.useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            await loadEmittersPlugin(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {
        // console.log(container);
    };

    const options = useMemo(
        () => ({
            emitters: {
                autoplay: true,
                rate: {
                    quantity: 10,
                    delay: 0.25
                },
                position: {
                    x: 50,
                    y: 50,
                },
                particles: {
                    move: {
                        speed: { min: 1, max: 8 }
                    },
                    opacity: {
                        value: {min: 0, max: 1},
                        animation: {
                            enable: true,
                            startValue: "min",
                            speed: 0.5,
                            sync: false,
                        },
                    },
                },
            },
            particles: {
                number: {
                    value: 0,
                },
                size: {
                    value: {min: 0.5, max: 1.75},
                },
                move: {
                    enable: true,
                    straight: true,
                    speed: 5,
                    decay: 0,
                    outModes: {
                        "default": "destroy",
                        "bottom": "destroy",
                        "left": "destroy",
                        "right": "destroy",
                        "top": "destroy"
                    },
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        parallax: {
                            enable: true,
                            force: 30,
                            smooth: 20
                        }
                    },
                },
                modes: {
                    attract: {
                        enabled: true,
                        distance: -200,
                        duration: 0.4,
                        speed: 1,
                    }
                },
            },
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                // @ts-ignore
                options={options}
            />
        );
    }

    return <></>;
}

export default Starfield;