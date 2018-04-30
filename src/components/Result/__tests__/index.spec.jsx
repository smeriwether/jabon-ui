import Result from '../../Result';

import EmptyResult from '../../Result/components/EmptyResult';
import ResultItem from '../../Result/components/ResultItem';

describe('<Result />', () => {
  const setup = (overrides) => {
    const props = {
      results: null,
      ...overrides
    };

    const wrapper = shallow(<Result { ...props } />);

    return { wrapper };
  };

  context('when there are no results', () => {
    it('should match the snapshot', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    it('should show the EmptyResult', () => {
      const { wrapper } = setup();
      expect(wrapper.find(EmptyResult).length).toEqual(1);
    });
  });

  context('when there are results', () => {
    it('should match the snapshot', () => {
      const results = [{ id: 1, succeeded: true, runtime: 123 }];
      const { wrapper } = setup({ results });
      expect(wrapper).toMatchSnapshot();
    });

    it('should show the ResultItem for each result', () => {
      const results = [
        { id: 1, succeeded: true, runtime: 123 }, { id: 2, succeeded: true, runtime: 123 }
      ];
      const { wrapper } = setup({ results });
      expect(wrapper.find(ResultItem).length).toEqual(2);
    });
  });
});
