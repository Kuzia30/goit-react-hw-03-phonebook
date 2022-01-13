import { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = { name: "", number: "" };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
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
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
