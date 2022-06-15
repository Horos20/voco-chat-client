import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useState, useEffect, useRef} from "react";
import io from "socket.io-client";

function Chat() {

    const [messages, newMessages] = useState([]);
    const [text, setText] = useState('');
    const [userName, setUserName] = useState('John Smith');
    const [currentSocket, setCurrentSocket] = useState(null)



    /*    Socketio connection    */
    useEffect(() => {
        const socket = io('http://localhost:8080');
        setCurrentSocket(socket)
        socket.on('receive-message', (message, user, date) => {
            newMessages((messages) => ([...messages, {text: message, userName: user, date: date}]))
        })
        return () => socket.close();
    }, []);



    /*    GET initial data on page load    */
    useEffect(() => {
        const getData = () => {
          return fetch('http://localhost:8080', {method: 'GET'}
        ).then (res => {
            return res.json()
        }).then (data => {
            newMessages(data)
        })
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    /*    POST new message    */
    function addNewMessage(e) {
        e.preventDefault();
        if (text === '') {
            return "Input empty"
        } else {
            fetch('http://localhost:8080', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: userName,
                    text: text
                })
            }).then(res => {
                return res.json()
            }).then(data => newMessages([...messages, data]), currentSocket.emit("sendMessage", text, userName))
        }
        setText('')
    }



    // Autoscroll
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);



    return (
        <div className="page-container">
            <div className="content-container">
                <h1>VOCO</h1>
                <div className="chat-container">
                        <div className="messages-box">
                            {messages.map((message, index) => {
                                return (
                                    <div className="text-box" id="text-box" key={index}>
                                        <div className="message" >{message.text}</div>
                                        <div className='user_date-wrapper'>
                                            <div className="user-name" >{message.userName}</div>
                                            <div className='date'>{message.date}</div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/*   Dummy_div for autoscroll   */}
                            <div ref={messagesEndRef}/>

                        </div>
                        <div className="user-box">
                            <textarea className="user" id="user" value={userName} maxLength='40'
                                onChange={(event) => {
                                    setUserName(event.target.value);
                                }}/>
                            <div className="user-message"><textarea id="message" onChange={(e) => setText(e.target.value)} value={text} maxLength='100' placeholder='Write here...'></textarea></div>
                        </div>
                </div>
                <Button id="button" onClick={addNewMessage}>Send</Button>
            </div>
        </div>
    );
}

export default Chat;
