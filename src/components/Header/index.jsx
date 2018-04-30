import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const styles = {
  header: 'h-100 w-100 bg-white flex justify-between items-center pl3 pr3 bb br b--moon-gray',
  button: 'pointer f6 br2 ba bg-green white pa2 pl3 pr3 ml1 mv1 hover-bg-dark-green border-box'
};

const Header = ({ onSubmit }) => {
  return (
    <div className={ styles.header }>
      <div className='near-black'>
        <h2>A Modern SOAP Editor</h2>
      </div>
      <div>
        <button data-role='submit' className={ styles.button } onClick={ onSubmit }>
          Submit
        </button>
      </div>
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
