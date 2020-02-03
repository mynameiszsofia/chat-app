import React from "react";
import './Contact.css';

class Contact extends React.Component {
    constructor (props){
        super(props);
            this.state = {
                status:false
            };
            this.event = this.event.bind(this);
        
    }
    event() {
        this.setState(prevState => ({ 
            status: !prevState.status
        }));
        }

render() {
    return (
        <div class="Contact">
            <img class="avatar" src={this.props.avatar} alt={this.props.character} /> 
            <div class="status">
                <div class="name">{this.props.name}</div>
                <div
                onClick={this.event}>{this.state.status ? 'online' : 'offline'}
                <div class="status-2">
                       
                
                <div class= {this.props.status === 'online' ? "status-online":"status-offline"} ></div>  
                <div class='status-text'>{this.props.status}</div>
                
                 
            </div></div></div>
        </div>
    );
}
}
export default Contact;