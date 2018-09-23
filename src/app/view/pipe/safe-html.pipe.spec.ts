import { SecurityContext } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  test('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));

  test('transform string to safehtml', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SafeHtmlPipe(sanitizer);
    const value = pipe.transform('<div>foo</div>');
    expect(sanitizer.sanitize(SecurityContext.HTML, value)).toBe('<div>foo</div>');
  }));
});
