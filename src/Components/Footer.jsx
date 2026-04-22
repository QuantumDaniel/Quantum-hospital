

function Footer({ C, departments }) {

    const actions = ["Book Appointment", "Buy Hospital Card", "Emergency Contacts", "Medical Records", "Health Insurance"]


    return (

        <footer style={{ background: C.navy, padding: "56px 48px 32px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏥</div>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: C.white }}>MediCare General Hospital</span>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: 13 }}>Delivering compassionate, world-class healthcare to our community. Your health is our mission.</p>
                        <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                            <div style={{ marginBottom: 6 }}>📍 1 Hospital Road, Adikpo, Benue State</div>
                            <div style={{ marginBottom: 6 }}>📞 0800-MEDICARE (0800-6334-2273)</div>
                            <div>✉️ aburorhambagadaniel@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: 16, color: C.goldLight, fontSize: 14 }}>Departments</div>
                        {departments.slice(0, 5).map(d => (
                            <div key={d.id} onClick={() => openDept(d)} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }}
                                onMouseEnter={e => { e.target.style.color = C.tealLight; }}
                                onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.45)"; }}>
                                {d.name}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: 16, color: C.goldLight, fontSize: 14 }}>Patient Services</div>
                        {actions.map(s => (
                            <div key={s} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>{s}</div>
                        ))}
                    </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2025 MediCare General Hospital & Research Centre. All rights reserved.</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Quality Healthcare · Compassionate Service</div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;