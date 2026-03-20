import { useState } from 'react';
import './Booking.css';
function Booking({ closeModal, display, chooseDepartment, department }) {



    const [modal, setModal] = useState(
        <div className="modal-body">
            <div className="step-badge">
                <span className="step-dot"></span>
                Fill in your details below and we'll confirm within 1 hour
            </div>

            <div className="form-section-label">Patient Information</div>

            <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <label className="appt-label">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="appt-input" placeholder="e.g. Amaka Okafor" required />
                </div>
                <div className="col-md-6">
                    <label className="appt-label">Phone Number <span className="text-danger">*</span></label>
                    <input type="tel" className="appt-input" placeholder="08012345678" required />
                </div>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <label className="appt-label">Email Address</label>
                    <input type="email" className="appt-input" placeholder="you@email.com" />
                </div>
                <div className="col-md-6">
                    <label className="appt-label">Date of Birth</label>
                    <input type="date" className="appt-input" />
                </div>
            </div>

            <div className="form-section-label">Select Department</div>

            <div className="dept-chips mb-4" id="deptChips">
                <button type="button" className={`dept-chip ${department === "radiology" ? "choose" : ""}`} onClick={() => chooseDepartment("radiology")}>🩻 Radiology</button>
                <button type="button" className={`dept-chip ${department === "surgical" ? "choose" : ""}`} onClick={() => chooseDepartment("surgical")}>🏥 Surgical</button>
                <button type="button" className="dept-chip">⚕️ Theatre</button>
                <button type="button" className="dept-chip">🩺 OPD</button>
                <button type="button" className="dept-chip">💊 Pharmacy</button>
                <button type="button" className="dept-chip">👶 Pediatrics</button>
                <button type="button" className="dept-chip">🤰 Maternity</button>
                <button type="button" className="dept-chip">🫀 Antenatal</button>
                <button type="button" className="dept-chip">🏨 Adult Medical</button>
                <button type="button" className="dept-chip">🏛️ Administrative</button>
            </div>

            <div className="form-section-label">Preferred Date &amp; Time</div>

            <div className="row g-3 mb-3">
                <div className="col-md-5">
                    <label className="appt-label">Date <span className="text-danger">*</span></label>
                    <input type="date" className="appt-input" required />
                </div>
                <div className="col-md-7">
                    <label className="appt-label">Available Time Slots</label>
                    <div className="time-grid" id="timeSlots">
                        <button type="button" className="time-slot">8:00 AM</button>
                        <button type="button" className="time-slot">9:00 AM</button>
                        <button type="button" className="time-slot unavailable">10:00 AM</button>
                        <button type="button" className="time-slot">11:00 AM</button>
                        <button type="button" className="time-slot">12:00 PM</button>
                        <button type="button" className="time-slot unavailable">2:00 PM</button>
                        <button type="button" className="time-slot">3:00 PM</button>
                        <button type="button" className="time-slot">4:00 PM</button>
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-2">
                <div className="form-section-label">Reason for Visit</div>
                <label className="appt-label">Brief Description</label>
                <textarea
                    className="appt-textarea"
                    rows="3"
                    placeholder="Describe your symptoms or reason for visiting (e.g. follow-up on chest X-ray, general check-up, lower back pain)..."
                ></textarea>
            </div>

            <button type="button" className="btn-confirm" onClick={submitNotice}>
                ✅ Confirm Appointment →
            </button>
            <div className="modal-footer-note">
                <div className="note-icon">🔒</div>
                <span>
                    Your details are safe with us. You will receive an SMS confirmation within 1 hour.
                    For urgent care call <strong>0800-MEDICARE</strong>.
                </span>
            </div>

        </div>
    );

    function submitNotice() {

        setModal(

            <div className="modal-body2 mt-6 ">
                <div className="mark"></div>
                <h2>Appointment <br /> Booked!</h2>
                <p>Your appointment is confirmed. A reminder will be sent <span>24 hours before</span> you visit</p>
                <button className="btn btn-secondary rounded-4 done-button" onClick={() => (setModal(modal), closeModal())}>Done</button>
            </div>

        )

    };

    return (

        <div className={` booking-header bg-white text-center ${!display ? 'display' : ""}`}>

            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">

                    <div className="modal-headery bg-primary position-fixed text-center ">
                        <button type="button" className="btn-close close-button " data-bs-dismiss="modal" aria-label="Close" title="close" onClick={closeModal}></button>
                        <div className="d-flex align-items-center gap-3 ">
                            <div className="modal-header-icon">📅</div>
                            <div>
                                <h5 className="modal-title" id="apptModalLabel">Book an Appointment</h5>
                                <div className="modal-subtitle">Schedule your visit in minutes</div>
                            </div>
                        </div>

                    </div>
                    {modal}

                </div>
            </div>


        </div>


    )
};

export default Booking;

