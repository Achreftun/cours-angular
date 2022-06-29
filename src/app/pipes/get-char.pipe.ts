import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value[0];
  }

}
