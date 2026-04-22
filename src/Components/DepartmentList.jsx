import { useEffect, useRef, useState } from "react";

function DepartmentList({ C, departments, displayDepartment }) {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section style={{ padding: "90px 48px", background: C.bgSection }} id='departments'>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div ref={ref} style={{
                    textAlign: "center", marginBottom: 56, opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}>
                    <div style={{ display: "inline-block", background: C.tealPale, border: `1px solid ${C.teal}40`, color: C.teal, padding: "5px 18px", borderRadius: 20, fontSize: 12, marginBottom: 16, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>Our Departments</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: C.navy }}>Specialised Care for Every Need</h2>
                    <p style={{ color: C.textMuted, maxWidth: 480, margin: "16px auto 0", lineHeight: 1.8 }}>Click on any department to explore the full range of services we provide.</p>
                </div>
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24
                }}>
                    {departments.map((dept, i) => (
                        <div key={dept.id} style={{ background: C.white, borderRadius: 24, overflow: "hidden", border: `1px solid ${C.border}`, transition: "all 0.4s ease", cursor: "pointer", animation: `fadeUp 0.5s ease ${i * 0.06}s both` }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-7px)"; e.currentTarget.style.border = `1px solid ${dept.color}60`; e.currentTarget.style.boxShadow = `0 24px 48px ${C.shadowMd}`; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.border = `1px solid ${C.border}`; e.currentTarget.style.boxShadow = "none"; }}>
                            <div style={{ height: 148, background: dept.hero, position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: 20 }}>
                                <img src={dept.image} alt={dept.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} onError={e => { e.target.style.display = "none"; }} />
                                <div style={{ position: "absolute", top: 16, right: 16, fontSize: 38, animation: "float 4s ease infinite" }}>{dept.icon}</div>
                                <div style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.4)", color: C.white, padding: "3px 12px", borderRadius: 20, fontSize: 11, position: "relative", fontWeight: 500 }}>{dept.tagline}</div>
                            </div>
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{dept.name}</h3>
                                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7, marginBottom: 18 }}>{dept.description.substring(0, 100)}...</p>
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                                    {dept.services.slice(0, 3).map(s => <span key={s} style={{ fontSize: 11, background: dept.colorPale, color: dept.color, padding: "4px 10px", borderRadius: 20, border: `1px solid ${dept.color}30`, fontWeight: 500 }}>✓ {s}</span>)}
                                    {dept.services.length > 3 && <span style={{ fontSize: 11, color: C.textMuted, padding: "4px 8px" }}>+{dept.services.length - 3} more</span>}
                                </div>
                                <button onClick={() => { displayDepartment(i) }} style={{ width: "100%", background: `linear-gradient(135deg, ${dept.color}, ${dept.color}dd)`, border: "none", color: C.white, padding: "12px", borderRadius: 14, cursor: "pointer", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>View Department →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>



    )
};
export default DepartmentList;