import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    
    switch(args) {
      case 'all':
          value = value;
          break;
      case 'active':
          value = value.filter(item => item.done === false );
          break;
      case 'completed':
          value = value.filter(item => item.done != false );
          break;
    }
    
    return value;
  }

}
