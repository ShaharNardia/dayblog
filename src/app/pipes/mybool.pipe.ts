import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mybool'
})
export class MyboolPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == true)
    {
      return 'כן';
    }
      else{
        return 'עדיין לא';
      }
  }

}
