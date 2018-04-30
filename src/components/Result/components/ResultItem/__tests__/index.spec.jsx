import ResultItem from '../../ResultItem';

import Editor from '../../../../Editor';

describe('<ResultItem />', () => {
  const setup = (overrides) => {
    const props = {
      result: {
        id: 1,
        succeeded: true,
        runtime: 123
      },
      ...overrides
    };

    const wrapper = shallow(<ResultItem { ...props } />);

    return { wrapper };
  };

  it('should render the Editor with a readOnly prop', () => {
    const { wrapper } = setup();
    const editor = wrapper.find(Editor);
    expect(editor.prop('readOnly')).toBe(true);
  });

  context('when the result succeeds', () => {
    it('should match the snapshot', () => {
      const result = { id: 1, succeeded: true, runtime: 123 };
      const { wrapper } = setup({ result });
      expect(wrapper).toMatchSnapshot();
    });
  });

  context('when the result fails', () => {
    it('should match the snapshot', () => {
      const result = { id: 2, succeeded: false, runtime: 123456 };
      const { wrapper } = setup({ result });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
