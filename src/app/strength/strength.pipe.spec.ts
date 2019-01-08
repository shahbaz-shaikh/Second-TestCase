import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should disaply weak if strength is 2', () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(2)).toEqual('2(weak)');
  })

  it('Should dispaly strong if strength is 8', () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(8)).toEqual('8(strong)');
  })

});
