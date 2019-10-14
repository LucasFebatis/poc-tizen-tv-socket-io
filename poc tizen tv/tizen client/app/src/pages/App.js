import React, { Component } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

var socket
var state_current

class App extends Component {
    
    constructor() {    
        super();
        this.state = {
          endpoint: 'http://localhost:3000/',
          messages_data: []
        };

        socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {
        state_current = this;
        socket.on("previousMessages", this.loadPreviousMessages)
        socket.on("receivedMessege", this.loadReceivedMessege)
    }

    render() {
      return (
        <div className="App">
          {this.getMessagesData()}
        </div>
      );
    }

    getMessagesData() {
        return (
            <table>
                <tbody>
                {this.state.messages_data.map(message => {
                    return (
                        <tr key={message.message}>
                            <td>
                                <strong> {message.author} </strong>: {message.message}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        )
      }

    renderMessage(message) {
        state_current.state.messages_data.push(message)
        this.setState({ messages_data: state_current.state.messages_data });
    }

    loadPreviousMessages(messages) {
        for (let message of messages) {
            state_current.renderMessage(message)
        }
    }

    loadReceivedMessege(message) {
        state_current.renderMessage(message)
    }

  }
  export default App;