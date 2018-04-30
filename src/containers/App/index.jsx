import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Result from '../../components/Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      project: {
        wsdlLink: '',
        header1: { key: '', value: '' },
        header2: { key: '', value: '' }
      },
      results: []
    };
  }

  createResult = ({ id, content, succeeded, runtime }) => {
    this.setState((prevState) => ({
      ...prevState,
      results: [{ content, id, succeeded, runtime }, ...prevState.results]
    }));
  }

  onSubmit = () => {
    const { axiosClient } = this.props;
    const { content, project } = this.state;
    const { wsdlLink, header1, header2 } = project;

    const now = Date.now();

    axiosClient
      .post('/soap_requests', {
        content,
        wsdlLink,
        header1,
        header2
      })
      .then((response) => {
        this.createResult({
          id: response.data.id,
          content: response.data.content,
          succeeded: true,
          runtime: Date.now() - now
        });
      })
      .catch((response) => {
        this.createResult({
          id: now,
          content: response.message,
          succeeded: false,
          runtime: Date.now() - now
        });
      });
  }

  onContentChange = (content) => {
    this.setState((prevState) => ({
      ...prevState,
      content
    }));
  }

  onProjectChange = (project) => {
    this.setState((prevState) => ({
      ...prevState,
      project: Object.assign(prevState.project, project)
    }));
  }

  render() {
    return (
      <div className='h-100 w-100'>
        <div className='h-100 w60 fl'>
          <Sidebar />
        </div>
        <div className='h50 w-100-w60 fl'>
          <Header onSubmit={ this.onSubmit } />
        </div>
        <div className='h-100-h50 w-55-w30 fl'>
          <Content
            content={ this.state.content }
            wsdlLink={ this.state.wsdlLink }
            project={ this.state.project }
            onContentChange={ this.onContentChange }
            onProjectChange={ this.onProjectChange }
          />
        </div>
        <div className='h-100-h50 w-45-w30 fl'>
          <Result results={ this.state.results } />
        </div>
      </div>
    );
  }
};

export default App;
