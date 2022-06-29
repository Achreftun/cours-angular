import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenValue'
})
export class EvenValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
