import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

const Account = ({ fill='#ffffff', height='40', width='40', onClick }) => {
  return (
    <div id='account' onClick={ onClick }>
      <svg height={ height } width={ width } viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" baseProfile="full">
        <path id='account' d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z" fill={ fill } opacity="1.000000"></path>
      </svg>
    </div>
  );
}

Account.propTypes = propTypes;

export default Account;
