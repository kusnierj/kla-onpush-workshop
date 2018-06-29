import { Pipe, PipeTransform } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Pipe({
  name: 'beFaster'
})
export class BeFasterPipe implements PipeTransform {

  private industryTypes;

  constructor(private industryService: IndustryService) {
    this.industryService.getAll().subscribe(types => {
      this.industryTypes = types;
    })
  }

  transform(value: any, args?: any): any {
    console.log(value)
    console.log('getInstrusyType');
    if (this.industryTypes) {
      return this.industryTypes.find(x => x.id === value).text;
    }
  }

}
