import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtoarray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
