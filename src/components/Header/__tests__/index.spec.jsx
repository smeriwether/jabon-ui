import Header from '../../Header';

describe('<Header />', () => {
  const setup = (overrides) => {
    const props = {
      onSubmit: jest.fn(),
      ...overrides
    };

    const wrapper = shallow(<Header { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onSubmit prop when the submit button is clicked', () => {
    const onSubmitMock = jest.fn();
    const { wrapper } = setup({ onSubmit: onSubmitMock });

    wrapper.find('button[data-role="submit"]').simulate('click');

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
