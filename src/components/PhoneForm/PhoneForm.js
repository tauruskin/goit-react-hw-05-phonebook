import React from 'react';
import PropTypes from 'prop-types';
import style from '../PhoneForm/PhoneForm.module.css';

const PhoneForm = ({
  submitForm,
  name,
  contactName,
  number,
  contactNumber,
}) => {
  return (
    <>
      <h2 className={style['title']}>Phonebook</h2>
      <form className={style['form']} onSubmit={submitForm}>
        <span>Name</span>
        <br></br>
        <input
          className={style['input_name']}
          type="text"
          name="name"
          value={name}
          onChange={contactName}
        ></input>
        <br></br>
        <span>Number</span>
        <br></br>
        <input
          className={style['input_number']}
          type="text"
          name="number"
          value={number}
          onChange={contactNumber}
        ></input>
        <br></br>
        <button className={style['submit_btn']} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
export default PhoneForm;

PhoneForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  contactName: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  contactNumber: PropTypes.func.isRequired,
};
