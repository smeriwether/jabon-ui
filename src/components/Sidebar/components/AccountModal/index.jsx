import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import Account from '../../../../UI/Account';

const propType = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

const AccountModal = ({ open, onClose }) => {
  return (
    <Modal classNames={ { modal: 'h-50 w-25', closeButton: 'close-modal' } } open={ open } onClose={ onClose } center closeOnEsc>
      <div className='b f3'>Account</div>

      <div className='h-100 w-100 flex flex-column justify-center items-center near-black'>
        <Account fill='gray' height='80' width='80' />
        <p className='gray f4 pt3'>There is nothing here, yet.</p>
      </div>
    </Modal>
  );
};

AccountModal.propType = propType;

export default AccountModal;
