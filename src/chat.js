import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DUMMY_DATA = [
    {
        senderId: 'John Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
        senderId: 'John Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    }
]

function Chat() {
    return (
        <Container className="page-container">
            <h1>VOCO</h1>
            <div className="chat-container">
                    <div className="messages-box">
                        {DUMMY_DATA.map((message, index) => {
                            return (
                                <div className="text-box" key={index}>
                                    <div className="message" >{message.text}</div>
                                    <div className="user-name" >{message.senderId}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="user-box">
                        <div className="user"><b>John Smith</b></div>
                        <div className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                    </div>
            </div>
            <Button className="btn-block">Send</Button>
        </Container>
    );
}

export default Chat;
