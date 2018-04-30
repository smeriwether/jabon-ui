import React from 'react';

import Logo from '../../../../UI/Logo';

const EmptyResult = () => {
  return (
    <div className='tc'>
      <Logo fill='gray' height='80' width='80' />
      <p className='gray f3 pt3'>
        There's nothing here, yet.
      </p>
    </div>
  );
};

export default EmptyResult;
