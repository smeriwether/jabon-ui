import React from 'react';
import PropTypes from 'prop-types';

import ExpandUp from '../../../../UI/ExpandUp';

const propTypes = {
  onExpand: PropTypes.func.isRequired
};

const SmallProject = ({ onExpand }) => {
  return (
    <div className='h-100 w-100 near-black flex items-center justify-between'>
      <div className='b f3 pa2'>
        Project Information
      </div>
      <div className='pointer pa2' data-role='expand' onClick={ onExpand } >
        <ExpandUp />
      </div>
    </div>
  );
};

SmallProject.propTypes = propTypes;

export default SmallProject;
