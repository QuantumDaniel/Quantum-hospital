
function Cta({ C, openModal, openModal2 }) {

    return (
        <section style={{ margin: "0 48px 80px", borderRadius: 32, overflow: "hidden", background: `linear-gradient(135deg, ${C.tealDark} 0%, ${C.navyLight} 50%, ${C.navy} 100%)`, padding: "64px 56px", position: "relative" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
            <div style={{ position: "absolute", bottom: -40, left: 40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
                <div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: C.white, marginBottom: 16 }}>Ready to Take Care of Your Health?</h2>
                    <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8, maxWidth: 480 }}>Book an appointment today, get your hospital card, or chat with our assistant for any questions.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
                    <button onClick={openModal} style={{ background: C.white, border: "none", color: C.navy, padding: "14px 32px", borderRadius: 30, cursor: "pointer", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>📅 Book Now</button>
                    <button onClick={openModal2} style={{ background: "transparent", border: `2px solid ${C.goldLight}`, color: C.goldLight, padding: "14px 32px", borderRadius: 30, cursor: "pointer", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>💳 Get Card</button>
                </div>
            </div>
        </section>

    )
};

export default Cta;