import { useState } from 'react';
import './Booking.css';
import './HospitalCard.css';
function Card({ closeModal2, display2, chooseDepartment, department }) {



    const [modalc, setModalc] = useState(
        <div className="modal-body">

            <div className="header"></div>

        </div>
    );
    /*

    function submitNotice() {

        setModalc(

            <div className="modal-body2 mt-6 ">
                <div className="mark"></div>
                <h2>Appointment <br /> Booked!</h2>
                <p>Your appointment is confirmed. A reminder will be sent <span>24 hours before</span> you visit</p>
                <button className="btn btn-secondary rounded-4 done-button" onClick={() => (setModalc(modalc), closeModal())}>Done</button>
            </div>

        )

    };
    */

    return (

        <div className={` booking-header bg-white text-center ${!display2 ? 'display' : ""}`}>

            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">

                    <div className="modal-headery bg-secondary position-fixed text-center ">
                        <button type="button" className="btn-close close-button btn-rounded " data-bs-dismiss="modal" aria-label="Close" title="close" onClick={closeModal2}></button>
                        <div className="d-flex align-items-left ">
                            <div>
                                <h5 className="modal-title" id="apptModalLabel">Hospital Card Registration</h5>
                                <div className="modal-subtitle">Get priority access to all our services</div>
                            </div>
                        </div>

                    </div>
                    {modalc}

                </div>
            </div>


        </div>


    )
};

export default Card;

