import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../model';
import { CustomerService } from '../services/customer.service';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'op-customer-section',
    templateUrl: 'customer-section.component.html',
})
export class CustomerSectionComponent {
    @Input() public customer: Customer;
    @Input() public isExpanded = true;

    public isEdit = false;

    constructor(
        private customerService: CustomerService,
    ) {}
}
