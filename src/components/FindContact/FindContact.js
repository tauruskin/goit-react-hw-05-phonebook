import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './FindContact.css';

const FindContact = ({ filtered, filterValue, deleteContact }) => {
  return (
    <>
      {filtered.length > 1 && (
        <div className="search-container">
          <span>Find contacts by name</span>
          <br></br>
          <input type="text" onChange={filterValue}></input>
        </div>
      )}
      <div className="search_info">
        <TransitionGroup component="ul" className="contact_list">
          {filtered.map(item => (
            <CSSTransition key={item.id} classNames="list__item" timeout={800}>
              <li className="contact_item" key={item.id}>
                {item.name} : {item.number}
                <button
                  className="delete_btn"
                  type="button"
                  id={item.id}
                  onClick={deleteContact}
                >
                  &#10008;
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default FindContact;

FindContact.propTypes = {
  filtered: PropTypes.array.isRequired,
  filterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
