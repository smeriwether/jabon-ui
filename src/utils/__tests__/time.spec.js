import { formatMilliseconds } from '../time';

describe('formatMilliseconds', () => {
  context('when given time that is multiple minutes', () => {
      expect(formatMilliseconds(12345)).toEqual('12.35 seconds');
  });

  context('when given time that is only a few milliseconds', () => {
    it('should return on the milliseconds', () => {
      expect(formatMilliseconds(12)).toEqual('12 milliseconds');
    });
  });
});
