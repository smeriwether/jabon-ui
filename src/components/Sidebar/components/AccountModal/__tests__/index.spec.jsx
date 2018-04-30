import AccountModal from '../../AccountModal';

describe('<AccountModal />', () => {
  const setup = (overrides) => {
    const props = {
      open: false,
      onClose: jest.fn(),
      ...overrides
    };

    const wrapper = shallow(<AccountModal { ...props } />);

    return { wrapper };
  };

  context('when it is open', () => {
    it('should match the snapshot', () => {
      const { wrapper } = setup({ open: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  context('when it is closed', () => {
    it('should match the snapshot', () => {
      const { wrapper } = setup({ open: false });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
