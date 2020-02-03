import React from "react";
import Contact from "./Contact";
import './Contact.css';
import './Contact.js';
/// An array of objects
function List () {
const contacts = [
    {
        avatar:
          "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Rosemary Hart",
        status:
          true
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        name: "Nellie Miles",
        status:
          false
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/89.jpg",
        name: "Tyler Howard",
        status:
          true
      },
      {
        avatar:
          "https://randomuser.me/api/portraits/men/66.jpg",
        name: "Ronald Montgomery",
        status:
          false
      },
      {
        avatar:
          "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Kaylee Castillo",
        status:
          true
      }
    ]
    const Lista = contacts.map(item => <Contact avatar={item.avatar} name={item.name} status={item.status} />)
    return <div>{Lista}</div>


  }



  
  export default List;