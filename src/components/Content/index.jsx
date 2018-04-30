import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Editor from '../../components/Editor';
import Project from './components/Project';
import SmallProject from './components/SmallProject';

const propTypes = {
  content: PropTypes.string,
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
  onContentChange: PropTypes.func.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  expanded: PropTypes.bool
};

const defaultProps = {
  expanded: true,
  project: {
    wsdlLink: '',
    header1: { key: '', value: '' },
    header2: { key: '', value: '' }
  }
};

const classes = {
  expandedEditor: 'h-65 w-100 fl',
  shrinkedEditor: 'h-100-h50 w-100 fl',
  expandedProject: 'h-35 w-100 fl bb bt b--moon-gray',
  shrinkedProject: 'h50 w-100 fl bb bt b--moon-gray'
};

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        wsdlLink: props.project.wsdlLink,
        header1: props.project.header1,
        header2: props.project.header2
      },
      expanded: props.expanded
    };
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded
    }));
  }

  onProjectChange = (project) => {
    this.setState((prevState) => ({
      ...prevState,
      project: Object.assign(prevState.project, project)
    }));
    this.props.onProjectChange(project);
  }

  render() {
    const { content, onContentChange } = this.props;

    return (
      <div className='h-100 w-100 br b--moon-gray'>
        <div className={ this.state.expanded ? classes.expandedEditor : classes.shrinkedEditor }>
          <Editor value={ content } name='main-editor' onChange={ onContentChange } />
        </div>
        {
          this.state.expanded ?
            <div className={ classes.expandedProject }>
              <Project
                project={ this.state.project }
                onExpand={ this.toggleExpand }
                onChange={ this.onProjectChange }
              />
            </div>
          :
            <div className={ classes.shrinkedProject }>
              <SmallProject onExpand={ this.toggleExpand } />
            </div>
        }
      </div>
    );
  }
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
