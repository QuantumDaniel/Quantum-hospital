import { useEffect, useState } from 'react';
import './Booking.css';
import './HospitalCard.css';
function Card({ closeModal2, display2, chooseDepartment, department }) {
    const [change, setChange] = useState(1);
    const card = [
        {
            cardName: 'Standard Card',
            Price: '2,500',
            option1: 'OPD Priority Access',
            option2: '10% Pharmacy Discount',
            option3: 'Free Annual Health Screening',
            option4: 'Patient Portal Access',
            option5: 'Patient Portal Access',
            id: 1,


        },
        {
            cardName: 'Premium Card',
            Price: '5,000',
            option1: 'All Standard Benefits',
            option2: '20% Pharmacy Discount',
            option3: 'Free Monthly Lab Tests',
            option4: 'Specialist Fast-Track',
            option5: 'Emergency Home Visit (1x/year)',
            id: 2,
        },
        {
            cardName: 'Family Card',
            Price: '12,000',
            option1: 'Covers up to 6 members',
            option2: '25% All-services Discount',
            option3: 'Free Pediatrics check-ups',
            option4: 'Dedicated Family Doctor',
            option5: 'Priority Emergency Access',
            id: 3,
        }
    ];




    const [modalc, setModalc] = useState('plans');
    const [data, setData] = useState(
        {
            fullName: '',
            date: '',
            email: '',
            number: ''
        }
    );


    function submitNotice() {

        setModalc('change')

    };

    function backNotice() {

        setModalc('plans')

    };


    function handleSubmit(e) {

        e.preventDefault();
        console.log(data);
        setModalc('submit')

        /*    axios.post('url', {
                data
            });
            */

    }

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    return (

        <div className={` booking-header bg-white text-center ${!display2 ? 'display' : ""}`}>

            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">

                    <div className="modal-headery bg-secondary position-fixed text-center ">
                        <button type="button" className="btn-close close-button btn-rounded " data-bs-dismiss="modal" aria-label="Close" title="close" onClick={closeModal2}></button>
                        <div className="d-flex align-items-left ">
                            <div>
                                <h5 className="modal-title" id="apptModalLabel">Hospital Card Registration</h5>
                                <div className="modal-subtitle text-white">Get priority access to all our services</div>
                            </div>
                        </div>

                    </div>
                    {modalc === 'plans' && (
                        <div className="modal-body2 top-4">
                            <div className="card-plan"> <h3>Choose Your Plan</h3> </div>
                            <div>
                                {card.map((cards) => {
                                    return (
                                        <div onClick={() => { setChange(cards.id) }} className={`plan-items mt-4 ${change === cards.id ? 'active' : ''} `} key={cards.id}>  <div>  <strong> {cards.cardName} </strong> <span className='fs-4'> ₦{cards.Price}</span></div>
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
                            <button type="button" className="btn-confirm" onClick={submitNotice}>
                                ✅ Continue →
                            </button>

                        </div>
                    )}
                    {modalc === 'change' && (
                        <div className="modal-body2 mt-6 ">

                            <h3> Personal Details</h3>
                            <div className=''>
                                <form onSubmit={handleSubmit}>
                                    <div><label htmlFor="first-name" className='name1'>
                                        Full name
                                    </label></div>
                                    <input onChange={handleChange} name='fullName' type="text" placeholder='e.g Abur Daniel' id="first-name" className='name-input' />
                                    <div><label htmlFor="number" className='name'>
                                        Phone Number
                                    </label></div>
                                    <input onChange={handleChange} name='number' type="number" placeholder='e.g 09042898107' id="number" className='name-input' />
                                    <div><label htmlFor="email" className='name'>
                                        Email address
                                    </label></div>
                                    <input onChange={handleChange} name='email' type="text" placeholder='e.g daniel@gmail.com' id="email" className='name-input' />
                                    <div><label htmlFor="date" className='name'>
                                        Date of Birth
                                    </label></div>
                                    <input onChange={handleChange} name='date' type="date" id="date" className='name-input' />
                                    <div>
                                        <button className="btn btn-secondary rounded-4 done-button mt-2 ms-2 mb-4 p-2" onClick={backNotice}>←Back</button>
                                        <button type='submit' className="btn btn-secondary rounded-4 done-button mt-2 ms-2 mb-4 p-2" >Submit Application</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    )}

                    {modalc === 'submit' && (
                        <div className="modal-body2 mt-6 ">
                            <h1 className='rose'>🎉</h1>
                            <p className='submit'><br />Application <br />Recieved!</p>
                            <button className="btn btn-secondary rounded-4 done-button mt-2 ms-2 mb-4 px-4" onClick={closeModal2}>Close</button>

                        </div>

                    )}

                </div>
            </div>



        </div>


    )
};

export default Card;

