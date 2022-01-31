import './App.css';

function Chat() {
    return (
        <div className="App">
            <div className="page-container">
                <h1>VOCO</h1>
                <div className="chat-box">
                    <div className="messages-box">
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="user-box">
                        <div className="user">
                            <p>Username</p>
                        </div>
                        <div className="user-message">
                            <p>Lore psum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Chat;
