import App from '../../App';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Content from '../../../components/Content';
import Result from '../../../components/Result';

describe('<App />', () => {
  const setup = (overrides) => {
    const props = {
      axiosClient: {},
      ...overrides
    };

    const wrapper = shallow(<App { ...props } />);

    return { wrapper };
  };

  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a Sidebar, Content, and Result component', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Sidebar).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(Content).length).toEqual(1);
    expect(wrapper.find(Result).length).toEqual(1);
  });
});
