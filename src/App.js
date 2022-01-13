import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import phoneBookContext from "./context/phoneBookContext";
import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";

import { MainTitle, SecondaryTitle, PhonebookWrap } from "./App.styled";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getSubmitForm = ({ name, number }) => {
    const normalazedFind = name.toLowerCase();

    const isName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === normalazedFind
    );
    if (isName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState((prevstate) => ({
      contacts: [{ name, number, id: nanoid(5) }, ...prevstate.contacts],
    }));
  };

  deleteName = (id) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <phoneBookContext.Provider
        value={{
          contacts: this.state.contacts,
          filter: this.state.filter,
          onDeleteName: this.deleteName,
        }}
      >
        <PhonebookWrap>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm submitForm={this.getSubmitForm} />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList />
        </PhonebookWrap>
      </phoneBookContext.Provider>
    );
  }
}

export default App;
