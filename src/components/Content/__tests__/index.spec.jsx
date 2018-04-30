import Content from '../../Content';

import Project from '../components/Project';
import SmallProject from '../components/SmallProject';

describe('<Content />', () => {
  const setup = (overrides) => {
    const props = Object.assign({
      content: null,
      onContentChange: jest.fn(),
      onProjectChange: jest.fn(),
      expanded: true
    }, overrides);

    const wrapper = shallow(<Content { ...props } />);

    return { wrapper };
  };

  context('when expanded', () => {
    it('should match the snapshot', () => {
      const { wrapper } = setup({ content: 'Some content', expanded: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should show the Project component', () => {
      const { wrapper } = setup({ content: 'Some content', expanded: true });
      expect(wrapper.find(Project).length).toEqual(1);
    });
  });

  context('when not expanded', () => {
    it('should match the snapshot', () => {
      const { wrapper } = setup({ content: 'Some content', expanded: false });
      expect(wrapper).toMatchSnapshot();
    });

    it('should show the SmallProject component', () => {
      const { wrapper } = setup({ content: 'Some content', expanded: false });
      expect(wrapper.find(SmallProject).length).toEqual(1);
    });
  });

  describe('onProjectChange', () => {
    it('should call the onProjectChange prop function', () => {
      const onProjectChangeMock = jest.fn();
      const { wrapper } = setup({ onProjectChange: onProjectChangeMock });

      const project = { foo: 'bar' };
      wrapper.instance().onProjectChange(project);

      expect(onProjectChangeMock).toHaveBeenCalled();
      expect(onProjectChangeMock).toHaveBeenCalledWith(project);
    });
  });
});
