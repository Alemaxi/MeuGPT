import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quebraDeLinha',
  standalone: true
})
export class QuebraDeLinhaPipe implements PipeTransform {

  transform(value: string | undefined): string {
    console.log("oi");
    return (value as string).replace(/\n/g, '<br>');
  }

}
