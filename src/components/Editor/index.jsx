import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/xml';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';

const propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  readOnly: false,
  onChange: function() {}
};

const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  showLineNumbers: true,
  tabSize: 2
};

const Editor = ({ value, name, readOnly, onChange }) => {
  return (
    <AceEditor
      mode="xml"
      theme="tomorrow"
      name={ name }
      height="100%"
      width="100%"
      value={ value }
      readOnly={ readOnly }
      showPrintMargin={ false }
      showGutter={ true }
      highlightActiveLine={ true }
      setOptions={ editorOptions }
      onChange={ onChange }
    />
  );
};

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;
