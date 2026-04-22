import "./DepartmentPage.css";


function DepartmentPage({ dept, closeDepartment, openModal }) {
  return (

    <div className="container">
      <div className="hero">
        <img
          src={dept.image}
          alt={dept.name}
          className="hero-img"
        />
        <div className="hero-overlay" />

        <div className="hero-top">
          <button className="back-btn" onClick={closeDepartment}>← Back</button>
        </div>

        <div className="hero-content">
          <div className="hero-icon">{dept.icon}</div>
          <div className="hero-tag">{dept.tagline}</div>
          <h1 className="hero-title">{dept.name}</h1>
        </div>
      </div>

      <div className="main">
        <div className="stats">
          {dept.stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid">
          <div>
            <h2 className="section-title">About This Department</h2>
            <p className="description">{dept.description}</p>

            <div className="services">
              <h3 className="services-title">Our Services</h3>
              <div className="services-list">
                {dept.services.map((s) => (
                  <div key={s} className="service-item">
                    <span className="service-icon">✦</span>
                    <span className="service-text">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="image-box">
              <img src={dept.image} alt={dept.name} />
            </div>

            <div className="actions">
              <button className="book-btn" onClick={openModal}>
                <span>📅 Book Appointment</span>
                <span>→</span>
              </button>

              <div className="hours">
                <div className="hours-title">Operating Hours</div>
                <div>Mon – Sat: <span className="time">7:00 AM – 8:00 PM</span></div>
                <div>Sunday: <span className="time">9:00 AM – 2:00 PM</span></div>
                <div className="emergency">🔴 Emergency: 24 / 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;