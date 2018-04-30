import React from 'react';
import PropTypes from 'prop-types';

import EmptyResult from './components/EmptyResult';
import ResultItem from './components/ResultItem';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    succeeded: PropTypes.bool.isRequired,
    runtime: PropTypes.number.isRequired,
    content: PropTypes.string
  }))
};

const Result = ({ results }) => {
  const empty = !results || results.length === 0;

  const emptyView = () => {
    return (
      <div className='h-100 w-100 flex justify-center items-center'>
        <EmptyResult />
      </div>
    );
  };

  const resultsView = () => {
    return results.map((result) => {
      return (
        <div className='h400 w-100 pb3' key={ result.id } >
          <ResultItem result={ result } />
        </div>
      );
    });
  };

  return (
    <div className='h-100 w-100 pa3 bg-light-gray bb br b--moon-gray overflow-scroll'>
      { empty ? emptyView() : resultsView() }
    </div>
  );
};

Result.propTypes = propTypes;

export default Result;
