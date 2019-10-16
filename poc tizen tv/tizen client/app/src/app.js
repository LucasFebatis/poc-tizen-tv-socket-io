import React from "react";
import "./app.css";
import socketIOClient from "socket.io-client";

var socket
var state_current

class App extends React.Component {

    endpoint = 'https://febatis-socket-io-chat-server.herokuapp.com/';
    socket = null;

    state = {
        messagesData: []
    };

    componentDidMount() {
        socket = socketIOClient(this.endpoint);
        socket.on("previousMessages", this.loadPreviousMessages.bind(this))
        socket.on("receivedMessege", this.loadReceivedMessege.bind(this))
    }

    render() {
      return (
        <div className="App">
            <h2>Olá FCamara</h2>
            {this.getMessagesData()}
        </div>
      );
    }

    getMessagesData() {
        return (
            <table>
                <tbody>
                {this.state.messagesData.map(message => {
                    return (
                        <tr key={message.message}>
                            <td>
                                <strong> {message.author}</strong>: {message.message}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        )
      }

    renderMessage(message) {
        console.log('mes', message)
        this.setState( prev => ({ messagesData: [...prev.messagesData, message] }));
    }

    loadPreviousMessages(messages) {
        for (let message of messages) {
            this.renderMessage(message);
        }
    }

    loadReceivedMessege(message) {
        this.renderMessage(message)
    }

  }
  export default App;