import { useState, useEffect } from "react";
import "./TopButton.css";

function TopButton() {
    const [top, setTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setTop(false);
            } else {
                setTop(true);
            }
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }


    return (

        <>
            {!top && <button className="btn btn-success rounded-4 top-button" title="Scroll to Top" onClick={scroll} >
                <i className="bi bi-arrow-up-circle-fill me-2"></i>

            </button>
            }
        </>
    )
};

export default TopButton;