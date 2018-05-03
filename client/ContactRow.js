import React from 'react';

const ContactRow = (props) =>{
    const contacts = props.contacts;
    return (contacts.map(element => {
        return (
        <tr key={element.id}>
            <td>{element.name}</td>
            <td>{element.phone}</td>
            <td>{element.email}</td>
        </tr>
         )
   }))
}

export default ContactRow;