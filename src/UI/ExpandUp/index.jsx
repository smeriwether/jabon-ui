import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: '#000000'
};

const ExpandUp = ({ fill }) => {
  return (
    <svg fill={ fill } height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
};

ExpandUp.propTypes = propTypes;
ExpandUp.defaultProps = defaultProps;

export default ExpandUp;
