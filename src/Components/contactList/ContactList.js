import React from "react";

const ContactList = ({ contacts, filterValue }) => {
  const newArr = [...contacts].filter((contact) =>
    contact.name.toUpperCase().includes(filterValue.toUpperCase())
  );
  //   console.log(newArr);

  return (
    <>
      {contacts.length !== 0 ? (
        <>
          {newArr.length !== 0 ? (
            <ul>
              {newArr.map((contact) => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
            </ul>
          ) : (
            <p>There is no such contact ;(</p>
          )}
        </>
      ) : (
        <p>Please enter your first contact ;)</p>
      )}
    </>
  );
};

export default ContactList;
