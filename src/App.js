import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState((prevstate) => ({
      contacts: [
        { name: this.state.name, id: nanoid(5) },
        ...prevstate.contacts,
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
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
          />{" "}
          <button type="submit"> Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map((contact) => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
