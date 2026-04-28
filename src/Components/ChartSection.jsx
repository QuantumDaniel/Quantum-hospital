
import './ChartSection.css';
import { useEffect, useState } from 'react';
function ChartSection({ C, chart, setChart }) {
    const [input, setInput] = useState('');
    const [position, setPosition] = useState(false);
    const [text, setText] = useState('Move input to top');
    const [user, setUser] = useState([
        'Hello!', 'how are you doing?',
        'i would like t ask ou some questions'

    ]);

    const [chats, setCharts] = useState([{


        text: `Hello! 👋 I'm MediBot, your hospital assistant.How can I help you today ?
            `,
        id: 'bot'
    },

    {
        text: 'How can i get the card?',
        id: 'user'
    },

    {
        text: 'Feel free to ask me any question of our choice',
        id: 'bot'
    },
    {
        text: 'Are you a bot?',
        id: 'user'
    },



    ]);
    const [disabled, setDisabled] = useState(false);
    const [inputdis, setIputDis] = useState('➤');


    function closeButton() {
        setChart('false')

    };

    function changePosition() {
        if (position === true) {
            setPosition(false)
            setText('Move input to top');
        }
        else {
            setPosition(true)
            setText('Move input to bottom');
        };
    };

    function targetChange(e) {
        if (e.target.value === '') {
            setIputDis('🍳');
            setDisabled(true)
        }
        else {
            setIputDis('➤');
            setDisabled(false);
        }

        setInput(e.target.value);

    };

    useEffect(() => {

        setDisabled(true);
        setIputDis('🍳');

    }, []);




    function sendData() {
        setUser([...user, input]);
    };

    return (

        <div className=" modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div style={{ position: "fixed", bottom: 83, right: 24, width: 360, height: 390, background: C.white, borderRadius: 20, boxShadow: `0 25px 60px ${C.shadowLg}`, display: "flex", flexDirection: "column", zIndex: 1000, border: `1px solid ${C.border}`, animation: "fadeUp 0.3s ease" }}>
                <div style={{ background: `linear-gradient(135deg, ${C.tealDark}, ${C.teal})`, borderRadius: "20px 20px 0 0", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🤖</div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: 15, color: C.white }}>QuantumBot Assistant</div>
                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: 4 }}>
                                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span> Online · Always here to help
                            </div>
                        </div>
                    </div>
                    <button onClick={closeButton} title='close' style={{ background: "rgba(255,255,255,0.2)", border: "none", color: C.white, width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: 18 }}>×</button>
                </div>
                <div className="charts">
                    {
                        chats.map((chat) => {
                            return (
                                <div key={chat.id} style={{ padding: "8px 16px 16px", display: "flex", gap: 8, background: C.white, borderRadius: "0 0 20px 20px" }} className='bot-container'>
                                    {chat.text}

                                </div>

                            )

                        })
                    }


                    {/*user.map((users) => {

                        return (
                            <div style={{ padding: "8px 16px 16px", display: "flex", gap: 8, background: C.white, borderRadius: "0 0 20px 20px" }} className='human-container'>
                                {users}

                            </div>
                        )
                    })*/}
                </div>

                <div style={{ padding: "8px 16px 16px", display: "flex", gap: 8, background: C.white, borderRadius: "0 0 20px 20px" }} className={`input-container ${position ? 'input-container2' : ''}`}>

                    <input value={input} onChange={targetChange} placeholder="Type your message..." style={{ flex: 1, background: C.bgAlt, border: `1px solid ${C.border}`, borderRadius: 25, padding: "10px 16px", color: C.text, fontSize: 13, outline: "none" }} type='text' />
                    <button disabled={disabled} onClick={sendData} style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`, border: "none", cursor: "pointer", fontSize: 18, flexShrink: 0, color: C.white }}>{inputdis}</button>
                </div>
                <div className="change-position" onClick={changePosition}>{text}</div>

            </div>




        </div >

    )
};

export default ChartSection;