import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFullName'
})
export class StudentFullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.nombre + ' ' + value.paterno + ' ' + value.materno;
  }

}
