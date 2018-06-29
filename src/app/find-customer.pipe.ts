import { Pipe, PipeTransform } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Pipe({
    name: 'findCustomer',
    pure: true,
})
export class FindCustomerPipe implements PipeTransform {
    constructor(
        private customerService: CustomerService,
    ) {}

    public transform(value: any, ...args: any[]) {
        console.log('FindCustomerPipe.transform');
        return this.customerService.findById(value);
    }
}
