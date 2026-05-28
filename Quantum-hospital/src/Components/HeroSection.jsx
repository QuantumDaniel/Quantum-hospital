
import { useState, useEffect } from 'react';
import TypingEffect from "./TypingEffect";
import './HeroSection.css';
//import images from '../assets/image2.jpg'
function HeroSection({ openModal, openModal2 }) {
    const [patients, setPatients] = useState(0);
    const [experts, setExperts] = useState(0);
    // const [image, setImages] = useState(images);



    useEffect(() => {
        if (patients >= 10000) return;

        const interval = setInterval(() => {
            setPatients(prev => prev + 100);

        }, 10)

        return () => clearInterval(interval);

    }, [patients]);



    useEffect(() => {
        if (experts >= 120) return;

        const interval = setInterval(() => {
            setExperts(prev => prev + 1);

        }, 10)

        return () => clearInterval(interval);

    }, [experts]);


    return (


        <section className="hero container-fluid bg-red " id="home ">

            <div className="container">
                <div className="row align-items-center  sub ">



                    <div className="col-md-6 col-12 ">
                        <h1 className="welcome-message  hero-title py-4 anim-2 text-body leading-tight relative">


                            <span className="relative inline-block w-[300px] h-[60px] align-bottom">
                                <span className="absolute top-0 left-0">
                                    <TypingEffect />
                                </span>
                            </span>
                        </h1>

                        <div className="hero-badge anim-1 text-body border-secondary "> <span className="hero-badge-dot top-2 "></span> Now accepting new patients &nbsp;·&nbsp; Open 24/7 </div>

                        <div className="hero-btns anim-4 py-4">
                            <a href="#modal-appt" className="btn-hero-primary open-app" onClick={openModal}>📅 Book Appointment</a>
                            <a href="#modal-card" className="btn-hero-outline open-card text-body border-dark" onClick={openModal2}>💳 Get Hospital Card</a>
                        </div>
                        <div className="hero-stats anim-5 bg-light px-2  rounded-4 text-center py-2 mb-6 ">
                            <div className="animate bg-info ">
                                <div><div className="stat-val">{patients}+</div><div className="stat-label text-dark">Patients Served</div></div>
                                <div><div className="stat-val">{experts}+</div><div className="stat-label text-dark">Medical Experts</div></div>
                                <div><div className="stat-val">10</div><div className="stat-label text-dark">Departments</div></div>
                                <div><div className="stat-val">24/7</div><div className="stat-label text-dark">Emergency Care</div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section >
    )
}

export default HeroSection;