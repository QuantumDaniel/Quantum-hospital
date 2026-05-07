
import './ChartSection.css';
import { useEffect, useState, useRef } from 'react';
function ChartSection({ C, chart, setChart }) {
    const [input, setInput] = useState('');
    const [position, setPosition] = useState(false);
    const [text, setText] = useState('Move input to top');
    const [machine, setMachine] = useState('Typing...');
    const greetings = ['hi', 'hello', 'hey'];
    const today = new Date();
    const [chats, setChats] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [inputdis, setIputDis] = useState('➤');
    const bottomRef = useRef(null);

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
        //  const value = e.target.value.toLowerCase();
        const isGreeting = greetings.some(word =>
            e.target.value.toLowerCase().includes(word)
        );

        if (e.target.value === '') {
            setIputDis('🍳');
            setDisabled(true)
        }
        else {
            setIputDis('➤');
            setDisabled(false);
        }

        if (isGreeting) {
            setMachine('You are welcome!');

        }
        else if (e.target.value.toLowerCase().includes('date')) {
            setMachine(`Today's Date: ${today.toDateString()}`);
        }
        else if (e.target.value.toLowerCase().includes('time')) {
            setMachine(`Current Time: ${today.toLocaleTimeString()}`);
        }
        else if (e.target.value.toLowerCase().includes('address')) {
            setMachine(`The hospital is located oppoiste Aveman's Hotel. Wuse, Abuja `)
        }

        else {
            setMachine(`Hello! 👋 I'm QuantumBot, your hospital assistant.How can I help you today ?`)
        }




        setInput(e.target.value);


    };


    function sendData() {


        setChats(prev => [
            ...prev,
            { text: input, id: 'user' }
        ]);
        setTimeout(() => {

            setChats(prev => [
                ...prev,
                { text: machine, id: 'bot' }
            ]);


        }, 0);
        setInput('');
        setDisabled(true);
        setIputDis('🍳');




        // setChats([...chats, { text: input, id: 'user' }]);

    };

    function keyPress(e) {
        if (e.key === 'Enter') {
            sendData();
        }

    };

    useEffect(() => {

        setDisabled(true);
        setIputDis('🍳');

    }, []);

    useEffect(() => {
        bottomRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }, [chats]);

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
                                <div key={chat.id} style={{ padding: "8px 16px 16px", display: "flex", gap: 8, background: C.white, borderRadius: "0 0 20px 20px" }} className={`bot-container  ${chat.id === 'user' ? 'human-container' : ''} `}>
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
                    <div className="chat-scroll" ref={bottomRef}></div>
                </div>



                <div style={{ padding: "8px 16px 16px", display: "flex", gap: 8, background: C.white, borderRadius: "0 0 20px 20px" }} className={`input-container ${position ? 'input-container2' : ''}`}>

                    <input onKeyDown={keyPress} value={input} onChange={targetChange} placeholder="Type your message..." style={{ flex: 1, background: C.bgAlt, border: `1px solid ${C.border}`, borderRadius: 25, padding: "10px 16px", color: C.text, fontSize: 13, outline: "none" }} type='text' />
                    <button disabled={disabled} onClick={sendData} style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`, border: "none", cursor: "pointer", fontSize: 18, flexShrink: 0, color: C.white }}>{inputdis}</button>
                </div>
                <div className="change-position" onClick={changePosition}>{text}</div>

            </div>




        </div >

    )
};

export default ChartSection;