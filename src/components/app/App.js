import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PhoneForm from '../phoneForm/PhoneForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
  };

  componentDidMount() {
    this.setState(state => ({
      animation: !state.animation,
    }));

    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleFilter = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  addContact = contactObj => {
    this.setState(prev => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  deleteContact = ({ target }) => {
    const { id } = target;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="title-slideIn"
          timeout={500}
          unmountOnExit
        >
          <h1 className="app_title">Phonebook</h1>
        </CSSTransition>

        <PhoneForm state={this.state} addContact={this.addContact} />

        {this.state.contacts.length === 0 && (
          <>
            <h2 className="contact_title">Contacts</h2>
            <p>Contacts list is empty. Please, create new cotnact!</p>
          </>
        )}

        <CSSTransition
          in={this.state.contacts.length > 1}
          classNames="filter_animation"
          timeout={250}
          unmountOnExit
        >
          <Filter state={this.state} handleFilter={this.handleFilter} />
        </CSSTransition>

        <ContactList
          filteredContacts={this.getFilteredContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
