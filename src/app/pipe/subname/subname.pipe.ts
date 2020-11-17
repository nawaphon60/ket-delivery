import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subname'
})
export class SubnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value  = value
    return value;
  }

}
