
import './Videos.css';
import React, { useRef, useState } from "react";

const HospitalVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    const handleVideoEnd = () => setIsPlaying(false);

    return (
        <section className="quantum-video-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8 text-center">
                        <span className="badge text-uppercase mb-2" style={{ backgroundColor: "#0d6efd", letterSpacing: "2px", fontSize: "0.7rem" }}>
                            Welcome
                        </span>
                        <h2 className="fw-bold mb-2" style={{ color: "#0a2a6e" }}>
                            About Quantum Hospital
                        </h2>
                        <p className="text-muted">
                            Discover world-class healthcare services delivered with compassion and precision.
                        </p>
                    </div>
                </div>

                {/* Video Card */}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        <div className="video-card position-relative rounded-4 overflow-hidden shadow-lg">

                            {/* The Video Tag */}
                            <video
                                ref={videoRef}
                                className="w-100 d-block"
                                onEnded={handleVideoEnd}
                                style={{ maxHeight: "520px", objectFit: "cover", display: "block" }}
                                poster="/images/hospital-poster.jpg" /* Replace with your poster image */
                            >
                                <source src="/videos/quantum-hospital.mp4" type="video/mp4" /> {/* Replace with your video */}
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay — shown when paused */}
                            {!isPlaying && (
                                <div
                                    className="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                                    style={{ background: "linear-gradient(160deg, rgba(10,42,110,0.72) 0%, rgba(13,110,253,0.55) 100%)" }}
                                >
                                    {/* Hospital Name on Overlay */}
                                    <div className="text-center text-white mb-4 px-3">
                                        <h3 className="fw-bold mb-1 mt-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)", fontSize: "clamp(1.2rem, 4vw, 2rem)" }}>
                                            Quantum General Hospital
                                        </h3>
                                        <p className="mb-0 opacity-75" style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                                            Compassionate Care · Advanced Technology
                                        </p>
                                    </div>

                                    {/* Play Button */}
                                    <button
                                        onClick={togglePlay}
                                        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center play-btn"
                                        aria-label="Play video"
                                        style={{
                                            width: "72px",
                                            height: "72px",
                                            boxShadow: "0 8px 32px rgba(13,110,253,0.45)",
                                            border: "3px solid rgba(255,255,255,0.8)",
                                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.12)";
                                            e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,110,253,0.6)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(13,110,253,0.45)";
                                        }}
                                    >
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0a2a6e">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>

                                    <p className="text-white mt-3 opacity-75" style={{ fontSize: "0.82rem" }}>
                                        Watch our story
                                    </p>
                                </div>
                            )}

                            {/* Bottom Controls Bar — shown when playing */}
                            {isPlaying && (
                                <div
                                    className="controls-bar position-absolute bottom-0 start-0 w-100 d-flex align-items-center gap-2 px-3 py-2"
                                    style={{ background: "linear-gradient(to top, rgba(10,42,110,0.85), transparent)" }}
                                >
                                    <button
                                        onClick={togglePlay}
                                        className="btn btn-sm text-white p-1"
                                        aria-label="Pause"
                                        style={{ background: "transparent", border: "none" }}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={toggleMute}
                                        className="btn btn-sm text-white p-1"
                                        aria-label={isMuted ? "Unmute" : "Mute"}
                                        style={{ background: "transparent", border: "none" }}
                                    >
                                        {isMuted ? (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                            </svg>
                                        ) : (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                            </svg>
                                        )}
                                    </button>

                                    <span className="text-white ms-auto" style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                                        Quantum General Hospital
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Feature Pills below the video */}
                        <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                            {["Emergency Care", "Diagnostics & Imaging", "Surgery", "Maternity", "Pharmacy", "Outpatient"].map((service) => (
                                <span
                                    key={service}
                                    className="badge rounded-pill px-3 py-2"
                                    style={{ backgroundColor: "#e8f0fe", color: "#0a2a6e", fontSize: "0.78rem", fontWeight: 500 }}
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalVideo;