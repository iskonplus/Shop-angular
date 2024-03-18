import { ProductsLengthPipe } from './products-length.pipe';

describe('ProductsLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductsLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
