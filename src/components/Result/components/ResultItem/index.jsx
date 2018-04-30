import React from 'react';
import PropTypes from 'prop-types';

import Editor from '../../../Editor';
import { formatMilliseconds } from '../../../../utils/time';


const propTypes = {
  result: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    succeeded: PropTypes.bool.isRequired,
    runtime: PropTypes.number.isRequired,
    content: PropTypes.string
  }).isRequired
};

const ResultItem = ({ result }) => {
  const status = result.succeeded ? 'Success' : 'Failed';
  const runtime = formatMilliseconds(result.runtime);
  const dataRole = `result-item-${result.id}`

  return (
    <div className='h-100 w-100 pa3 bg-white ba b--moon-gray' data-role={ dataRole }>
      <div className='h-10 w-100 pb2 flex justify-between items-center'>
        <div className={ result.succeeded ? 'b dark-green' : 'b dark-red' } data-role='result-status'>
          { status }
        </div>
        <div className='silver'>
          { runtime }
        </div>
      </div>

      <div className='h-90 w-100 ba b--moon-gray' data-role='result-editor'>
        <Editor name={ 'code-editor-' + result.id } readOnly={ true } value={ result.content } />
      </div>
    </div>
  );
};

ResultItem.propTypes = propTypes;

export default ResultItem;
