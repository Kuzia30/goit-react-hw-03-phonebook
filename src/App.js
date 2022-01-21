import { Component } from "react";
import { nanoid } from "nanoid";
import phoneBookContext from "./context/phoneBookContext";
import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";

import {
  GlobalStyle,
  MainTitle,
  SecondaryTitle,
  PhonebookWrap,
} from "./App.styled";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount(prevProps, prevState) {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

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
        <GlobalStyle />
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
