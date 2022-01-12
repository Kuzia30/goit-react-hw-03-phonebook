import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import phoneBookContext from "./context/phoneBookContext";
import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";

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

  getSubmitForm = (data) => {
    const isName = this.state.contacts.find(
      (contact) => contact.name === data.name
    );
    if (isName) {
      return alert(`${isName.name} is already in contacts.`);
    }

    this.setState((prevstate) => ({
      contacts: [
        { name: data.name, number: data.number, id: nanoid(5) },
        ...prevstate.contacts,
      ],
    }));
  };

  render() {
    return (
      <phoneBookContext.Provider
        value={{ contacts: this.state.contacts, filter: this.state.filter }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm submitForm={this.getSubmitForm} />
          <h2>Contacts</h2>
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList />
        </div>
      </phoneBookContext.Provider>
    );
  }
}

export default App;
