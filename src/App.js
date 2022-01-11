import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState((prevstate) => ({
      contacts: [
        { name: this.state.name, number: this.state.number, id: nanoid(5) },
        ...prevstate.contacts,
      ],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const normalazedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="contact_name">Name</label>
          <input
            onChange={this.handleChange}
            id="contact_name"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="contact_number">Number</label>
          <input
            onChange={this.handleChange}
            value={this.state.number}
            id="contact_number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit"> Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label htmlFor="contact_filter">Find contacts by name</label>
          <input
            onChange={this.handleChange}
            id="contact_filter"
            type="text"
            name="filter"
            value={this.state.filter}
          />
          <ul>
            {visibleContacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} : {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
