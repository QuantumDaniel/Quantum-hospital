import { useState } from "react";

function Services({ C }) {
    const [services, setServices] = useState([{
        icon: "🩺",
        title: "Outpatient Consultations",
        desc: "Expert specialist consultations without admission"
    },
    {
        icon: "🏨",
        title: "Inpatient Admissions",
        desc: "Comfortable wards with round-the-clock nursing care"
    },
    {
        icon: "🔬",
        title: "Diagnostic Laboratory",
        desc: "Comprehensive blood tests and pathology services"
    },
    {
        icon: "🩻",
        title: "Radiology & Imaging",
        desc: "X-Ray, MRI, CT Scan, and ultrasound services"

    },
    {
        icon: "💊",
        title: "Pharmacy",
        desc: "Full-range pharmacy with pharmaceutical counselling"

    },
    {
        icon: "🚑",
        title: "Emergency & Ambulance",
        desc: "24/7 emergency response and ambulance services"

    }]);




    return (

        <section style={{ padding: "90px 48px", background: C.white }} id='services'>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div style={{ display: "inline-block", background: C.tealPale, border: `1px solid ${C.teal}40`, color: C.teal, padding: "5px 18px", borderRadius: 20, fontSize: 12, marginBottom: 16, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>What We Offer</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: C.navy }}>Comprehensive Hospital Services</h2>
                    <p style={{ color: C.textMuted, maxWidth: 480, margin: "16px auto 0", lineHeight: 1.8 }}>Everything you need for your health and wellbeing, all under one roof.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                    {services.map(s => (
                        <div key={s.title} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 20, padding: 26, transition: "all 0.3s", cursor: "default" }}
                            onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${C.teal}50`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${C.shadow}`; e.currentTarget.style.background = C.white; }}
                            onMouseLeave={e => { e.currentTarget.style.border = `1px solid ${C.border}`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = C.bg; }}>
                            <div style={{ fontSize: 38, marginBottom: 14 }}>{s.icon}</div>
                            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, color: C.text }}>{s.title}</div>
                            <div style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6 }}>{s.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>



    )
};

export default Services;