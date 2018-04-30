import Logo from '../../Logo';

describe('<Logo />', () => {
  const setup = (overrides) => {
    const props = {
      fill: null,
      height: null,
      width: null,
      ...overrides
    };

    const wrapper = shallow(<Logo { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup({ fill: '#ffffff', height: 50, width: 50 });
    expect(wrapper).toMatchSnapshot();
  });
});
