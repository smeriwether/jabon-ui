import Account from '../../Account';

describe('<Account />', () => {
  const setup = () => {
    const wrapper = shallow(<Account />);
    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
