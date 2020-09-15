import React from 'react';
import PropTypes from 'prop-types';
import style from '../FindContact/FindContact.module.css';

const FindContact = ({ filtered, filterValue, deleteContact }) => {
  return (
    <div className={style['search_info']}>
      <h3>Contacts</h3>
      <span>Find contacts by name</span>
      <br></br>
      <input type="text" onChange={filterValue}></input>
      <ul className={style['contact_list']}>
        {filtered.map(item => (
          <li className={style['contact_item']} key={item.d}>
            {item.name} : {item.number}
            <button
              className={style['delete_btn']}
              type="button"
              id={item.id}
              onClick={deleteContact}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindContact;

FindContact.propTypes = {
  filtered: PropTypes.array.isRequired,
  filterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
