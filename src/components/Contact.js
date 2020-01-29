import React from "react";
import './Contact.css';


function Contact(props) {
    return (
        <div class="Contact">
            <img class="avatar" src={props.avatar} alt={props.character} /> 
            <div class="status">
                <div class="name">{props.name}</div>
                <div class="format">
                <div class="status-2">
                <div class= {props.status === 'online' ? "status-online":"status-offline"} ></div>  
                <div class='status-text'>{props.status}</div>
                 
            </div></div></div>
        </div>
    );
}

export default Contact;