import './HeroSection.css';
function HeroSection() {

    return (


        <section className="hero" id="home">
            <div className="hero-decor">
                <div className="hero-circle-1"></div>
                <div className="hero-circle-2"></div>
                <div className="hero-circle-3"></div>
                <div className="hero-cross"><div className="hero-cross-v"></div><div className="hero-cross-h"></div></div>
            </div>
            <div className="hero-content">
                <div className="hero-badge anim-1">
                    <span className="hero-badge-dot"></span>
                    Now accepting new patients &nbsp;·&nbsp; Open 24/7
                </div>
                <h1 className="hero-title anim-2">
                    Exceptional Care,<br />
                    <span className="teal">Exceptional</span> <span className="gold">Lives.</span>
                </h1>
                <p className="hero-desc anim-3">
                    World-className healthcare delivered with compassion. From routine check-ups to complex surgeries — your trusted partner in health, every step of the way.
                </p>
                <div className="hero-btns anim-4">
                    <a href="#modal-appt" className="btn-hero-primary">📅 Book Appointment</a>
                    <a href="#modal-card" className="btn-hero-outline">💳 Get Hospital Card</a>
                </div>
                <div className="hero-stats anim-5">
                    <div><div className="stat-val">10,000+</div><div className="stat-label">Patients Served</div></div>
                    <div><div className="stat-val">120+</div><div className="stat-label">Medical Experts</div></div>
                    <div><div className="stat-val">10</div><div className="stat-label">Departments</div></div>
                    <div><div className="stat-val">24/7</div><div className="stat-label">Emergency Care</div></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;