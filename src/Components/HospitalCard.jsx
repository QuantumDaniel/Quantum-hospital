import { useState } from 'react';
import './Booking.css';
import './HospitalCard.css';
function Card({ closeModal2, display2, chooseDepartment, department }) {
    const card = [
        {
            cardName: 'Standard Card',
            Price: '2,500',
            option1: 'OPD Priority Access',
            option2: '10% Pharmacy Discount',
            option3: 'Free Annual Health Screening',
            option4: 'Patient Portal Access',
            option5: 'Patient Portal Access'


        },
        {
            cardName: 'Premium Card',
            Price: '5,000',
            option1: 'All Standard Benefits',
            option2: '20% Pharmacy Discount',
            option3: 'Free Monthly Lab Tests',
            option4: 'Specialist Fast-Track',
            option5: 'Emergency Home Visit (1x/year)',
        },
        {
            cardName: 'Family Card',
            Price: '12,000',
            option1: 'Covers up to 6 members',
            option2: '25% All-services Discount',
            option3: 'Free Pediatrics check-ups',
            option4: 'Dedicated Family Doctor',
            option5: 'Priority Emergency Access',
        }
    ];



    const [modalc, setModalc] = useState(
        <div className="modal-body2 top-4">
            <div className="card-plan"> <h3>Choose Your Plan</h3> </div>
            <div>
                {card.map((cards, i) => {
                    return (
                        <div className="plan-items mt-4" key={i}> <div>  <strong> {cards.cardName} </strong> <span className='fs-4'> ₦{cards.Price}</span></div>
                            <div className="card-details">✔ {cards.option1}</div>
                            <div className="card-details">✔ {cards.option2}</div>
                            <div className="card-details">✔ {cards.option3}</div>
                            <div className="card-details">✔{cards.option4}</div>
                            <div className="card-details">✔{cards.option5}</div>


                        </div>
                    )

                })}


            </div>

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

