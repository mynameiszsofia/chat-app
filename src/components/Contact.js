import React from "react";
import './Contact.css';

class Contact extends React.Component {
    constructor (props){
        super(props);
            this.state = {
                online:props.online
            };

    }

render() {
    return (
        <div class="Contact">
            <img class="avatar" src={this.props.avatar} alt={this.props.character} /> 
            <div class="status">
                <div class="name">{this.props.name}</div>
                <div
                onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState({ online: newStatus });
                 }}>
                <div class="status-2">
                       
                
                <div class= {this.state.online ? 'status-online':"status-offline"} ></div>  
                <div class='status-text'>{this.state.online ? "online" : "offline"}</div>
                
                 
            </div></div></div>
        </div>
    );
}
}
export default Contact;