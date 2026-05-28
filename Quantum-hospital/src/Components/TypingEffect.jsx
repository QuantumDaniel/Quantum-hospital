import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Welcome to:",
                "QUANTUM MEDICARE",
                "BOOK APPOINTMENTS ONLINE",
                "GET QUALITY HEALTHCARE",
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span
            ref={typedRef}
            className="text-cyan-400 font-bold"
        ></span>
    );
};

export default TypingEffect;