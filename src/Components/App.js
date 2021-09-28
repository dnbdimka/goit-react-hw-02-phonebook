import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmitForm = (e) => {
    e.preventDefault();
    // const newContact = {
    // name: this.state.name,
    // number: this.state.number,
    // id: uuidv4(),
    // };
    // this.state.contacts.push(newContact);
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, number: this.state.number, id: uuidv4() },
      ],
      ...INITIAL_STATE,
    }));
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            handelSubmitForm={this.handelSubmitForm}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            number={this.state.number}
          />

          <h2>Contacts</h2>
          {this.state.contacts.length !== 0 && (
            <Filter
              handleInputChange={this.handleInputChange}
              filter={this.state.filter}
            />
          )}

          <ContactList
            contacts={this.state.contacts}
            filterValue={this.state.filter}
          />
        </div>
      </>
    );
  }
}

export default App;
