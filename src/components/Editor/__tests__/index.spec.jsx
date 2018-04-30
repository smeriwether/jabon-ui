import Editor from '../../Editor';

describe('<Editor />', () => {
  const setup = (overrides) => {
    const props = {
      value: null,
      name: null,
      onChange: jest.fn(),
      ...overrides
    };

    const wrapper = shallow(<Editor { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup({ value: '<foo></foo>', name: 'editor' });
    expect(wrapper).toMatchSnapshot();
  });
});
