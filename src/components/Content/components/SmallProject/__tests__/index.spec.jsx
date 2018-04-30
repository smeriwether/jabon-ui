import SmallProject from '../../SmallProject';

describe('<SmallProject />', () => {
  const setup = (overrides) => {
    const props = {
      onExpand: jest.fn(),
      ...overrides
    };

    const wrapper = shallow(<SmallProject { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onExpand prop when the expand button is clicked', () => {
    const onExpandMock = jest.fn();
    const { wrapper } = setup({ onExpand: onExpandMock });

    wrapper.find('div[data-role="expand"]').simulate('click');

    expect(onExpandMock).toHaveBeenCalled();
  });
});
