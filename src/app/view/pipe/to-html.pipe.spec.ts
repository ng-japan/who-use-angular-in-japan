import { ToHtmlPipe } from './to-html.pipe';

describe('ToHtmlPipe', () => {
  test('create an instance', () => {
    const pipe = new ToHtmlPipe();
    expect(pipe).toBeTruthy();
  });

  test('transform text to HTML', () => {
    const pipe = new ToHtmlPipe();

    const source = ['foobar', 'with <br> break', 'http://example.com'];
    const expected = [
      '<p>foobar</p>\n',
      '<p>with <br> break</p>\n',
      '<p><a href="http://example.com">http://example.com</a></p>\n',
    ];

    source.forEach((src, i) => {
      expect(pipe.transform(src)).toEqual(expected[i]);
    });
  });
});
