import { Pipe, PipeTransform } from '@angular/core';
import { parse } from 'marked';

@Pipe({
  name: 'toHtml',
})
export class ToHtmlPipe implements PipeTransform {
  transform(value: string) {
    return parse(value, { gfm: true });
  }
}
