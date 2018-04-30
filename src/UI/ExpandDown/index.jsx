import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fill: PropTypes.string
};

const defaultProps = {
  fill: '#000000'
};

const ExpandDown = ({ fill }) => {
  return (
    <svg fill={ fill } height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
};

ExpandDown.propTypes = propTypes;
ExpandDown.defaultProps = defaultProps;

export default ExpandDown;
