import Project from '../../Project';

describe('<Project />', () => {
  const setup = (overrides) => {
    const props = {
      project: {
        wsdlLink: '',
        header1: { key: '', value: '' },
        header2: { key: '', value: '' }
      },
      onChange: jest.fn(),
      onExpand: jest.fn(),
      ...overrides
    };

    const wrapper = shallow(<Project { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the default values from props', () => {
    const { wrapper } = setup({
      project: {
        wsdlLink: 'http://example.com',
        header1: { key: 'key1', value: 'value1' },
        header2: { key: 'key2', value: 'value2' },
      }
    });

    expect(wrapper.find('input[data-role="wsdl"]').prop('value')).toEqual('http://example.com');
    expect(wrapper.find('input[data-role="header1-key"]').prop('value')).toEqual('key1');
    expect(wrapper.find('input[data-role="header1-value"]').prop('value')).toEqual('value1');
    expect(wrapper.find('input[data-role="header2-key"]').prop('value')).toEqual('key2');
    expect(wrapper.find('input[data-role="header2-value"]').prop('value')).toEqual('value2');
  });

  context('when the wsdl input is changed', () => {
    it('should call the onChange prop with the wsdl update', () => {
      const onChangeMock = jest.fn();
      const { wrapper } = setup({ onChange: onChangeMock });

      const wsdlLink = 'http://example.com';
      wrapper.find('input[data-role="wsdl"]').simulate('change', { target: { value: wsdlLink } });

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalledWith({ wsdlLink });
    });
  });

  context('when the header 1 inputs are changed', () => {
    it('should call the onChange prop with the update', () => {
      const onChangeMock = jest.fn();
      const { wrapper } = setup({ onChange: onChangeMock });

      const headerKey = 'Authorization';
      wrapper.find('input[data-role="header1-key"]').simulate('change', { target: { value: headerKey } });

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalledWith({ header1: { key: headerKey, value: '' } });

      const headerValue = 'some-auth-key';
      wrapper.find('input[data-role="header1-value"]').simulate('change', { target: { value: headerValue } });

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalledWith({ header1: { key: headerKey, value: headerValue } });
    });
  });

  context('when the header 2 inputs are changed', () => {
    it('should call the onChange prop with the update', () => {
      const onChangeMock = jest.fn();
      const { wrapper } = setup({ onChange: onChangeMock });

      const headerValue = 'some-auth-key';
      wrapper.find('input[data-role="header2-value"]').simulate('change', { target: { value: headerValue } });

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalledWith({ header2: { key: '', value: headerValue } });

      const headerKey = 'Authorization';
      wrapper.find('input[data-role="header2-key"]').simulate('change', { target: { value: headerKey } });

      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalledWith({ header2: { key: headerKey, value: headerValue } });
    });
  });

  context('when expand button is clicked', () => {
    it('should call the onExpand prop', () => {
      const onExpandMock = jest.fn();
      const { wrapper } = setup({ onExpand: onExpandMock });

      wrapper.find('div[data-role="expand"]').simulate('click');

      expect(onExpandMock).toHaveBeenCalled();
    });
  });
});
