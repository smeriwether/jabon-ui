import Sidebar from '../../Sidebar';

describe('<Sidebar />', () => {
  const setup = () => {
    const wrapper = shallow(<Sidebar />);
    return { wrapper };
  }

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
