import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from "react";

function Chat() {

    const DUMMY_DATA = [
        {
            userName: 'John Smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
        },
        {
            userName: 'John Smith',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
        }
    ]

    const [messages, newMessages] = useState(DUMMY_DATA);
    const [text, setText] = useState('');
    const userName = 'John Smith';

    function textChange(event) {
        setText(event.target.value);
    }

    function addNewMessage() {
        const newMessage = messages.concat({ userName, text });
        newMessages(newMessage);
    }

    return (
        <Container className="page-container">
            <h1>VOCO</h1>
            <div className="chat-container">
                    <div className="messages-box">
                        {messages.map((message, index) => {
                            return (
                                <div className="text-box" id="text-box" key={index}>
                                    <div className="message" >{message.text}</div>
                                    <div className="user-name" >{message.userName}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="user-box">
                        <div className="user" id="user">John Smith</div>
                        <div className="user-message"><textarea id="message" onChange={textChange}></textarea></div>
                    </div>
            </div>
            <Button className="btn-block" onClick={addNewMessage}>Send</Button>
        </Container>
    );
}

export default Chat;
