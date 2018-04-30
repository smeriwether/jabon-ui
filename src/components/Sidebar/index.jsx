import React, { Component } from 'react';

import AccountModal from './components/AccountModal';
import Logo from '../../UI/Logo';
import Account from '../../UI/Account';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openAccountModal: false
    };
  }

  toggleAccountModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      openAccountModal: !prevState.openAccountModal
    }));
  }

  render() {
    return (
      <div className='h-100 w-100 pb3 bg-blue flex flex-column justify-between items-center'>
        <Logo fill='#357EDD' />
        <Account fill='white' onClick={ this.toggleAccountModal } />

        <AccountModal open={ this.state.openAccountModal } onClose={ this.toggleAccountModal } />
      </div>
    );
  }
};

export default Sidebar;
