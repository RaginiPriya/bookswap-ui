import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import { Navbar } from 'reactstrap';

class Books extends Component {

    state = {
        message: ""
    }

    stompClient = null;

    // write a function to call nearby books api
    
    componentDidMount(){
        this.connect();
    }

    connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS("http://localhost:8080/ws");
        this.stompClient = Stomp.over(SockJS);
        this.stompClient.connect({}, this.onConnected, this.onError);
      };

       onConnected = () => {
        console.log("connected");
        this.stompClient.subscribe(
          "/user/" + this.props.user.username + "/queue/messages",
          this.onMessageReceived
        );
      };
    
       onError = (err) => {
        console.log(err);
      };

      onMessageReceived = (msg) => {
        const notification = JSON.parse(msg.body);
        console.log(notification)
        this.setState({message: notification.content})
      };

       sendMessage = () => {
           var recipientId = '';
           if(this.props.user.username === 'rags2095'){
            recipientId = 'sivani1913'
           }
           else{
               recipientId = 'rags2095'
           }
        // if (msg.trim() !== "") {
          const message = {
            senderId: this.props.user.username,
            recipientId: recipientId,
            senderName: this.props.user.username,
            recipientName: recipientId,
            content: 'Hi '+ recipientId + '! This is a message from ' + this.props.user.username,
            timestamp: new Date(),
          };
          this.stompClient.send("/app/chat", {}, JSON.stringify(message));
    
        // }
      };

    render() {
        return(
            <div>
                <Navbar />
                {this.state.message}
                <Button
                    onClick={this.sendMessage}
                >SEND</Button>
                {/* books page which will be sorted by nearest place and grouped by username, like [{username1: [book1, book2]}, {username2: [book2,book3,book4]}]. */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer
})

export default connect(mapStateToProps)(Books)