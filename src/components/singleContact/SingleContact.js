import React from 'react';
import PropTypes from 'prop-types';
import './SingleContact.css';

const SingleContact = ({ contact, deleteContact }) => {
  const { name, id, number } = contact;
  return (
    <li className="contact">
      <h4>{name}</h4>
      <p>{number}</p>
      <button
        className="deleteButton"
        type="button"
        id={id}
        onClick={deleteContact}
      >
        &#10008;
      </button>
    </li>
  );
};
export default SingleContact;

SingleContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    namber: PropTypes.string,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
