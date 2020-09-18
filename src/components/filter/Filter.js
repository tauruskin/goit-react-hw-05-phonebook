import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ state, handleFilter }) => {
  const { filter } = state;
  return (
    <div className="filter_box">
      <label className="input_label">
        Find contacts by name
        <br></br>
        <input
          className="filter_form"
          type="text"
          name="filter"
          placeholder="Find contact"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        namber: PropTypes.string,
      }),
    ),
    filter: PropTypes.string,
  }).isRequired,
  handleFilter: PropTypes.func.isRequired,
};
