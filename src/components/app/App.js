import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneForm from '../phoneForm/PhoneForm';
import FindContact from '../findContact/FindContact';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  contactName = e => {
    this.setState({
      name: e.target.value,
    });
  };
  contactNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  filterValue = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  submitForm = e => {
    e.preventDefault();
    const { name, number, contacts, value } = this.state;
    if (contacts.find(item => item.name === this.state.name)) {
      this.toggle(value);
      return;
    }

    const object = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, object],
      filter: '',
      name: '',
      number: '',
    }));
  };

  componentDidMount() {
    const writedContacts = localStorage.getItem('contacts');
    if (writedContacts) {
      this.setState({
        contacts: JSON.parse(writedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  toggle = status => {
    this.setState({ value: !status });
  };

  render() {
    const filtered = this.getFilteredContacts();
    const { name, number, value } = this.state;
    const test = () => {
      this.toggle(true);
    };
    const alertDelay = () => this.setState({ value: !value });

    return (
      <>
        <CSSTransition
          in={value}
          classNames="alert"
          timeout={2000}
          unmountOnExit
          onEntered={alertDelay}
        >
          <button
            className="alert"
            onClick={test}
          >{`${name} already exist`}</button>
        </CSSTransition>

        <PhoneForm
          submitForm={this.submitForm}
          name={name}
          contactName={this.contactName}
          number={number}
          contactNumber={this.contactNumber}
        />
        <FindContact
          filtered={filtered}
          filterValue={this.filterValue}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
