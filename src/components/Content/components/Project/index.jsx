import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpandDown from '../../../../UI/ExpandDown';

const propTypes = {
  project: PropTypes.shape({
    wsdlLink: PropTypes.string,
    header1: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    }),
    header2: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  }),
  onChange: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired
};

const defaultProps = {
  project: {
    wsdlLink: '',
    header1: { key: '', value: '' },
    header2: { key: '', value: '' }
  }
};

const styles = {
  label: 'fw7 f6',
  input: 'w-100 pa2 mt2 br2 b--black-20 ba f6'
};

const text = {
  placeholder: 'Placeholder...'
};

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wsdlLink: props.project.wsdlLink,
      header1Key: props.project.header1.key,
      header1Value: props.project.header1.value,
      header2Key: props.project.header2.key,
      header2Value: props.project.header2.value
    };
  }

  onWsdlChange = (input) => {
    const value = input.target.value;
    this.setState({ wsdlLink: value });
    this.props.onChange({ wsdlLink: value });
  }

  onHeader1KeyChange = (input) => {
    const value = input.target.value;
    this.setState({ header1Key: value });
    this.props.onChange({ header1: { key: value, value: this.state.header1Value } });
  }

  onHeader1ValueChange = (input) => {
    const value = input.target.value;
    this.setState({ header1Value: value });
    this.props.onChange({ header1: { key: this.state.header1Key, value: value } });
  }

  onHeader2KeyChange = (input) => {
    const value = input.target.value;
    this.setState({ header2Key: value });
    this.props.onChange({ header2: { key: value, value: this.state.header2Value } });
  }

  onHeader2ValueChange = (input) => {
    const value = input.target.value;
    this.setState({ header2Value: value });
    this.props.onChange({ header2: { key: this.state.header2Key, value: value } });
  }

  render() {
    return (
      <div className='h-100 w-100 pa3 near-black overflow-scroll'>
        <div className='flex justify-between'>
          <div className='b f3'>
            Project Information
          </div>
          <div className='pointer' data-role='expand' onClick={ this.props.onExpand } >
            <ExpandDown />
          </div>
        </div>

        <div className='pt4 pb4'>
          <label className={ styles.label } htmlFor='wsdl'>WSDL Link</label>
          <input
            id='wsdl'
            data-role='wsdl'
            value={ this.state.wsdlLink }
            className={ styles.input }
            placeholder={ text.placeholder }
            onChange={ (i) => { this.onWsdlChange(i) } }
          >
          </input>
        </div>

        <div className='w-50 fl pr3 pb3'>
          <label className={ styles.label } htmlFor='header1-key'>Header Key</label>
          <input
            id='header1-key'
            data-role='header1-key'
            value={ this.state.header1Key }
            className={ styles.input }
            placeholder={ text.placeholder }
            onChange={ (i) => { this.onHeader1KeyChange(i) } }
          >
          </input>
        </div>
        <div className='w-50 fl pb3'>
          <label className={ styles.label } htmlFor='header1-value'>Header Value</label>
          <input
            id='header1-value'
            data-role='header1-value'
            value={ this.state.header1Value }
            className={ styles.input }
            placeholder={ text.placeholder }
            onChange={ (i) => { this.onHeader1ValueChange(i) } }
          >
          </input>
        </div>

        <div className='w-50 fl pr3 pb3'>
          <label className={ styles.label } htmlFor='header2-key'>Header Key</label>
          <input
            id='header2-key'
            data-role='header2-key'
            value={ this.state.header2Key }
            className={ styles.input }
            placeholder={ text.placeholder }
            onChange={ (i) => { this.onHeader2KeyChange(i) } }
          >
          </input>
        </div>
        <div className='w-50 fl pb3'>
          <label className={ styles.label } htmlFor='header2-value'>Header Value</label>
          <input
            id='header2-value'
            data-role='header2-value'
            value={ this.state.header2Value }
            className={ styles.input }
            placeholder={ text.placeholder }
            onChange={ (i) => { this.onHeader2ValueChange(i) } }
          >
          </input>
        </div>
      </div>
    );
  }
};

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
