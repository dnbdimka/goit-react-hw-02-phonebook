import React from "react";

const ContactListItem = ({ contact, removeContactById }) => {
  const remove = () => {
    removeContactById(contact.id);
  };
  return (
    <li key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={remove}>DELETE</button>
    </li>
  );
};

export default ContactListItem;
